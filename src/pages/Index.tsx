import homeData from '../content/pages/home.json';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import HomePageSections from "@/components/HomePageSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Milestones />
        <HomePageSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
