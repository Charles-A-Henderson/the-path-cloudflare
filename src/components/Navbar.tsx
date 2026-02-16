import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Teacher Training", href: "/teacher-training" },
  { label: "Corporate", href: "/corporate" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
          The Path
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="rounded-full px-6 bg-sage text-sage-foreground hover:bg-sage/90">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="w-full rounded-full bg-sage text-sage-foreground hover:bg-sage/90">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
