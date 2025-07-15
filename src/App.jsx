import "./App.css";
import { Header } from "./components/layout/Header";
import { AboutSection } from "./pages/About";
import WhyChooseUs from "./pages/ChooseUs";
import Footer from "./pages/Footer";
import HeroSection from "./pages/Home";
import PricingSection from "./pages/PricingSection";
import ServicesPage from "./pages/Service";
import { VideoShowcaseSection } from "./pages/VideoShow";

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <VideoShowcaseSection/>
      <ServicesPage/>
      <WhyChooseUs/>
      <PricingSection/>
      <Footer/>
    </>
  );
}

export default App;
