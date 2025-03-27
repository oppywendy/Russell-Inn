import Contact from "../component/Contact";
import Event from "../component/Event";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Landing from "../component/Landing";
import Lounge from "../component/Lounge";
import Testimonials from "../component/Testimonials";

const Homescreen = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Hero />
      <Lounge />
      <Gallery />
      <Event />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homescreen;
