import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Lightbulb, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Inclusivity",
      description: "We embrace diversity and ensure equal opportunities for all, especially marginalized youth and persons with disabilities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We foster creative thinking and innovative solutions to address complex social challenges."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community support and collaborative efforts to create lasting change."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We are committed to creating measurable, sustainable positive change in communities across Nigeria."
    }
  ];

  const objectives = [
    "Provide quality education and skill development opportunities",
    "Foster entrepreneurship and business development among youth",
    "Create inclusive platforms for community engagement",
    "Build sustainable support networks for marginalized communities",
    "Advocate for policies that promote youth empowerment",
    "Develop leadership capabilities among young Nigerians"
  ];

  const approachPoints = [
    {
      title: "Holistic Development",
      description: "We address multiple aspects of youth development including education, skills, entrepreneurship, and personal growth."
    },
    {
      title: "Community-Centered",
      description: "Our programs are designed with and for communities, ensuring relevance and sustainability."
    },
    {
      title: "Evidence-Based",
      description: "We use data and research to inform our strategies and measure our impact."
    },
    {
      title: "Collaborative",
      description: "We work with partners, stakeholders, and beneficiaries to maximize our collective impact."
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
              Our Purpose
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Discover the driving force behind our work and the future we're building together.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins">Our Mission</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  To empower youths from marginalized backgrounds and persons with disabilities 
                  by providing comprehensive development programs, inclusive opportunities, and 
                  sustainable support systems that enable them to realize their full potential 
                  and contribute meaningfully to society.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to breaking barriers, creating pathways to success, and 
                  fostering an inclusive society where every young person has the opportunity 
                  to thrive regardless of their background or circumstances.
                </p>
              </div>
              <Card className="card-shadow bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-center">Our Objectives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="card-shadow bg-gradient-primary text-white order-2 lg:order-1">
                <CardHeader className="text-center">
                  <Eye className="w-12 h-12 mx-auto mb-4" />
                  <CardTitle className="text-3xl font-poppins">2030 Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xl text-white/90 leading-relaxed">
                    "A Nigeria where every young person, regardless of background or ability, 
                    has equal access to opportunities for growth, development, and success, 
                    creating a more inclusive and prosperous society for all."
                  </p>
                </CardContent>
              </Card>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins">Our Vision</h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  We envision a transformed Nigeria where marginalized youth and persons with 
                  disabilities are not just included but are leading change in their communities. 
                  A society where barriers are removed, potential is unleashed, and everyone 
                  has the opportunity to contribute to national development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By 2030, we see UMYIDI as a catalyst for systemic change, having directly 
                  impacted over 100,000 lives and influenced policies that create lasting 
                  inclusive opportunities across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => {
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

        {/* Our Approach */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in a comprehensive, community-centered approach to youth empowerment 
                that addresses root causes and creates sustainable change.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {approachPoints.map((point, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Join Us in Creating Change
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Be part of our mission to create an inclusive Nigeria where every young person 
              can reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/community/join">
                  Get Involved
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/about/partnership">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mission;