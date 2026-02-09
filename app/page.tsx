import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-20">
        <Hero />
        
        <div id="trayectoria">
          <Timeline />
        </div>

        <div id="proyectos">
          <Projects />
        </div>
        
        <Footer />
      </main>
    </>
  );
}