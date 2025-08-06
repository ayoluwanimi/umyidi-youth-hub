import homeData from '../content/pages/home.json';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HeroImage from "@/assets/hero-section.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Youth empowerment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
               {homeData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-inter leading-relaxed">
                {homeData.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link to="/community/register">
                  {homeData.buttonText}
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about/mission" className="flex items-center gap-2">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div className="relative">
            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-black/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/30 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glass-effect">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <p className="text-center text-white/80 mt-4 font-medium">
              Watch Our Empowerment Drive
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-glow/20 rounded-full animate-float animation-delay-300 hidden lg:block"></div>
    </section>
  );
};

export default Hero;