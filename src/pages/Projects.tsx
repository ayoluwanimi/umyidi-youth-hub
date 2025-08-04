import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Mic, Trophy } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our innovative programs designed to empower youth and create lasting impact in communities across Nigeria and beyond.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            
            {/* Ideate Nigeria Youth Enterprise Challenge */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Flagship Program</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Ideate Nigeria Youth Enterprise Challenge
                </CardTitle>
                <CardDescription className="text-lg">
                  Now in its 3rd year, this flagship program empowers young entrepreneurs to develop innovative business solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground">Duration</h4>
                    <p className="text-muted-foreground">6 Months</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground">Participants</h4>
                    <p className="text-muted-foreground">500+ Youth</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground">Impact</h4>
                    <p className="text-muted-foreground">100+ Startups</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Program Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Comprehensive business training and mentorship</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Access to funding opportunities and investor networks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Pitch competitions with cash prizes and awards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Post-program support and community building</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full md:w-auto">Apply for Next Cohort</Button>
              </CardContent>
            </Card>

            {/* Youth Ideas Challenge */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Innovation Program</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Youth Ideas Challenge
                </CardTitle>
                <CardDescription className="text-lg">
                  A platform for young innovators to showcase creative solutions to community challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Challenge Categories:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Education & Technology</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Healthcare Innovation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Environmental Solutions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Social Impact Projects</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Rewards & Benefits:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Cash prizes up to ₦500,000</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Mentorship opportunities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Implementation support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Recognition and awards</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" className="w-full md:w-auto">Submit Your Idea</Button>
              </CardContent>
            </Card>

            {/* Ezumezu Podcast */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Mic className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Media Program</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Ezumezu: The Podcast
                </CardTitle>
                <CardDescription className="text-lg">
                  A platform where young people share their stories, challenges, and triumphs to inspire others.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Podcast Features:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Youth storytelling platform</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Weekly episodes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Expert interviews</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Community discussions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Personal growth stories</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Career development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Entrepreneurship journeys</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Social impact initiatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button>Listen Now</Button>
                  <Button variant="outline">Be a Guest</Button>
                </div>
              </CardContent>
            </Card>

            {/* Teens Townhall */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Community Program</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Bi-monthly Teens Townhall
                </CardTitle>
                <CardDescription className="text-lg">
                  Regular community meetings that have reached the 2,000th milestone, fostering youth engagement and leadership.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Meeting Format:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Interactive discussions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Guest speaker sessions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Skill-building workshops</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Networking opportunities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Leadership development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Community building</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Peer support network</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span>Voice in community issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" className="w-full md:w-auto">Join Next Meeting</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;