import homeContent from '@/content/pages/home.json';

export function getHomePage() {
  // Defensive: fallback if JSON is missing or broken
  return homeContent && homeContent.hero && homeContent.features
    ? homeContent
    : {
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
            icon: "graduation-cap",
            image: "/images/education.jpg"
          },
          {
            title: "Skills Development",
            description: "Learn practical skills for the modern workplace",
            icon: "tools",
            image: "/images/skills.jpg"
          },
          {
            title: "Mentorship",
            description: "Connect with experienced professionals in your field",
            icon: "users",
            image: "/images/mentorship.jpg"
          }
        ]
      };
}