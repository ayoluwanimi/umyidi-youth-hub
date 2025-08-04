import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "HOME", href: "/" },
    {
      name: "Projects",
      items: [
        { name: "Ideate Nigeria Youth Enterprise Challenge", href: "/projects/ideate-nigeria" },
        { name: "Youth Ideas Challenge", href: "/projects/youth-ideas" },
        { name: "Ezumezu: The Podcast", href: "/projects/ezumezu-podcast" },
      ],
    },
    {
      name: "Community",
      items: [
        { name: "About", href: "/community/about" },
        { name: "Register for a Program", href: "/community/register" },
        { name: "Become a Member/Volunteer", href: "/community/join" },
      ],
    },
    {
      name: "About UMYIDI",
      items: [
        { name: "History", href: "/about/history" },
        { name: "Mission & Vision", href: "/about/mission" },
        { name: "Board of Directors", href: "/about/board" },
        { name: "Youth Advisory Board", href: "/about/youth-board" },
        { name: "Partnership", href: "/about/partnership" },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white font-bold text-lg">
              U
            </div>
            <span className="font-poppins font-bold text-xl gradient-text">UMYIDI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  <>
                    <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                              isActiveLink(subItem.href) && "bg-accent text-accent-foreground"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActiveLink(item.href!) ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="hidden lg:flex" asChild>
            <Link to="/community/register">Get Started</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col mt-8">
                <div className="space-y-1">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.items ? (
                        <div className="space-y-1">
                          <div className="px-3 py-2 text-sm font-medium text-muted-foreground border-b border-border">
                            {item.name}
                          </div>
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={cn(
                                "block px-6 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
                                isActiveLink(subItem.href) && "bg-accent text-accent-foreground font-medium"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.href!}
                          className={cn(
                            "block px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
                            isActiveLink(item.href!) && "bg-accent text-accent-foreground"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 px-3">
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <Link to="/community/register" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;