// src/components/Hero.tsx
import { Link } from "react-router-dom";
import { getHomePage } from "@/lib/content";

export default function Hero() {
  // Get content with fallback
  const { hero } = getHomePage();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto for centering */}
        <div className="flex flex-col items-center justify-center text-center"> {/* Simplified layout for better centering */}
          <div className="max-w-[800px] space-y-4"> {/* Added max-width and proper spacing */}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              {hero.subtitle}
            </p>
            <div className="flex justify-center pt-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to={hero.ctaLink}
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}