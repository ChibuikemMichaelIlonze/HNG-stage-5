import Navbar from "../components/Sections/Navbar.jsx";
import Hero from "../components/Sections/Hero.jsx";
import Line from "../components/Sections/Line.jsx";
import Features from "../components/Sections/Features.jsx";
import Works from "../components/Sections/Works.jsx";
import Footer from "../components/Sections/Footer.jsx";

const LandingPage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <Line />
      <Works />
      <Footer />
    </section>
  );
};

export default LandingPage;
