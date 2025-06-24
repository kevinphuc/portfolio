import { CalendarIcon, MapPin, Building } from "lucide-react";

// Sample experiences data
const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "AirCity Co,. Ltd.",
    location: "Ho Chi Minh City, Vietnam",
    period: "August 2024 - December 2024",
    description: "As an intern, I am learning and contributing to various frontend development simple tasks.",
    responsibilities: [
      "Assisted in the development of a design system",
      "Helped optimize website performance",
      "Collaborated with UX/UI designers",
      "Integrated third-party APIs and services"
    ]
  },
];

export default function ExperiencesPage() {
  return (
    <div className="container mx-auto py-12 md:py-16 lg:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">Work Experience</h1>
        <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
          My professional journey and the roles that have shaped my career.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">{index + 1}</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border bg-background shadow">
                <div className="flex flex-col space-y-1 mb-2">
                  <h2 className="text-xl font-bold">{experience.role}</h2>
                  <div className="flex items-center text-muted-foreground">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                
                <p className="mt-4">{experience.description}</p>
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-muted-foreground">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}