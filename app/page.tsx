import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
