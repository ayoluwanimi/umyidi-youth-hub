import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Heart, Calendar, UserPlus, BookOpen, Handshake } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Community</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a vibrant community of change-makers, innovators, and youth leaders working together to create positive impact.
            </p>
          </div>

          {/* Community Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Our Community</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  UMYIDI's community is a diverse network of young people from marginalized backgrounds, 
                  persons with disabilities, mentors, volunteers, and supporters who share a common vision 
                  of empowerment and positive change.
                </p>
                <p>
                  Through our programs, events, and initiatives, we create opportunities for learning, 
                  growth, networking, and collaboration that help our community members achieve their 
                  full potential.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="text-2xl font-bold text-primary">2,000+</h4>
                  <p className="text-sm text-muted-foreground">Community Members</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="text-2xl font-bold text-primary">500+</h4>
                  <p className="text-sm text-muted-foreground">Program Graduates</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="text-2xl font-bold text-primary">100+</h4>
                  <p className="text-sm text-muted-foreground">Active Volunteers</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h4 className="text-2xl font-bold text-primary">50+</h4>
                  <p className="text-sm text-muted-foreground">Partner Organizations</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <CardTitle>Upcoming Events</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Teens Townhall Meeting</h4>
                    <p className="text-sm text-muted-foreground">March 15, 2024 • 2:00 PM</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Youth Ideas Challenge Deadline</h4>
                    <p className="text-sm text-muted-foreground">March 30, 2024 • 11:59 PM</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Ideate Nigeria Cohort 4 Launch</h4>
                    <p className="text-sm text-muted-foreground">April 5, 2024 • 10:00 AM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Ways to Get Involved */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Ways to Get Involved</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Become a Member</CardTitle>
                  <CardDescription>
                    Join our community as a full member and access all programs, events, and resources.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Access to all programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Monthly newsletters</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Networking events</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Mentorship opportunities</span>
                    </li>
                  </ul>
                  <Button className="w-full">Join as Member</Button>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>
                    Share your skills and time to help us create greater impact in our community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Flexible commitment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Skill-based roles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Training provided</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Recognition programs</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Become a Volunteer</Button>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Register for Programs</CardTitle>
                  <CardDescription>
                    Sign up for our specific programs and challenges that match your interests and goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Ideate Nigeria Challenge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Youth Ideas Challenge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Teens Townhall</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      <span>Mentorship programs</span>
                    </li>
                  </ul>
                  <Button variant="secondary" className="w-full">View Programs</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Registration Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Program Registration */}
            <Card className="border-border">
              <CardHeader>
                <UserPlus className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Register for a Program</CardTitle>
                <CardDescription>
                  Sign up for our programs and start your journey with UMYIDI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="program">Select Program</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ideate">Ideate Nigeria Challenge</SelectItem>
                        <SelectItem value="youth-ideas">Youth Ideas Challenge</SelectItem>
                        <SelectItem value="townhall">Teens Townhall</SelectItem>
                        <SelectItem value="podcast">Ezumezu Podcast</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join?</Label>
                    <Textarea id="motivation" placeholder="Tell us about your motivation..." />
                  </div>
                  
                  <Button className="w-full">Submit Registration</Button>
                </form>
              </CardContent>
            </Card>

            {/* Membership/Volunteer */}
            <Card className="border-border">
              <CardHeader>
                <Handshake className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Become a Member/Volunteer</CardTitle>
                <CardDescription>
                  Join our community as a member or volunteer and help us create positive change.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="memberFirstName">First Name</Label>
                      <Input id="memberFirstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="memberLastName">Last Name</Label>
                      <Input id="memberLastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="memberEmail">Email</Label>
                    <Input id="memberEmail" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="memberType">How would you like to join?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="member">Community Member</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="both">Both Member & Volunteer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills/Expertise (for volunteers)</Label>
                    <Input id="skills" placeholder="e.g., Marketing, Teaching, Design..." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability (for volunteers)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="few-hours">Few hours per week</SelectItem>
                        <SelectItem value="few-days">Few days per month</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                        <SelectItem value="events">Events only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="memberMessage">Additional Message</Label>
                    <Textarea id="memberMessage" placeholder="Tell us more about yourself..." />
                  </div>
                  
                  <Button className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;