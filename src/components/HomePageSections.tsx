import homeData from '../content/pages/home.json';
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Phone, BookOpen, Heart } from "lucide-react";

const HomePageSections = () => {
  const sections = [
    {
      title: "Our Projects",
      description: "Innovative programs designed to empower youth and create lasting impact in communities.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      link: "/projects",
      highlights: ["Ideate Nigeria Challenge", "Youth Ideas Challenge", "Ezumezu Podcast"]
    },
    {
      title: "Community",
      description: "Join our vibrant community of change-makers and access programs tailored for growth.",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "/community",
      highlights: ["Register for Programs", "Become a Member", "Join as Volunteer"]
    },
    {
      title: "About UMYIDI",
      description: "Learn about our history, mission, and the dedicated team driving positive change.",
      icon: <Target className="h-8 w-8 text-primary" />,
      link: "/about",
      highlights: ["Our History", "Mission & Vision", "Leadership Team"]
    },
    {
      title: "Services",
      description: "Comprehensive support services designed to help youth achieve their full potential.",
      icon: <Heart className="h-8 w-8 text-primary" />,
      link: "/services",
      highlights: ["Mentorship", "Training Programs", "Resource Access"]
    },
    {
      title: "Blog",
      description: "Stay updated with stories, insights, and news from our community and programs.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "/blog",
      highlights: ["Success Stories", "Program Updates", "Community News"]
    },
    {
      title: "Get in Touch",
      description: "Ready to make a difference? Connect with us and start your journey today.",
      icon: <Phone className="h-8 w-8 text-primary" />,
      link: "/contact",
      highlights: ["Contact Information", "Office Locations", "Social Media"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore UMYIDI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our programs, join our community, and be part of the change you want to see in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  {section.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {section.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={section.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageSections;