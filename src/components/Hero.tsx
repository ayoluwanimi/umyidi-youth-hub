// src/components/Hero.tsx

import { Link } from "react-router-dom";

// This is the data file we created.
import homeData from '../content/pages/home.json';

// We will use an image that we know exists in your repository.
import HeroImage from "@/assets/hero-image.jpg";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="text-center">
                {/* This now reads from home.json */}
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {homeData.title}
                </h1>
                {/* This now reads from home.json */}
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {homeData.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  {/* This now reads from home.json */}
                  {homeData.buttonText}
                </Link>
              </div>
            </div>
          </div>
          {/* This now uses an image that exists */}
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src={HeroImage}
            width="550"
          />
        </div>
      </div>
    </section>
  );
}