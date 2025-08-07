import { getHomePage } from "@/lib/content";

export default function Features() {
  const { features } = getHomePage();

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(features || []).map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md text-center">
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg";
                  }}
                />
              )}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}