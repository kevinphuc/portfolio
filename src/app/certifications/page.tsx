import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Award } from "lucide-react";
import Link from "next/link";

// Sample certifications data
const certifications: Array<{
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialID: string;
  description: string;
  skills: string[];
  verificationUrl: string;
  image: string;
}> = [
  {
    id: 1,
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date: "October 2023",
    credentialID: "Coursera PRXQBRXAK5A4",
    description: "An introductory course to programming using Python, covering basic concepts and practical applications.",
    skills: ["Computational Thinking", "Development Environment", "Command-Line Interface", "Computer Programming", "Programming Principles", "Software Installation", "Python Programming"],
    verificationUrl: "https://coursera.org/share/1e4a5f21e4f6c00ef32109580d5a8085",
    image: "/coursera-certification.png"
  },
  {
    id: 2,
    title: "Android Development with Kotlin",
    issuer: "Google",
    date: "October 2023",
    credentialID: "",
    description: "An introductory course to Android development using Kotlin.",
    skills: ["Android Development", "Kotlin"],
    verificationUrl: "https://developers.google.com/profile/badges/tier/courses/android/android-development-with-kotlin?authuser=3",
    image: "/google-android.png"
  },
  // {
  //   id: 3,
  //   title: "AWS Certified Developer - Associate",
  //   issuer: "Amazon Web Services",
  //   date: "November 2021",
  //   credentialID: "AWS-DEV-123456",
  //   description: "Certification validating technical expertise in developing and maintaining applications on the AWS platform.",
  //   skills: ["AWS Lambda", "DynamoDB", "S3", "CloudFormation", "API Gateway"],
  //   verificationUrl: "https://example.com/verify/AWS-DEV-123456",
  //   image: "/placeholder-cert-3.jpg"
  // },
  // {
  //   id: 4,
  //   title: "Professional Scrum Master I (PSM I)",
  //   issuer: "Scrum.org",
  //   date: "July 2021",
  //   credentialID: "PSM-I-1234567",
  //   description: "Certification demonstrating understanding of Scrum framework and the role of the Scrum Master.",
  //   skills: ["Scrum", "Agile Methodologies", "Team Facilitation", "Sprint Planning"],
  //   verificationUrl: "https://example.com/verify/PSM-I-1234567",
  //   image: "/placeholder-cert-4.jpg"
  // }
];

export default function CertificationsPage() {
  return (
    <div className="container mx-auto py-12 md:py-16 lg:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">Certifications</h1>
        <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
          Professional certifications I&apos;ve earned throughout my career journey.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {certifications.length != 0 ? certifications.map((cert) => (
          <div key={cert.id} className="group rounded-lg border overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">{cert.title}</h2>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <Award className="h-4 w-4 mr-1" />
                <span>{cert.issuer} • ID: {cert.credentialID}</span>
              </div>
              
              <p className="mb-4">{cert.description}</p>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="col-span-2 text-center">
            <p className="text-muted-foreground">I am currently learning.</p>
          </div>
        )}
      </div>
    </div>
  );
}