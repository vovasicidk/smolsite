import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
              <span className="text-xl font-bold">Bestvovsos</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              variant="default"
            >
              Join Waitlist
            </Button>
          </nav>
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="border-t border-slate-200 py-2 px-4 space-y-2">
          <button 
            onClick={() => scrollToSection('features')} 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
          >
            FAQ
          </button>
          <Button 
            onClick={() => scrollToSection('waitlist')}
            variant="default"
            className="w-full mt-2"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
