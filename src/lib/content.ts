// src/lib/content.ts - simplified version

// Import content files
import homeContent from '@/content/pages/home.json';

// Basic types
export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface HomePage {
  hero: HeroContent;
  // other content types
}

// Simple content API that won't crash
export const getHomePage = (): HomePage => {
  try {
    return {
      hero: homeContent.hero || {
        title: "Welcome to UMYIDI Youth Hub",
        subtitle: "Empowering Youth for a Brighter Future",
        ctaText: "Get Started",
        ctaLink: "#"
      },
      // other content
    };
  } catch (error) {
    console.error("Error loading content:", error);
    // Fallback content if JSON fails to load
    return {
      hero: {
        title: "Welcome to UMYIDI Youth Hub",
        subtitle: "Empowering Youth for a Brighter Future",
        ctaText: "Get Started",
        ctaLink: "#"
      },
      // other fallback content
    };
  }
};