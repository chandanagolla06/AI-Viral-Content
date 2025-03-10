
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight">ViralWavez</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full glass-effect p-4 flex flex-col gap-4 animate-in slide-in-from-top">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
            <Button variant="ghost" size="sm" className="justify-center">
              Sign In
            </Button>
            <Button size="sm" className="justify-center">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
