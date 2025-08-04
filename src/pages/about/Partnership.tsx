import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Handshake, Globe, Heart, Target, Users, Building, BookOpen, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Partnership = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Corporate Partnerships",
      description: "Strategic alliances with businesses for CSR programs, employee volunteering, and skills development initiatives.",
      benefits: [
        "Employee volunteer programs",
        "Skills-based volunteering",
        "Funding for specific programs",
        "Brand visibility and CSR impact"
      ],
      examples: ["Tech companies for digital skills", "Banks for financial literacy", "Manufacturing for vocational training"]
    },
    {
      icon: BookOpen,
      title: "Educational Institutions",
      description: "Collaborations with universities, colleges, and schools to expand educational opportunities and research.",
      benefits: [
        "Student exchange programs",
        "Research collaborations",
        "Scholarship opportunities",
        "Faculty expertise sharing"
      ],
      examples: ["Universities for research", "Vocational schools for training", "International institutions for exchange"]
    },
    {
      icon: Users,
      title: "NGO & Civil Society",
      description: "Partnerships with like-minded organizations to amplify impact and avoid duplication of efforts.",
      benefits: [
        "Resource sharing",
        "Joint program delivery",
        "Advocacy collaboration",
        "Knowledge exchange"
      ],
      examples: ["Disability organizations", "Youth development NGOs", "Community-based organizations"]
    },
    {
      icon: Globe,
      title: "Government & Policy",
      description: "Working with government agencies to influence policy and scale successful interventions.",
      benefits: [
        "Policy advocacy platform",
        "Government program integration",
        "Scaling successful models",
        "Institutional support"
      ],
      examples: ["Ministry of Youth", "Local government areas", "Policy research institutes"]
    }
  ];

  const partnershipLevels = [
    {
      level: "Implementation Partner",
      commitment: "Program Delivery",
      description: "Direct involvement in designing and delivering programs to beneficiaries.",
      investment: "Time & Expertise",
      duration: "1-3 years"
    },
    {
      level: "Strategic Partner",
      commitment: "Organizational Support",
      description: "Long-term strategic support including funding, capacity building, and governance.",
      investment: "Financial & Technical",
      duration: "3-5 years"
    },
    {
      level: "Advocacy Partner",
      commitment: "Policy Influence",
      description: "Joint advocacy efforts to influence policy and create enabling environments.",
      investment: "Platform & Voice",
      duration: "Ongoing"
    },
    {
      level: "Resource Partner",
      commitment: "Capacity Support",
      description: "Providing specific resources, expertise, or platforms to enhance our work.",
      investment: "Resources & Skills",
      duration: "Project-based"
    }
  ];

  const currentPartners = [
    { name: "TechHub Nigeria", sector: "Technology", focus: "Digital Skills Training" },
    { name: "First Bank Foundation", sector: "Financial Services", focus: "Financial Literacy" },
    { name: "University of Lagos", sector: "Education", focus: "Research & Development" },
    { name: "Nigerian Youth Council", sector: "Youth Development", focus: "Policy Advocacy" },
    { name: "Access to Justice Foundation", sector: "Legal", focus: "Rights Protection" },
    { name: "Disability Rights Network", sector: "Advocacy", focus: "Inclusive Programming" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-success via-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Collaborative Impact
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Join us in creating sustainable impact through strategic partnerships that 
              amplify our collective ability to empower youth across Nigeria.
            </p>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Why Partner With UMYIDI?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Together, we can achieve more than any single organization can accomplish alone
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="font-poppins">Proven Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">5+ years of measurable results with 10,000+ lives transformed</p>
                </CardContent>
              </Card>
              
              <Card className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="font-poppins">Deep Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Extensive network reaching marginalized communities across Nigeria</p>
                </CardContent>
              </Card>
              
              <Card className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Heart className="w-12 h-12 text-success mx-auto mb-4" />
                  <CardTitle className="font-poppins">Authentic Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Youth-led initiatives ensuring authentic representation and sustainable solutions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="font-poppins">Innovation Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Cutting-edge approaches combining technology with grassroots engagement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Partnership Models
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple ways to collaborate based on your organization's strengths and interests
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="card-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-poppins">{type.title}</CardTitle>
                          <CardDescription>{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Partnership Benefits:</h4>
                        <ul className="space-y-1">
                          {type.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Examples:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Partnership Levels
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the level of engagement that works best for your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipLevels.map((level, index) => (
                <Card key={index} className="card-shadow text-center">
                  <CardHeader>
                    <Badge variant="outline" className="mx-auto mb-2">
                      {level.level}
                    </Badge>
                    <CardTitle className="font-poppins text-lg">{level.commitment}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold">Investment: </span>
                      <span className="text-sm text-muted-foreground">{level.investment}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Duration: </span>
                      <span className="text-sm text-muted-foreground">{level.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Current Partners
              </h2>
              <p className="text-xl text-muted-foreground">
                Organizations we're proud to work alongside
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPartners.map((partner, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <CardTitle className="font-poppins text-lg">{partner.name}</CardTitle>
                    <CardDescription>{partner.sector}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-xs">
                      {partner.focus}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                How to Partner With Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to start our collaboration
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Initial Contact", desc: "Reach out to discuss your organization's interests and our mutual goals" },
                { step: "02", title: "Alignment Meeting", desc: "Meet to explore how our missions and values align for maximum impact" },
                { step: "03", title: "Partnership Design", desc: "Collaboratively design a partnership model that works for both organizations" },
                { step: "04", title: "Implementation", desc: "Launch our partnership with clear goals, timelines, and success metrics" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Ready to Create Impact Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Let's explore how your organization can join our mission to empower youth 
              and create lasting positive change across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Partnership Discussion
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Download Partnership Deck
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Partnership;