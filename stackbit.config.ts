// stackbit.config.ts

import { defineStackbitConfig } from '@stackbit/types';
// This is the robust import method that prevents the "not callable" error
import * as GitContentSourceModule from '@stackbit/cms-git';

const GitContentSource = GitContentSourceModule.default;

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    // --- Configuration for Your Vite/Netlify Setup ---
    // These commands are correct based on your package.json
    buildCommand: 'npm run build',
    publishDir: 'dist', // Vite's default output directory
    devCommand: 'npm run dev -- --port {PORT}', // Correct command for Vite

    // --- Content Source Configuration ---
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,

            // We will tell Stackbit to look for content in a 'content' folder
            // inside 'src'. We will create this folder in the next step.
            contentDirs: ['src/content'],

            // The models this content source will use.
            models: ['Page'],

            // CRITICAL: Exclude all non-content files to prevent errors.
            // This is tailored to your project.
            excludeFiles: [
                '.eslintrc.cjs',
                'components.json',
                'package.json',
                'package-lock.json',
                'postcss.config.js',
                'README.md',
                'stackbit.config.ts',
                'tailwind.config.js',
                'tsconfig.json',
                'tsconfig.node.json',
                'vite.config.ts',
                // Ignore the entire src directory by default,
                // except for the contentDirs specified above.
                'src/assets',
                'src/components',
                'src/lib',
                'src/pages',
                'src/App.tsx',
                'src/index.css',
                'src/main.tsx'
            ]
        })
    ],

    // --- Model Definitions ---
    // This defines the structure of a generic "Page" that Stackbit can edit.
    models: {
        Page: {
            type: 'data', // Use 'data' for JSON files
            label: 'Page',
            // Files for this model will be in 'src/content/pages/'
            filePath: 'src/content/pages/{slug}.json',
            fields: [
                { type: 'string', name: 'title', label: 'Title', required: true },
                { type: 'string', name: 'subtitle', label: 'Subtitle' },
                { type: 'string', name: 'buttonText', label: 'Button Text' },
                { type: 'image', name: 'heroImage', label: 'Hero Image'}
            ]
        }
    }
});