import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users, Target, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IdeateNigeria = () => {
  const achievements = [
    "500+ Young entrepreneurs participated",
    "50+ Innovative business ideas developed",
    "25+ Businesses successfully launched",
    "₦50M+ in funding facilitated",
    "200+ Jobs created for youth"
  ];

  const timeline = [
    { year: "2022", title: "First Edition", participants: "150+" },
    { year: "2023", title: "Second Edition", participants: "200+" },
    { year: "2024", title: "Third Edition", participants: "300+" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              3rd Year Running
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Ideate Nigeria Youth Enterprise Challenge
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
              Empowering young entrepreneurs to transform innovative ideas into sustainable businesses 
              that drive economic growth and social impact across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Apply for 2025
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                View Past Winners
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  Transforming Ideas into Impact
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The Ideate Nigeria Youth Enterprise Challenge is our flagship program designed to identify, 
                  nurture, and support the next generation of Nigerian entrepreneurs. Through intensive mentorship, 
                  business development support, and access to funding, we're building an ecosystem where youth 
                  innovation thrives.
                </p>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Program Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Technology & Innovation</li>
                      <li>• Agriculture & Food Security</li>
                      <li>• Healthcare Solutions</li>
                      <li>• Education Technology</li>
                      <li>• Renewable Energy</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      What We Provide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 6-month intensive mentorship</li>
                      <li>• Seed funding up to ₦5M</li>
                      <li>• Business development support</li>
                      <li>• Access to investor network</li>
                      <li>• Technical skills training</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Three years of empowering youth entrepreneurship
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="text-center card-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-poppins">{item.year}</CardTitle>
                    <CardDescription className="text-lg">{item.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">{item.participants}</div>
                    <p className="text-muted-foreground">Participants</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Ready to Launch Your Idea?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join the next cohort of innovative entrepreneurs and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Apply Now
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

export default IdeateNigeria;