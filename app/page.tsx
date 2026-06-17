import Navbar from '@/components/sections/Navbar';
import ParallaxStory from '@/components/sections/ParallaxStory';
import Projects from '@/components/sections/Projects';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <ParallaxStory />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
