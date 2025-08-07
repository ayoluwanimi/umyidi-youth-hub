// src/lib/content.ts

// Import all content files
import homeContent from '@/content/pages/home.json';
import siteSettings from '@/content/settings/site.json';

// Import all programs
import educationProgram from '@/content/programs/education.json';
import skillsProgram from '@/content/programs/skills-training.json';
import mentorshipProgram from '@/content/programs/mentorship.json';

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

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  eligibility: string;
  duration: string;
  image: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
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

// Export organized content with proper typing
export const content = {
  pages: {
    home: homeContent as HomePage,
  },
  programs: [educationProgram, skillsProgram, mentorshipProgram] as Program[],
  settings: siteSettings as SiteSettings,
};

// Helper functions to find specific content
export const getProgramById = (id: string): Program | undefined => {
  return content.programs.find(program => program.id === id);
};

export const getAllPrograms = (): Program[] => {
  return content.programs;
};

export const getSiteSettings = (): SiteSettings => {
  return content.settings;
};

export const getHomePage = (): HomePage => {
  return content.pages.home;
};