import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Real-Estate Platform",
    description: "A platform for finding real estate properties for rent.",
    image: "/project-one.png",
  },
  {
    id: 2,
    title: "Home Application",
    description: "An mobile application made by Flutter.",
    image: "/project-two.png",
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description: "A full-stack website for managing restaurant operations.",
    image: "/project-three.png",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 justify-between lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className={`font-serif text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl/none`}>
                  Hi, I&apos;m Vĩnh Bảo Phúc
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  A passionate developer focused on creating beautiful and functional web experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button size="lg">View My Work</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/profile-removebg-preview.png"
                  alt="Profile Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent work
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-background">
                  <div className="aspect-video overflow-hidden">
                    {/* <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    /> */}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/projects">
              <Button>View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}