// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Real-Estate Platform",
    description: "A full-stack real-estate platform built with Next.js, Sass, and GraphQL integration. Features include user authentication, property management, search functionality, and payment processing.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "Sass", "GraphQL"],
    liveUrl: "https://thegioiphong.com",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Home Application",
    description: "An application for assisting homeowners in approving repair, installation and management orders.",
    image: "/placeholder-project-2.jpg",
    tags: ["Flutter", "GraphQL"],
    liveUrl: "https://play.google.com/store/apps/details?id=co.aircity.home&hl=vi",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website built with modern technologies showcasing projects and skills.",
    image: "/placeholder-project-3.jpg",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://portfolio-vinh-bao-phucs-projects.vercel.app/",
    githubUrl: "https://github.com/kevinphuc/portfolio",
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description: "A restaurant management system for creating and managing menus.",
    image: "/placeholder-project-4.jpg",
    tags: ["React", "Node.js", "Express", "SQL"],
    liveUrl: "",
    githubUrl: "https://github.com/vinhbaophuc1611/project4",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24 mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">My Projects</h1>
        <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
          Explore my recent work and see the range of projects I&apos;ve built using various technologies.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12 ">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col overflow-hidden rounded-lg border">
            <div className="aspect-video relative overflow-hidden">
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              /> */}
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}