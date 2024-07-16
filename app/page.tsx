import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <Navbar />
        <Hero />
        {/* <Project /> */}
      </div>
    </main>
  );
}
