import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Lightbulb, Gift, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Join = () => {
  const membershipTypes = [
    {
      title: "Community Member",
      description: "Join our vibrant community of young changemakers",
      benefits: [
        "Access to community forums and discussions",
        "Monthly virtual meetups and networking events",
        "Access to resource library and materials",
        "Peer support and mentorship opportunities",
        "Early access to program announcements"
      ],
      commitment: "No specific time commitment",
      cost: "Free",
      icon: Users,
      color: "primary"
    },
    {
      title: "Active Volunteer",
      description: "Contribute your time and skills to support our mission",
      benefits: [
        "All community member benefits",
        "Direct involvement in program delivery",
        "Skills development through volunteering",
        "Recognition and volunteer certificates",
        "Leadership development opportunities",
        "Exclusive volunteer appreciation events"
      ],
      commitment: "4-8 hours per month",
      cost: "Free",
      icon: Heart,
      color: "accent"
    },
    {
      title: "Mentor",
      description: "Guide and support the next generation of leaders",
      benefits: [
        "All volunteer benefits",
        "Direct mentorship assignments",
        "Mentor training and development",
        "Access to mentor resources and tools",
        "Quarterly mentor appreciation events",
        "Professional development credits"
      ],
      commitment: "2-4 hours per week",
      cost: "Free",
      icon: Lightbulb,
      color: "success"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Choose Your Path",
      description: "Select how you'd like to contribute to our community"
    },
    {
      step: "02",
      title: "Complete Application",
      description: "Fill out our simple application form"
    },
    {
      step: "03",
      title: "Orientation",
      description: "Attend our welcome session and orientation"
    },
    {
      step: "04",
      title: "Start Making Impact",
      description: "Begin your journey with UMYIDI community"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-success via-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Join Our Movement
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Become a Member or Volunteer
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              Join thousands of young people and supporters working together to create 
              positive change in communities across Nigeria.
            </p>
            <Button variant="accent" size="xl" className="bg-white text-primary hover:bg-white/90">
              Start Your Journey
            </Button>
          </div>
        </section>

        {/* Membership Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Ways to Get Involved
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose how you'd like to contribute to our mission
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {membershipTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className={`card-shadow hover:-translate-y-2 transition-all duration-300 border-l-4 ${
                    type.color === 'primary' ? 'border-l-primary' :
                    type.color === 'accent' ? 'border-l-accent' :
                    'border-l-success'
                  }`}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        type.color === 'primary' ? 'bg-primary/10 text-primary' :
                        type.color === 'accent' ? 'bg-accent/10 text-accent' :
                        'bg-success/10 text-success'
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-poppins">{type.title}</CardTitle>
                      <CardDescription className="text-base">{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Time Commitment:</span>
                          <span className="text-sm text-muted-foreground">{type.commitment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Cost:</span>
                          <span className={`text-sm font-semibold ${
                            type.color === 'primary' ? 'text-primary' :
                            type.color === 'accent' ? 'text-accent' :
                            'text-success'
                          }`}>{type.cost}</span>
                        </div>
                      </div>
                      <Button 
                        variant={type.color === 'primary' ? 'default' : type.color === 'accent' ? 'accent' : 'success'} 
                        className="w-full"
                      >
                        Apply as {type.title}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to join our community
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Impact of Our Community
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our members and volunteers have achieved together
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Community Members</p>
              </div>
              <div>
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-accent mb-2">800+</div>
                <p className="text-muted-foreground">Active Volunteers</p>
              </div>
              <div>
                <Lightbulb className="w-12 h-12 text-success mx-auto mb-4" />
                <div className="text-4xl font-bold text-success mb-2">200+</div>
                <p className="text-muted-foreground">Mentors</p>
              </div>
              <div>
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                What Our Community Says
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="card-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-poppins">Sarah Okafor</CardTitle>
                      <CardDescription>Community Member</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Joining UMYIDI has been life-changing. The community support and opportunities 
                    I've received have helped me grow both personally and professionally."
                  </p>
                </CardContent>
              </Card>
              <Card className="card-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-poppins">Michael Adebayo</CardTitle>
                      <CardDescription>Volunteer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Volunteering with UMYIDI allows me to give back while developing new skills. 
                    It's incredibly fulfilling to see the direct impact of our work."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join our community of changemakers and start creating positive impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Become a Member
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Apply as Volunteer
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Join;