import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import HowItWorks from "../components/sections/HowItWorks";
import VisualizationSection from "../components/sections/VisualizationSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

function WelcomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <VisualizationSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default WelcomePage;
