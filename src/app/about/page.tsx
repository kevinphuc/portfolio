import Image from "next/image";

const skills = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Figma", "Responsive Design"],
  },
];
const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "International University - Vietnam National University HCM",
    year: "2020-2025",
    status: "Undergraduate",
    description: "",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Learn more about my background, skills, and what drives me.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_3fr] items-start">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/profile-removebg-preview.png"
              alt="Vinh Bao Phuc"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Who I Am</h2>
            <p>
              I&apos;m a passionate developer focused on creating beautiful and functional web experiences.
              With a background in computer science and a love for design, I bring a unique perspective
              to every project I work on.
            </p>
            <p>
              My journey in web development started a year ago, and since then I&apos;ve been continuously
              learning and adapting to new technologies and approaches. I believe in clean code,
              intuitive user experiences, and the power of the web to connect people.
            </p>
            <p>
              Not only web development, I also enjoy exploring new technologies and
              tools that can enhance my workflow and the quality of my work.
            </p>
            <p>
              Furthermore, I started my new journey in mobile development with Flutter.
              Although there are still many things to learn, I am excited to participate in this new field and
              accept the challenges it brings.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">My Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((category) => (
              <div key={category.category} className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">{category.category}</h3>
                <ul className="space-y-1">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}, {edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}