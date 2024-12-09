import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero  />
      <FeaturedProducts />
      <Latest />
      <Footer />
    </div>
  );
}
