import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react";

const Register = () => {
  const programs = [
    {
      title: "Ideate Nigeria Youth Challenge",
      description: "6-month entrepreneurship program with mentorship and funding opportunities",
      duration: "6 months",
      nextIntake: "March 2025",
      location: "Hybrid (Online + Lagos)",
      spots: "50 available",
      status: "accepting"
    },
    {
      title: "Digital Skills Training",
      description: "Intensive training in web development, digital marketing, and data analysis",
      duration: "3 months",
      nextIntake: "February 2025",
      location: "Online",
      spots: "100 available",
      status: "accepting"
    },
    {
      title: "Leadership Development Program",
      description: "Building future leaders through workshops, mentorship, and community projects",
      duration: "4 months",
      nextIntake: "April 2025",
      location: "Multiple cities",
      spots: "30 available",
      status: "soon"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Program Registration
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Start Your Journey Today
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Register for our transformative programs designed to empower youth and 
              unlock their potential for positive change.
            </p>
          </div>
        </section>

        {/* Available Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Available Programs
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the program that aligns with your goals and interests
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {programs.map((program, index) => (
                <Card key={index} className={`card-shadow ${program.status === 'accepting' ? 'border-primary' : 'border-muted'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge 
                        variant={program.status === 'accepting' ? 'default' : 'secondary'}
                        className={program.status === 'accepting' ? 'bg-success' : ''}
                      >
                        {program.status === 'accepting' ? 'Accepting Applications' : 'Opening Soon'}
                      </Badge>
                      {program.status === 'accepting' && (
                        <CheckCircle className="w-6 h-6 text-success" />
                      )}
                    </div>
                    <CardTitle className="font-poppins">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Next intake: {program.nextIntake}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{program.spots}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="card-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-poppins">Program Registration Form</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below to register for your chosen program
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+234 XXX XXX XXXX" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="16-20">16-20 years</SelectItem>
                          <SelectItem value="21-25">21-25 years</SelectItem>
                          <SelectItem value="26-30">26-30 years</SelectItem>
                          <SelectItem value="31-35">31-35 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State of Residence *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">FCT Abuja</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                          <SelectItem value="rivers">Rivers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Preferred Program *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ideate">Ideate Nigeria Youth Challenge</SelectItem>
                        <SelectItem value="digital">Digital Skills Training</SelectItem>
                        <SelectItem value="leadership">Leadership Development Program</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Highest Education Level *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="secondary">Secondary School</SelectItem>
                        <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Tell us about your motivation and what you hope to achieve..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="background">Tell us about your background and any relevant experience</Label>
                    <Textarea 
                      id="background" 
                      placeholder="Share your educational background, work experience, or any relevant activities..."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <button className="text-primary underline">Terms and Conditions</button> and 
                      <button className="text-primary underline"> Privacy Policy</button>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="updates" />
                    <Label htmlFor="updates" className="text-sm">
                      I would like to receive updates about UMYIDI programs and events
                    </Label>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Submit Application
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Applications are reviewed within 5-7 business days. You will receive an email confirmation 
                    with next steps.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;