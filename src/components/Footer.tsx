export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} UMYIDI Youth Hub. All rights reserved.
      </div>
    </footer>
  );
}