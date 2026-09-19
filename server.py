from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


SERVICES = [
    "Regular house cleaning",
    "Deep cleaning",
    "End-of-lease cleaning",
    "Window cleaning",
    "Oven cleaning",
    "One-off clean",
    "Not sure yet",
]


class QuoteRequestCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    suburb: str = Field(min_length=2, max_length=100)
    service: str = Field(min_length=2, max_length=100)
    contact: str = Field(default="", max_length=120)
    message: str = Field(default="", max_length=2000)

    @field_validator("name", "suburb", "service", "contact", "message", mode="before")
    @classmethod
    def strip_whitespace(cls, v):
        return v.strip() if isinstance(v, str) else v

    @field_validator("service")
    @classmethod
    def service_must_be_known(cls, v):
        if v not in SERVICES:
            raise ValueError("Unknown service")
        return v


class QuoteRequest(QuoteRequestCreate):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Dean Patching Local Cleaning API"}


@api_router.get("/services", response_model=List[str])
async def get_services():
    return SERVICES


@api_router.post("/quotes", response_model=QuoteRequest)
async def create_quote_request(input: QuoteRequestCreate):
    quote = QuoteRequest(**input.model_dump())
    doc = quote.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.quote_requests.insert_one(doc)
    return quote


@api_router.get("/quotes", response_model=List[QuoteRequest])
async def get_quote_requests():
    quotes = await db.quote_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for q in quotes:
        if isinstance(q['created_at'], str):
            q['created_at'] = datetime.fromisoformat(q['created_at'])
    return quotes


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
