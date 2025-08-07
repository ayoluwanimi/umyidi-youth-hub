// src/components/Features.tsx

import { getHomePage } from "@/lib/content";
import { GraduationCap, Wrench, Users } from "lucide-react";

export default function Features() {
  const { features } = getHomePage();

  // Map icon names to actual icon components
  const iconMap: { [key: string]: any } = {
    "graduation-cap": GraduationCap,
    "tools": Wrench,
    "users": Users,
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Users;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary rounded-full">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}