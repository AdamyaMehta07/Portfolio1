import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          © {year} {personal.name}. Built from scratch.
        </p>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-amber transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-amber transition-colors"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-1.5 hover:text-amber transition-colors"
          >
            <Mail size={14} /> Email
          </a>
          <a
            href="/Adamya_Mehta_Resume.pdf"
            download
            className="hover:text-amber transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
