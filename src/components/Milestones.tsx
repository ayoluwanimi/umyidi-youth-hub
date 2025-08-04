import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mic, Trophy, Users, Podcast } from "lucide-react";
import { Link } from "react-router-dom";

const Milestones = () => {
  const milestones = [
    {
      icon: Trophy,
      title: "Ideate Nigeria Youth Challenge",
      description: "Our Ideate Nigeria Youth Challenge enters its 3rd year, empowering young entrepreneurs across the nation.",
      metric: "3rd Year",
      link: "/projects/ideate-nigeria",
      social: {
        platform: "Instagram",
        icon: Instagram,
        url: "#"
      },
      color: "primary",
      stats: "500+ Participants"
    },
    {
      icon: Users,
      title: "Bi-monthly Teens Townhall",
      description: "Our Bi-monthly Teens Townhall meeting reaches its 2,000th milestone, fostering youth dialogue.",
      metric: "2,000+ Meetings",
      link: "/community/about",
      social: null,
      color: "accent",
      stats: "10,000+ Youth Reached"
    },
    {
      icon: Podcast,
      title: "Ezumezu Podcast",
      description: "We successfully launched Ezumezu Podcast, where youths recount stories of growth and inspiration.",
      metric: "Newly Launched",
      link: "/projects/ezumezu-podcast",
      social: {
        platform: "Facebook",
        icon: Facebook,
        url: "#"
      },
      color: "success",
      stats: "50+ Episodes Planned"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Journey Thus Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every milestone represents countless lives touched, dreams realized, and futures brightened. 
            Here's a glimpse of our collective impact.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const SocialIcon = milestone.social?.icon;
            
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-l-4 ${
                  milestone.color === 'primary' ? 'border-l-primary' :
                  milestone.color === 'accent' ? 'border-l-accent' :
                  'border-l-success'
                }`}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    milestone.color === 'primary' ? 'bg-primary/10 text-primary' :
                    milestone.color === 'accent' ? 'bg-accent/10 text-accent' :
                    'bg-success/10 text-success'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        milestone.color === 'primary' ? 'bg-primary/10 text-primary' :
                        milestone.color === 'accent' ? 'bg-accent/10 text-accent' :
                        'bg-success/10 text-success'
                      }`}
                    >
                      {milestone.metric}
                    </Badge>
                    {milestone.social && SocialIcon && (
                      <Button variant="ghost" size="icon" className="opacity-60 hover:opacity-100" asChild>
                        <a href={milestone.social.url} target="_blank" rel="noopener noreferrer">
                          <SocialIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardTitle className="text-xl font-poppins group-hover:text-primary transition-colors">
                    {milestone.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <span className={`text-sm font-semibold ${
                      milestone.color === 'primary' ? 'text-primary' :
                      milestone.color === 'accent' ? 'text-accent' :
                      'text-success'
                    }`}>
                      {milestone.stats}
                    </span>
                    
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={milestone.link}>
                        Learn More →
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild>
            <Link to="/about/mission">
              Explore Our Full Story
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;