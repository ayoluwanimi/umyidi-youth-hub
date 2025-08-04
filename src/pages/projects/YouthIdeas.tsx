import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Brain, Rocket, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const YouthIdeas = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Idea Incubation",
      description: "Transform raw ideas into structured business concepts through guided workshops."
    },
    {
      icon: Brain,
      title: "Creative Thinking",
      description: "Develop critical thinking and problem-solving skills essential for innovation."
    },
    {
      icon: Users,
      title: "Peer Collaboration",
      description: "Work with like-minded youth to refine and strengthen your ideas."
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "Get the resources and mentorship needed to bring your ideas to life."
    }
  ];

  const categories = [
    "Social Innovation",
    "Technology Solutions",
    "Environmental Impact",
    "Education Reform",
    "Healthcare Access",
    "Economic Empowerment"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-accent to-primary-glow py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Innovation Challenge
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Youth Ideas Challenge
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
              A platform where young minds showcase their innovative solutions to real-world problems, 
              fostering creativity and entrepreneurial thinking among Nigerian youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Submit Your Idea
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Explore Past Ideas
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Where Innovation Meets Opportunity
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The Youth Ideas Challenge is designed to capture and nurture the creative potential of young Nigerians. 
                We believe every young person has the capacity to develop solutions that can transform communities and drive positive change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="font-poppins">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Challenge Categories
              </h2>
              <p className="text-xl text-muted-foreground">
                Submit your ideas across various impact areas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="card-shadow hover:shadow-primary transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to submit and develop your idea
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Submit Idea", description: "Share your innovative solution through our online platform" },
                { step: "02", title: "Review & Selection", description: "Our panel evaluates submissions based on innovation and impact" },
                { step: "03", title: "Development Phase", description: "Selected ideas receive mentorship and development support" },
                { step: "04", title: "Showcase & Launch", description: "Present your refined idea to investors and potential partners" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-accent-light text-white">
          <div className="container mx-auto px-4 text-center">
            <Clock className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Ready to Share Your Big Idea?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Don't let your innovative ideas remain just thoughts. Join thousands of young innovators 
              and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                Submit Your Idea
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <Link to="/community/register">
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YouthIdeas;