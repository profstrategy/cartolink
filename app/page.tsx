import Navbar from "@/components/navbar/navbar";
import AppHeroSection from "./components/hero-section/hero";
import GenerateSection from "./components/generate-section/generate";
import Gallery from "./components/gallery-section/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <div className="mb-16">
      <Navbar />
      <AppHeroSection />
      </div>
      <GenerateSection />
      <Gallery />
      <Footer />
    </>
  );
}
