import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white font-bold text-lg">
                U
              </div>
              <span className="font-poppins font-bold text-xl gradient-text">UMYIDI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering youths from marginalized backgrounds and persons with disabilities through innovative programs and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/community" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Community
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Programs</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Ideate Nigeria Challenge</p>
              <p className="text-sm text-muted-foreground">Youth Ideas Challenge</p>
              <p className="text-sm text-muted-foreground">Ezumezu Podcast</p>
              <p className="text-sm text-muted-foreground">Teens Townhall</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              <a href="mailto:info@umyidi.org" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@umyidi.org</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+123 456 7890</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 UMYIDI. All rights reserved. Empowering youth for a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;