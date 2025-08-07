// src/lib/content.ts - REPLACE WITH THIS

// Try to import content files - with error handling
let homeContent = {
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

// Try to load actual content, fallback to defaults if it fails
try {
  homeContent = require('@/content/pages/home.json');
} catch (e) {
  console.error("Could not load home.json, using defaults", e);
}

// Type definitions for better TypeScript support
export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface HomePage {
  hero: HeroContent;
  features: Feature[];
  stats: {
    youthsHelped: string;
    programsOffered: string;
    mentorsAvailable: string;
    successRate: string;
  };
}

// Simple, reliable content API
export const getHomePage = (): HomePage => {
  return homeContent as HomePage;
};