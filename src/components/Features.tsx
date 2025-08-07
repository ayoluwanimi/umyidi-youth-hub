// src/components/Features.tsx

import { getHomePage } from "@/lib/content";

export default function Features() {
  // Get features from content API with fallback
  const { features = [] } = getHomePage();
  
  // Fallback features array in case content is missing
  const fallbackFeatures = [
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
  
  // Use content or fallback if empty
  const displayFeatures = features.length > 0 ? features : fallbackFeatures;

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Programs designed to empower youth and build skills for the future
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {displayFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                {/* Simple icon placeholders that won't cause errors */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}