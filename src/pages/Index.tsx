import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Milestones />
      </main>
    </div>
  );
};

export default Index;
