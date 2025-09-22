import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('@/components/navbar/navbar'))
const AppHeroSection = dynamic(() => import('./components/hero-section/hero'))
const GenerateSection = dynamic(() => import('./components/generate-section/generate'))
const Gallery = dynamic(() => import('./components/gallery-section/gallery'))
const Footer = dynamic(() => import('@/components/footer'))

export default function Home() {
  return (
    <div className="flex flex-col md:gap-8 gap-4 dark:bg-black">
      <AppHeroSection />
      <GenerateSection />
      <Gallery />
    </div>
  );
}
