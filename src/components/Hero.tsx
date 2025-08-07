import { Link } from "react-router-dom";
import heroImage from "/images/hero-section.png"; // Place this image in public/images/

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            Welcome to UMYIDI Youth Hub
          </h1>
          <p className="mb-6 text-gray-500 md:text-xl dark:text-gray-400">
            Empowering Youth for a Brighter Future
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90"
            to="#"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
            onError={e => {
              (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
}