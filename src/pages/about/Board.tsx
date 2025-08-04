import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter } from "lucide-react";

const Board = () => {
  const boardMembers = [
    {
      name: "Uche Maduagwu",
      position: "Founder & Executive Director",
      bio: "Visionary leader with over 15 years of experience in youth development and social entrepreneurship. Passionate about creating inclusive opportunities for marginalized communities.",
      expertise: ["Youth Development", "Social Entrepreneurship", "Policy Advocacy"],
      education: "MBA in Social Enterprise, MSc in Development Studies",
      achievements: ["Founded 3 successful NGOs", "Impacted 50,000+ lives", "Policy advisor to government"]
    },
    {
      name: "Dr. Adaora Okonkwo",
      position: "Board Chairperson",
      bio: "Renowned educator and development specialist with expertise in inclusive education and disability rights advocacy.",
      expertise: ["Inclusive Education", "Disability Rights", "Research & Development"],
      education: "PhD in Special Education, Masters in Public Policy",
      achievements: ["20+ years in education", "Published researcher", "UN consultant"]
    },
    {
      name: "Emeka Nnamani",
      position: "Board Treasurer",
      bio: "Experienced financial executive and social impact investor with a track record of sustainable organizational growth.",
      expertise: ["Financial Management", "Impact Investment", "Organizational Development"],
      education: "CPA, MBA in Finance",
      achievements: ["CFO of multiple NGOs", "Impact investor", "Financial sustainability expert"]
    },
    {
      name: "Fatima Abdullahi",
      position: "Board Secretary",
      bio: "Legal expert specializing in human rights law and advocacy for marginalized communities across Nigeria.",
      expertise: ["Human Rights Law", "Legal Advocacy", "Policy Development"],
      education: "LLM in Human Rights Law, Called to the Nigerian Bar",
      achievements: ["Human rights advocate", "Policy development expert", "Legal counsel to NGOs"]
    },
    {
      name: "Prof. Chidi Okafor",
      position: "Technical Advisor",
      bio: "Academic and researcher with extensive experience in youth development programs and impact measurement.",
      expertise: ["Research & Evaluation", "Program Development", "Academic Partnerships"],
      education: "PhD in Social Work, Professor at University of Nigeria",
      achievements: ["50+ published papers", "Program evaluation expert", "Academic leader"]
    },
    {
      name: "Blessing Okoro",
      position: "Community Outreach Director",
      bio: "Community development specialist with deep understanding of grassroots mobilization and inclusive programming.",
      expertise: ["Community Mobilization", "Grassroots Development", "Stakeholder Engagement"],
      education: "MSc in Community Development, Certified Program Manager",
      achievements: ["Grassroots expert", "Community mobilizer", "Program implementation specialist"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Leadership Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Board of Directors
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Meet the experienced leaders guiding UMYIDI's strategic direction and ensuring 
              our mission creates lasting impact across Nigeria.
            </p>
          </div>
        </section>

        {/* Board Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Experienced Leadership
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our Board of Directors brings together diverse expertise in youth development, 
                education, finance, law, and community development to provide strategic oversight 
                and ensure UMYIDI's continued growth and impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="card-shadow hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-poppins mb-2">{member.name}</CardTitle>
                        <CardDescription className="text-lg text-primary font-semibold">
                          {member.position}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">Education:</h4>
                      <p className="text-sm text-muted-foreground">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">Key Achievements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
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

        {/* Board Commitment */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our Commitment to Excellence
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center card-shadow">
                <CardHeader>
                  <CardTitle className="font-poppins text-primary">Strategic Oversight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing strategic direction and ensuring organizational goals align with our mission of youth empowerment.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center card-shadow">
                <CardHeader>
                  <CardTitle className="font-poppins text-accent">Financial Stewardship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ensuring responsible management of resources and transparent financial practices for maximum impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center card-shadow">
                <CardHeader>
                  <CardTitle className="font-poppins text-success">Impact Measurement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitoring and evaluating our programs to ensure we're creating meaningful, measurable change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Board Governance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  Governance & Accountability
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our Board of Directors meets quarterly to review organizational performance, 
                  approve strategic initiatives, and ensure UMYIDI maintains the highest standards 
                  of governance and accountability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-fit">Quarterly Reviews</Badge>
                    <span className="text-muted-foreground">Regular performance assessments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-fit">Financial Oversight</Badge>
                    <span className="text-muted-foreground">Transparent financial management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-fit">Strategic Planning</Badge>
                    <span className="text-muted-foreground">Long-term vision development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-fit">Impact Evaluation</Badge>
                    <span className="text-muted-foreground">Continuous improvement focus</span>
                  </div>
                </div>
              </div>
              <Card className="card-shadow bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-center">Board Committees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-3">
                    <h4 className="font-semibold text-primary">Finance & Audit Committee</h4>
                    <p className="text-sm text-muted-foreground">Financial oversight and risk management</p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="font-semibold text-accent">Programs & Impact Committee</h4>
                    <p className="text-sm text-muted-foreground">Program evaluation and impact assessment</p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="font-semibold text-success">Governance Committee</h4>
                    <p className="text-sm text-muted-foreground">Board development and policy oversight</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Strategic Planning Committee</h4>
                    <p className="text-sm text-muted-foreground">Long-term strategic direction</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Board;