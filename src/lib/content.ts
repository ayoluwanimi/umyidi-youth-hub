// src/lib/content.ts
import homeContent from '@/content/pages/home.json';
import siteSettings from '@/content/settings/site.json';
import educationProgram from '@/content/programs/education.json';
import skillsProgram from '@/content/programs/skills-training.json';
import mentorshipProgram from '@/content/programs/mentorship.json';

// Type definitions remain the same...

// Export with better error handling
export const getHomePage = (): HomePage => {
  try {
    // Create a default structure
    const defaultHome: HomePage = {
      hero: {
        title: "Welcome to UMYIDI Youth Hub",
        subtitle: "Empowering Youth for a Brighter Future",
        ctaText: "Get Started",
        ctaLink: "#"
      },
      features: [
        {
          title: "Education Support",
          description: "Access to quality educational resources and tutoring",
          icon: "graduation-cap"
        },
        {
          title: "Skills Development",
          description: "Learn practical skills for the modern workplace",
          icon: "tools"
        },
        {
          title: "Mentorship",
          description: "Connect with experienced professionals in your field",
          icon: "users"
        }
      ],
      stats: {
        youthsHelped: "500+",
        programsOffered: "12",
        mentorsAvailable: "50+",
        successRate: "85%"
      }
    };

    // Merge with actual content, using defaults for missing fields
    return {
      ...defaultHome,
      ...homeContent,
      hero: {
        ...defaultHome.hero,
        ...(homeContent as any).hero
      },
      stats: {
        ...defaultHome.stats,
        ...(homeContent as any).stats
      }
    } as HomePage;
  } catch (error) {
    console.error("Error loading home content:", error);
    // Return a default structure if there's an error
    return {
      hero: {
        title: "Welcome to UMYIDI Youth Hub",
        subtitle: "Empowering Youth for a Brighter Future",
        ctaText: "Get Started",
        ctaLink: "#"
      },
      features: [],
      stats: {
        youthsHelped: "0",
        programsOffered: "0",
        mentorsAvailable: "0",
        successRate: "0%"
      }
    };
  }
};

// Other helper functions remain the same...