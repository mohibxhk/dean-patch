import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import WhoWeWorkWith from "@/components/landing/WhoWeWorkWith";
import Gallery from "@/components/landing/Gallery";
import QuoteForm from "@/components/landing/QuoteForm";
import Footer from "@/components/landing/Footer";

const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Process />
      <WhoWeWorkWith />
      <Gallery />
      <QuoteForm />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
