import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Play, Users, Heart, Share2, Calendar, Headphones, Star } from "lucide-react";
import { Link } from "react-router-dom";

const EzumezuPodcast = () => {
  const episodes = [
    {
      title: "From Street Vendor to Tech CEO",
      guest: "Chioma Adaeze",
      duration: "42 min",
      date: "Dec 15, 2024",
      description: "A powerful story of resilience and determination in the face of adversity.",
      plays: "12.5K"
    },
    {
      title: "Breaking Barriers in STEM",
      guest: "Kemi Olumide",
      duration: "38 min",
      date: "Dec 1, 2024",
      description: "How one young woman is changing the landscape of engineering in Nigeria.",
      plays: "9.8K"
    },
    {
      title: "The Power of Community",
      guest: "Emeka Nwosu",
      duration: "45 min",
      date: "Nov 18, 2024",
      description: "Building sustainable change through grassroots initiatives.",
      plays: "11.2K"
    }
  ];

  const stats = [
    { label: "Episodes", value: "25+", icon: Mic },
    { label: "Monthly Listeners", value: "15K+", icon: Headphones },
    { label: "Countries", value: "12", icon: Users },
    { label: "Average Rating", value: "4.9", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-success via-primary to-accent py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Newly Launched
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Ezumezu: The Podcast
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
              Where youths recount stories of triumph, resilience, and transformation. 
              Real voices, authentic experiences, powerful inspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" className="bg-white text-primary hover:bg-white/90">
                <Play className="w-5 h-5 mr-2" />
                Listen Now
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Subscribe
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
                  Authentic Stories, Real Impact
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Ezumezu, meaning "storytelling" in Igbo, is our platform for amplifying the voices of young 
                  Nigerians who have overcome challenges and created positive change in their communities. 
                  Each episode features candid conversations about struggles, victories, and the journey 
                  toward personal and professional fulfillment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-success" />
                    <span>Inspiring stories of resilience and hope</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Features youth from diverse backgrounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-accent" />
                    <span>Available on all major podcast platforms</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="text-center card-shadow">
                      <CardHeader className="pb-2">
                        <IconComponent className="w-8 h-8 mx-auto text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Episodes */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Latest Episodes
              </h2>
              <p className="text-xl text-muted-foreground">
                Catch up on our most recent inspiring conversations
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {episodes.map((episode, index) => (
                <Card key={index} className="card-shadow hover:shadow-primary transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{episode.duration}</Badge>
                      <span className="text-sm text-muted-foreground">{episode.date}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors font-poppins">
                      {episode.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      with <span className="font-semibold text-primary">{episode.guest}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{episode.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        <Headphones className="w-4 h-4 inline mr-1" />
                        {episode.plays} plays
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        <Play className="w-4 h-4 mr-2" />
                        Listen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Episodes
              </Button>
            </div>
          </div>
        </section>

        {/* Guest Spotlight */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Share Your Story
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Do you have an inspiring story of overcoming challenges, creating impact, or pursuing your dreams? 
                We'd love to feature you on Ezumezu and share your journey with our community.
              </p>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins">Become a Guest</CardTitle>
                  <CardDescription className="text-lg">
                    Join our growing community of storytellers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div>
                      <h4 className="font-semibold mb-2">What We Look For:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Inspiring personal journey</li>
                        <li>• Community impact</li>
                        <li>• Lessons learned</li>
                        <li>• Youth empowerment focus</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What We Provide:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Platform to share your story</li>
                        <li>• Professional recording</li>
                        <li>• Wide audience reach</li>
                        <li>• Community connection</li>
                      </ul>
                    </div>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Apply to be a Guest
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <Mic className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Subscribe to Ezumezu and get inspired by stories of young Nigerians making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Subscribe Now
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Suggest a Guest
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EzumezuPodcast;