import homeContent from '@/content/pages/home.json';

export function getHomePage() {
  return homeContent || {
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
    ]
  };
}