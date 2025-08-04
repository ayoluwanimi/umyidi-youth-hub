import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Project Pages
import IdeateNigeria from "./pages/projects/IdeateNigeria";
import YouthIdeas from "./pages/projects/YouthIdeas";
import EzumezuPodcast from "./pages/projects/EzumezuPodcast";

// Community Pages
import CommunityAbout from "./pages/community/About";
import Register from "./pages/community/Register";
import Join from "./pages/community/Join";

// About Pages
import History from "./pages/about/History";
import Mission from "./pages/about/Mission";
import Board from "./pages/about/Board";
import YouthBoard from "./pages/about/YouthBoard";
import Partnership from "./pages/about/Partnership";

// Other Pages
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Project Routes */}
          <Route path="/projects/ideate-nigeria" element={<IdeateNigeria />} />
          <Route path="/projects/youth-ideas" element={<YouthIdeas />} />
          <Route path="/projects/ezumezu-podcast" element={<EzumezuPodcast />} />
          
          {/* Community Routes */}
          <Route path="/community/about" element={<CommunityAbout />} />
          <Route path="/community/register" element={<Register />} />
          <Route path="/community/join" element={<Join />} />
          
          {/* About Routes */}
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/board" element={<Board />} />
          <Route path="/about/youth-board" element={<YouthBoard />} />
          <Route path="/about/partnership" element={<Partnership />} />
          
          {/* Other Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
