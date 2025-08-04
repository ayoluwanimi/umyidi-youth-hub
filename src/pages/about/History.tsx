import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Target } from "lucide-react";

const History = () => {
  const timeline = [
    {
      year: "2019",
      title: "The Vision Begins",
      description: "UMYIDI was conceived by Uche Maduagwu with a vision to create opportunities for marginalized youth and persons with disabilities.",
      achievements: ["Foundation planning", "Initial research", "Vision document created"]
    },
    {
      year: "2020",
      title: "Official Launch",
      description: "Despite global challenges, UMYIDI officially launched with digital-first programs to reach youth across Nigeria.",
      achievements: ["Legal registration", "First virtual programs", "100+ youth reached"]
    },
    {
      year: "2021",
      title: "Program Expansion",
      description: "Introduced structured programs including skills training and mentorship initiatives.",
      achievements: ["500+ beneficiaries", "10 partner organizations", "First impact report"]
    },
    {
      year: "2022",
      title: "Ideate Nigeria Launch",
      description: "Launched the flagship Ideate Nigeria Youth Enterprise Challenge, focusing on entrepreneurship development.",
      achievements: ["150 entrepreneurs trained", "25 businesses launched", "₦10M funding facilitated"]
    },
    {
      year: "2023",
      title: "Community Growth",
      description: "Expanded to multiple states and launched the Teens Townhall meetings for youth dialogue and empowerment.",
      achievements: ["2000+ community members", "15 states reached", "Youth Advisory Board formed"]
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched Ezumezu Podcast and enhanced digital platforms for greater reach and impact.",
      achievements: ["5000+ podcast listeners", "Digital skills training", "Partnership expansion"]
    }
  ];

  const milestones = [
    { icon: Users, label: "Youth Reached", value: "10,000+" },
    { icon: Award, label: "Programs Launched", value: "15+" },
    { icon: Target, label: "States Covered", value: "20+" },
    { icon: Calendar, label: "Years of Impact", value: "5+" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-success text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Our Journey
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              A Legacy of Empowerment
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              From a vision to transform lives to a movement that has impacted thousands, 
              discover the story of UMYIDI's remarkable journey.
            </p>
          </div>
        </section>

        {/* Founding Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  The Story Behind UMYIDI
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The Uche Maduagwu Youth Initiative for Development and Inclusion (UMYIDI) was born 
                  from a deep understanding of the challenges faced by marginalized youth and persons 
                  with disabilities in Nigeria. Our founder, recognizing the immense potential within 
                  these communities, envisioned an organization that would not just provide assistance, 
                  but create pathways to empowerment and self-sufficiency.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  What started as a small initiative has grown into a comprehensive platform that 
                  addresses education, skill development, entrepreneurship, and community engagement. 
                  Every program we've launched, every partnership we've formed, and every life we've 
                  touched has been guided by our unwavering commitment to inclusivity and empowerment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, UMYIDI stands as a testament to the power of vision, persistence, and 
                  community support in creating meaningful change across Nigeria.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <Card key={index} className="text-center card-shadow">
                      <CardHeader className="pb-2">
                        <IconComponent className="w-8 h-8 mx-auto text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-primary mb-1">{milestone.value}</div>
                        <p className="text-sm text-muted-foreground">{milestone.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Journey Through the Years
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones that shaped our organization
              </p>
            </div>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="relative">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Year */}
                    <div className="lg:col-span-2">
                      <div className="text-4xl font-bold text-primary font-poppins">
                        {event.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-10">
                      <Card className="card-shadow">
                        <CardHeader>
                          <CardTitle className="text-2xl font-poppins">{event.title}</CardTitle>
                          <CardDescription className="text-lg">{event.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                          <div className="grid md:grid-cols-3 gap-2">
                            {event.achievements.map((achievement, idx) => (
                              <Badge key={idx} variant="outline" className="justify-start">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute left-[8.33%] top-full w-0.5 h-8 bg-primary/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision for Future */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Looking Ahead
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                As we continue to grow and evolve, our commitment to empowering youth and creating 
                inclusive opportunities remains stronger than ever. The future holds even greater 
                possibilities for impact and transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-primary">2025 Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Reach 25,000 youth</li>
                    <li>• Launch in 5 new states</li>
                    <li>• Introduce new programs</li>
                    <li>• Expand digital presence</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="text-center card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-accent">5-Year Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 100,000 lives impacted</li>
                    <li>• Regional expansion</li>
                    <li>• Technology innovation</li>
                    <li>• Policy influence</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="text-center card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-success">Long-term Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sustainable communities</li>
                    <li>• Economic empowerment</li>
                    <li>• Social inclusion</li>
                    <li>• Leadership development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default History;