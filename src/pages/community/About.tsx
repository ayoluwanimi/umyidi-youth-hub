import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Target, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import communityImage from "@/assets/community-image.jpg";

const CommunityAbout = () => {
  const values = [
    {
      icon: Heart,
      title: "Inclusivity",
      description: "We welcome and celebrate youth from all backgrounds, especially those from marginalized communities."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We provide tools, skills, and opportunities that enable young people to reach their full potential."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We focus on creating sustainable positive change in communities across Nigeria."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve common goals and shared success."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Our Community
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Building Bridges, Creating Change
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Join a vibrant community of young changemakers, mentors, and supporters 
              working together to transform lives and communities.
            </p>
          </div>
        </section>

        {/* Community Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  More Than Just a Network
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our community is a safe space where young people from marginalized backgrounds 
                  and persons with disabilities can connect, learn, grow, and support each other. 
                  We foster an environment of mutual respect, continuous learning, and collective empowerment.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Through regular meetups, online forums, mentorship programs, and collaborative projects, 
                  our community members build lasting relationships while working towards personal and 
                  professional development.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/community/join">
                    Join Our Community
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src={communityImage}
                  alt="UMYIDI Community"
                  className="rounded-2xl shadow-hero w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide our community interactions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="font-poppins">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Active Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <p className="text-muted-foreground">Mentors</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">15</div>
                <p className="text-muted-foreground">States Reached</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <p className="text-muted-foreground">Success Stories</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Become part of a movement that's transforming lives and communities across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/community/join">
                  Become a Member
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/community/register">
                  Register for Programs
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommunityAbout;