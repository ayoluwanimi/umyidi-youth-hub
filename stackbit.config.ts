// stackbit.config.ts

// --- Imports ---
// defineStackbitConfig provides type-checking and autocompletion for your config.
import { defineStackbitConfig } from '@stackbit/types';
// This is the robust way to import GitContentSource to avoid the "not callable" error.
import * as GitContentSourceModule from '@stackbit/cms-git';

// We extract the actual class from the imported module.
const GitContentSource = GitContentSourceModule.default;

// --- Main Configuration ---
export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    // --- Netlify-Specific Configuration ---
    // This tells Stackbit how to build your site. It should match your Netlify settings.
    buildCommand: 'npm run build', // Common commands: 'yarn build', 'pnpm build', 'hugo', 'eleventy'
    // This tells Stackbit where your built site is located. It must match your Netlify "Publish directory".
    publishDir: 'dist', // Common directories: 'public', 'build', '.next', '.output'
    // If you use Netlify Dev, specify the port.
    // devCommand: 'npm run dev -- --port {PORT}',
    // devLiveUpdate: true,

    // --- Content Source Configuration ---
    // This tells Stackbit where to find and how to handle your content.
    contentSources: [
        new GitContentSource({
            // The root directory of your Git repository.
            rootPath: __dirname,

            // *** IMPORTANT ***
            // List the directories that contain your editable content.
            // Stackbit will ONLY look for content in these folders.
            contentDirs: ['src/content/pages', 'src/content/posts', 'src/data'],

            // A list of models this content source will use.
            // These names must match the keys in the 'models' object below.
            models: ['Page', 'Post', 'Author'],

            // *** CRITICAL ***
            // Exclude all non-content files to prevent validation errors.
            // This solves the "does not match any model" errors.
            excludeFiles: [
                'package.json',
                'package-lock.json',
                'README.md',
                'stackbit.config.ts',
                '.gitignore',
                // Add your framework's config files
                'vite.config.ts',
                'astro.config.mjs',
                'next.config.js',
                // Add any other config files
                'postcss.config.js',
                'tailwind.config.js',
                'tsconfig.json',
                'tsconfig.node.json',
                // Ignore the build output directory
                'dist'
            ]
        })
    ],

    // --- Model Definitions ---
    // Define the structure of your content.
    models: {
        // A model for simple pages (e.g., About, Contact).
        Page: {
            type: 'page',
            label: 'Page',
            // Specifies where the files for this model are located.
            filePath: 'src/content/pages/{slug}.md',
            fields: [
                { type: 'string', name: 'title', label: 'Title', required: true },
                { type: 'markdown', name: 'content', label: 'Page Content' }
            ]
        },

        // A model for blog posts.
        Post: {
            type: 'page',
            label: 'Post',
            filePath: 'src/content/posts/{slug}.md',
            fields: [
                { type: 'string', name: 'title', label: 'Title', required: true },
                { type: 'datetime', name: 'date', label: 'Date', required: true },
                {
                    type: 'reference',
                    name: 'author',
                    label: 'Author',
                    models: ['Author'] // This links to the Author data model.
                },
                { type: 'image', name: 'heroImage', label: 'Hero Image' },
                { type: 'markdown', name: 'content', label: 'Post Content' }
            ]
        },

        // A model for data files, like authors.
        Author: {
            type: 'data',
            label: 'Author',
            filePath: 'src/data/authors/{slug}.json',
            fields: [
                { type: 'string', name: 'name', label: 'Name', required: true },
                { type: 'string', name: 'email', label: 'Email' },
                { type: 'image', name: 'picture', label: 'Picture' }
            ]
        }
    }
});