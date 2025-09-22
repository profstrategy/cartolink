import dynamic from "next/dynamic";
const AppHeroSection = dynamic(() => import('./components/hero-section/hero'))
const GenerateSection = dynamic(() => import('./components/generate-section/generate'))
const Gallery = dynamic(() => import('./components/gallery-section/gallery'))

export default function Home() {
  return (
    <div className="flex flex-col md:gap-8 gap-4 dark:bg-black">
      <AppHeroSection />
      <GenerateSection />
      <Gallery />
    </div>
  );
}
