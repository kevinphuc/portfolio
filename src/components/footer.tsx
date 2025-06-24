import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 flex items-center ">
      <div className="w-full flex flex-col items-center justify-between md:flex-row px-5">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Vinh Bao Phuc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link 
            href="https://github.com/vinhbaophuc1611" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/kevinphuc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://x.com/Kevin__Phuc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}