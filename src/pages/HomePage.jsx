import Line from "../components/Home/Line.jsx";
import Features from "../components/Home/Features.jsx";
import Works from "../components/Home/Works.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Hero from "../components/Home/Hero.jsx";
import Header from "../components/Header/Header.jsx";

const HomePage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Line />
      <Features />
      <Line />
      <Works />
      <Footer />
    </section>
  );
};

export default HomePage;
