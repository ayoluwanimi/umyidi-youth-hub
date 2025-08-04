import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Heart, 
  BookOpen, 
  Laptop, 
  Mic,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: GraduationCap,
      title: "Skills Development Training",
      description: "Comprehensive training programs in digital skills, entrepreneurship, and life skills for marginalized youth.",
      features: [
        "Digital literacy and computer skills",
        "Web development and programming",
        "Digital marketing and social media",
        "Financial literacy and management",
        "Communication and presentation skills",
        "Leadership development"
      ],
      duration: "3-6 months",
      beneficiaries: "2,000+ trained",
      callToAction: "Enroll in Training"
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship Support",
      description: "End-to-end support for young entrepreneurs from idea development to business launch and scaling.",
      features: [
        "Business idea development and validation",
        "Business plan writing support",
        "Access to mentorship and coaching",
        "Seed funding and investment connections",
        "Market linkage and networking",
        "Post-launch business support"
      ],
      duration: "6-12 months",
      beneficiaries: "500+ entrepreneurs",
      callToAction: "Start Your Business"
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Structured mentorship connecting youth with experienced professionals and successful entrepreneurs.",
      features: [
        "One-on-one mentorship matching",
        "Group mentorship sessions",
        "Industry-specific guidance",
        "Career development planning",
        "Networking opportunities",
        "Ongoing support and accountability"
      ],
      duration: "6-12 months",
      beneficiaries: "1,500+ mentees",
      callToAction: "Find a Mentor"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Ideation",
      description: "Platforms and programs to nurture creative thinking and innovative problem-solving among youth.",
      features: [
        "Innovation workshops and bootcamps",
        "Design thinking training",
        "Hackathons and competitions",
        "Prototype development support",
        "Intellectual property guidance",
        "Innovation showcase events"
      ],
      duration: "Project-based",
      beneficiaries: "3,000+ participants",
      callToAction: "Join Innovation Hub"
    },
    {
      icon: Heart,
      title: "Inclusive Programming",
      description: "Specialized programs ensuring equal opportunities for persons with disabilities and marginalized communities.",
      features: [
        "Accessibility-focused training",
        "Adaptive technology training",
        "Sign language interpretation",
        "Barrier-free program design",
        "Disability rights advocacy",
        "Inclusive employment support"
      ],
      duration: "Ongoing",
      beneficiaries: "800+ persons with disabilities",
      callToAction: "Access Inclusive Programs"
    },
    {
      icon: BookOpen,
      title: "Educational Support",
      description: "Scholarships, educational resources, and academic support for youth from disadvantaged backgrounds.",
      features: [
        "Scholarship opportunities",
        "Academic mentoring",
        "Study materials and resources",
        "School fee assistance",
        "Career guidance counseling",
        "University placement support"
      ],
      duration: "Academic year",
      beneficiaries: "1,200+ students",
      callToAction: "Apply for Support"
    }
  ];

  const specialPrograms = [
    {
      icon: Laptop,
      title: "Digital Skills Bootcamp",
      description: "Intensive 12-week program in high-demand digital skills",
      highlights: ["Job-ready training", "Industry partnerships", "Certification"]
    },
    {
      icon: Mic,
      title: "Youth Voice Platform",
      description: "Podcast and media training for youth storytelling",
      highlights: ["Media training", "Content creation", "Platform access"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Organizing and facilitating community development projects",
      highlights: ["Project management", "Community organizing", "Impact measurement"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-accent to-success text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Comprehensive Support
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Comprehensive programs and services designed to empower youth from 
              marginalized backgrounds and persons with disabilities.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Empowerment Through Comprehensive Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our holistic approach addresses multiple aspects of youth development, 
                ensuring participants have the tools, skills, and support they need to succeed.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="card-shadow hover:shadow-primary transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-poppins mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="text-sm">
                          <div className="font-semibold">Duration: {service.duration}</div>
                          <div className="text-muted-foreground">{service.beneficiaries}</div>
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                          {service.callToAction}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Special Programs
              </h2>
              <p className="text-xl text-muted-foreground">
                Flagship initiatives with focused impact areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {specialPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="font-poppins">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="mx-1">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-muted-foreground">
                Measurable results from our comprehensive service delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Total Beneficiaries</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <p className="text-muted-foreground">Employment Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">500+</div>
                <p className="text-muted-foreground">Businesses Launched</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20</div>
                <p className="text-muted-foreground">States Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Delivery Approach */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  Our Service Delivery Approach
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe in a holistic, participant-centered approach that addresses 
                  the unique needs and circumstances of each individual while building 
                  sustainable support systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold">Individualized Assessment</h4>
                      <p className="text-sm text-muted-foreground">Tailored programs based on each participant's needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold">Continuous Support</h4>
                      <p className="text-sm text-muted-foreground">Ongoing mentorship and guidance throughout the journey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold">Impact Measurement</h4>
                      <p className="text-sm text-muted-foreground">Regular assessment of progress and program effectiveness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold">Community Integration</h4>
                      <p className="text-sm text-muted-foreground">Building connections and support networks within communities</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="card-shadow bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-center">Service Access Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Initial Assessment & Registration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Program Matching & Enrollment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Active Participation & Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span>Graduation & Transition Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <span>Alumni Network & Ongoing Support</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Take the first step towards unlocking your potential. Our comprehensive 
              services are designed to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/community/register">
                  Register for Programs
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Get More Information
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;