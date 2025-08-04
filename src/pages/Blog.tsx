import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, Share2 } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Empowering Youth Through Digital Skills",
      excerpt: "How our digital training programs are transforming lives across Nigeria...",
      author: "UMYIDI Team",
      date: "Dec 15, 2024",
      category: "Digital Skills",
      readTime: "5 min read"
    },
    {
      title: "Success Story: From Idea to Business",
      excerpt: "Follow Chioma's journey from the Ideate Nigeria Challenge to successful entrepreneur...",
      author: "Success Stories",
      date: "Dec 10, 2024",
      category: "Success Stories",
      readTime: "8 min read"
    },
    {
      title: "Breaking Barriers in Tech",
      excerpt: "How we're making technology accessible for persons with disabilities...",
      author: "Inclusion Team",
      date: "Dec 5, 2024",
      category: "Inclusion",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              UMYIDI Blog
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90 mb-8">
              Stories, insights, and updates from our youth empowerment journey
            </p>
            <div className="max-w-md mx-auto relative">
              <Input placeholder="Search articles..." className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
              <Search className="absolute right-3 top-3 w-4 h-4 text-white/60" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="card-shadow hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="font-poppins hover:text-primary cursor-pointer transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;