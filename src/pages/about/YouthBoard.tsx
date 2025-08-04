import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, Heart, Target, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const YouthBoard = () => {
  const youthMembers = [
    {
      name: "Chioma Adaeze",
      age: 24,
      position: "Youth Board Chair",
      location: "Lagos, Nigeria",
      background: "Tech Entrepreneur & UMYIDI Alumni",
      focus: ["Youth Advocacy", "Tech Innovation", "Entrepreneurship"],
      bio: "Former beneficiary turned leader, Chioma represents the voice of tech-savvy youth and advocates for digital inclusion.",
      achievements: ["Founded successful tech startup", "Mentored 100+ youth", "Speaker at tech conferences"]
    },
    {
      name: "Ibrahim Musa",
      age: 22,
      position: "Programs Representative",
      location: "Kano, Nigeria",
      background: "Community Organizer & Student Leader",
      focus: ["Community Development", "Education Access", "Rural Youth"],
      bio: "Passionate about bridging the gap between urban and rural youth opportunities, advocating for inclusive program design.",
      achievements: ["Organized 15+ community events", "Student union president", "Rural youth advocate"]
    },
    {
      name: "Grace Okoro",
      age: 25,
      position: "Inclusion & Accessibility Officer",
      location: "Abuja, Nigeria",
      background: "Disability Rights Advocate",
      focus: ["Disability Rights", "Inclusive Design", "Policy Advocacy"],
      bio: "Living with a visual impairment, Grace ensures all UMYIDI programs are accessible and inclusive for persons with disabilities.",
      achievements: ["Disability rights advocate", "Accessibility consultant", "Policy influencer"]
    },
    {
      name: "Kemi Olumide",
      age: 23,
      position: "Communications Lead",
      location: "Ibadan, Nigeria",
      background: "Digital Media Specialist",
      focus: ["Digital Communication", "Social Media", "Content Creation"],
      bio: "Creative storyteller who amplifies youth voices through digital platforms and ensures authentic youth representation.",
      achievements: ["10K+ social media following", "Content creator", "Digital marketing expert"]
    },
    {
      name: "Daniel Ezeh",
      age: 26,
      position: "Partnerships Coordinator",
      location: "Port Harcourt, Nigeria",
      background: "Business Development Professional",
      focus: ["Youth Partnerships", "Business Development", "Networking"],
      bio: "Connects UMYIDI with youth-led organizations and ensures collaborative approaches to youth development.",
      achievements: ["50+ partnership deals", "Youth network builder", "Business strategist"]
    },
    {
      name: "Amina Hassan",
      age: 21,
      position: "Policy & Advocacy Representative",
      location: "Kaduna, Nigeria",
      background: "Law Student & Youth Activist",
      focus: ["Youth Policy", "Legal Advocacy", "Rights Protection"],
      bio: "Young legal mind advocating for youth-friendly policies and ensuring youth perspectives in decision-making processes.",
      achievements: ["Policy research expert", "Youth activist", "Legal advocacy leader"]
    }
  ];

  const responsibilities = [
    {
      icon: Users,
      title: "Youth Voice Representation",
      description: "Ensuring authentic youth perspectives guide all organizational decisions and program development."
    },
    {
      icon: Target,
      title: "Program Feedback",
      description: "Providing direct feedback on program effectiveness and suggesting improvements from a youth perspective."
    },
    {
      icon: Heart,
      title: "Community Engagement",
      description: "Building bridges between UMYIDI and youth communities across Nigeria through grassroots engagement."
    },
    {
      icon: Star,
      title: "Innovation & Ideas",
      description: "Bringing fresh perspectives and innovative solutions to address evolving youth challenges and opportunities."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-accent via-primary to-success text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Youth Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Youth Advisory Board
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Empowering young leaders to shape the future of youth development programs 
              through authentic representation and innovative thinking.
            </p>
          </div>
        </section>

        {/* Youth Board Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                By Youth, For Youth
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our Youth Advisory Board ensures that young people are not just beneficiaries 
                but active participants in shaping programs and policies that affect their lives. 
                These dynamic leaders bring diverse perspectives and lived experiences to guide our work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {responsibilities.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="text-center card-shadow hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="font-poppins">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Youth Board Members */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Meet Our Youth Leaders
              </h2>
              <p className="text-xl text-muted-foreground">
                Passionate young professionals driving change across Nigeria
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {youthMembers.map((member, index) => (
                <Card key={index} className="card-shadow hover:shadow-primary transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-xl font-poppins group-hover:text-primary transition-colors">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-primary font-semibold">
                          {member.position}
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Age {member.age}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{member.location}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Instagram className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Twitter className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Linkedin className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{member.background}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.focus.map((area, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Key Achievements:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Youth Board Impact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  Making Real Impact
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our Youth Advisory Board has been instrumental in shaping UMYIDI's programs 
                  to be more responsive, relevant, and effective. Their insights have led to 
                  significant improvements in program design and delivery.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Program Innovation</h4>
                    <p className="text-sm text-muted-foreground">Introduced 5 new youth-designed programs</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Policy Influence</h4>
                    <p className="text-sm text-muted-foreground">Contributed to 3 youth-friendly policy documents</p>
                  </div>
                  <div className="border-l-4 border-success pl-4">
                    <h4 className="font-semibold">Community Engagement</h4>
                    <p className="text-sm text-muted-foreground">Increased youth participation by 150%</p>
                  </div>
                </div>
              </div>
              <Card className="card-shadow bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-center">Board Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">24</div>
                    <p className="text-white/90">Monthly Meetings</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <p className="text-white/90">Youth Consulted</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">15</div>
                    <p className="text-white/90">Policy Recommendations</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">8</div>
                    <p className="text-white/90">New Initiatives</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Youth Board CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Want to Join Our Youth Board?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Are you a passionate young leader ready to shape the future of youth development? 
              Applications for new Youth Advisory Board members open annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Apply for Youth Board
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/community/join">
                  Join Youth Community
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YouthBoard;