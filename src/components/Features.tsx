// src/components/Features.tsx - REPLACE WITH THIS

import { getHomePage } from "@/lib/content";

export default function Features() {
  // Default features if JSON fails to load
  const defaultFeatures = [
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
  ];
  
  // Try to get features from content, use defaults if it fails
  let features = defaultFeatures;
  try {
    const { features: contentFeatures } = getHomePage();
    if (contentFeatures && contentFeatures.length > 0) {
      features = contentFeatures;
    }
  } catch (e) {
    console.error("Failed to load features content", e);
    // Use default content defined above
  }

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Simple icon display - won't break if missing */}
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}