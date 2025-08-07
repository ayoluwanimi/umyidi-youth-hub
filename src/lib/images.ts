// src/lib/images.ts - CREATE THIS NEW FILE

// Default images that are guaranteed to exist
const defaultImages = {
  hero: "/placeholder.jpg"
};

// Helper function to handle images safely
export function getImageUrl(path: string | undefined): string {
  if (!path) return defaultImages.hero;
  
  // If path is absolute URL, return as is
  if (path.startsWith('http')) return path;
  
  // If path starts with /, it's from public folder
  if (path.startsWith('/')) {
    try {
      // This won't actually work at runtime but helps TypeScript
      return new URL(path, window.location.origin).href;
    } catch (e) {
      return path;
    }
  }
  
  // Otherwise, try to use the path as-is
  return path;
}