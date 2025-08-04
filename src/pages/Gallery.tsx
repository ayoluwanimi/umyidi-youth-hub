import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Moments & Memories
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Gallery
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Capturing moments of transformation, celebration, and community impact
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors">
                    <Play className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">Event Title {item}</h3>
                      <p className="text-sm text-white/80">Description of the event</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;