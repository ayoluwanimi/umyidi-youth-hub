import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Users, Handshake, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">About UMYIDI</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our journey, mission, and the dedicated team working to empower youth and create positive change in our communities.
            </p>
          </div>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-border">
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To empower youths from marginalized backgrounds and persons with disabilities by providing 
                    them with innovative programs, resources, and opportunities that enable them to reach their 
                    full potential and become agents of positive change in their communities.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Inclusive empowerment programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Skills development and training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Community building and support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A world where every young person, regardless of their background or abilities, has equal 
                    access to opportunities, resources, and support systems that enable them to thrive and 
                    contribute meaningfully to society.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Equal opportunities for all</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Sustainable community impact</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Youth-led social change</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* History */}
          <section className="mb-16">
            <Card className="border-border">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-2xl">Our History</CardTitle>
                <CardDescription>
                  The journey of UMYIDI from inception to becoming a leading youth empowerment organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">2018</Badge>
                      <h4 className="font-semibold text-foreground">Foundation</h4>
                    </div>
                    <p className="text-muted-foreground">
                      UMYIDI was founded with a vision to create opportunities for marginalized youth and 
                      persons with disabilities. Our first program launched with 20 participants.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">2020</Badge>
                      <h4 className="font-semibold text-foreground">Program Expansion</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Launched the Teens Townhall meetings and began our digital transformation to reach 
                      more youth across Nigeria. Adapted our programs for virtual delivery during the pandemic.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">2022</Badge>
                      <h4 className="font-semibold text-foreground">Ideate Nigeria Launch</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Launched the Ideate Nigeria Youth Enterprise Challenge, our flagship entrepreneurship 
                      program that has since supported over 500 young entrepreneurs.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">2023</Badge>
                      <h4 className="font-semibold text-foreground">Media Platform</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Successfully launched Ezumezu Podcast, creating a platform for youth voices and stories. 
                      Reached the 2,000th milestone in our Teens Townhall meetings.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">2024</Badge>
                      <h4 className="font-semibold text-foreground">Current Impact</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Now in our 6th year, UMYIDI continues to grow and evolve, with over 2,000 community 
                      members and partnerships across Nigeria and beyond.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Leadership Teams */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership & Governance</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-xl">Board of Directors</CardTitle>
                  <CardDescription>
                    Experienced leaders providing strategic guidance and oversight
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Dr. Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">Chairperson</p>
                      </div>
                      <Badge variant="outline">Education</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Mr. David Okafor</h4>
                        <p className="text-sm text-muted-foreground">Vice Chairman</p>
                      </div>
                      <Badge variant="outline">Business</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Mrs. Grace Adebayo</h4>
                        <p className="text-sm text-muted-foreground">Secretary</p>
                      </div>
                      <Badge variant="outline">Legal</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Mr. James Nwankwo</h4>
                        <p className="text-sm text-muted-foreground">Treasurer</p>
                      </div>
                      <Badge variant="outline">Finance</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-xl">Youth Advisory Board</CardTitle>
                  <CardDescription>
                    Young leaders representing the voice of our community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Emmanuel Okafor</h4>
                        <p className="text-sm text-muted-foreground">Youth Chair</p>
                      </div>
                      <Badge variant="secondary">22</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Fatima Ahmed</h4>
                        <p className="text-sm text-muted-foreground">Programs Lead</p>
                      </div>
                      <Badge variant="secondary">20</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">John Okenwa</h4>
                        <p className="text-sm text-muted-foreground">Community Rep</p>
                      </div>
                      <Badge variant="secondary">24</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">Aisha Bello</h4>
                        <p className="text-sm text-muted-foreground">Inclusion Lead</p>
                      </div>
                      <Badge variant="secondary">21</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Partnership */}
          <section className="mb-16">
            <Card className="border-border">
              <CardHeader>
                <Handshake className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-2xl">Partnership Opportunities</CardTitle>
                <CardDescription>
                  Join us in creating positive impact through strategic partnerships and collaborations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Corporate Partners</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Support our programs through funding, mentorship, and resource sharing.
                    </p>
                    <Badge variant="outline">25+ Partners</Badge>
                  </div>
                  
                  <div className="text-center p-6 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">NGO Collaborations</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Work together with like-minded organizations to amplify our impact.
                    </p>
                    <Badge variant="outline">15+ NGOs</Badge>
                  </div>
                  
                  <div className="text-center p-6 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Government Partners</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Collaborate with government agencies on policy and program implementation.
                    </p>
                    <Badge variant="outline">10+ Agencies</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Partnership Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Brand visibility and recognition</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Access to youth talent pipeline</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Corporate social responsibility impact</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Employee engagement opportunities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Networking and collaboration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Measurable social impact reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Impact Stats */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact by Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">2,000+</h3>
                <p className="text-muted-foreground">Youth Empowered</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Entrepreneurs Trained</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-muted-foreground">Startups Launched</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Partner Organizations</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;