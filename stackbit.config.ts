// stackbit.config.ts

import { defineStackbitConfig } from '@stackbit/types';
// This import method prevents the "not callable" error.
import * as GitContentSourceModule from '@stackbit/cms-git';

const GitContentSource = GitContentSourceModule.default;

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    // --- Configuration for Netlify ---
    // This section is derived directly from your package.json's "scripts".

    // The command to build your site for production.
    buildCommand: 'npm run build',

    // The directory where your built site is placed. For Vite, the default is 'dist'.
    publishDir: 'dist',

    // *** THE MAIN FIX IS HERE ***
    // This is the correct command to start the Vite development server.
    // The `-- --port {PORT}` part is essential for Stackbit and Netlify to manage the port.
    devCommand: 'npm run dev -- --port {PORT}',

    // --- Content Source Configuration ---
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,

            // *** IMPORTANT: CUSTOMIZE THIS ***
            // List the folders containing your markdown or JSON content files.
            // Example: ['src/content/pages', 'src/data']
            contentDirs: ['src/content'],

            // List the names of the models defined below.
            models: ['Page', 'Author'],

            // Exclude all non-content files to prevent validation errors.
            excludeFiles: [
                'package.json',
                'package-lock.json',
                '.gitignore',
                'README.md',
                // Your project's config files:
                'stackbit.config.ts',
                'vite.config.ts',
                'postcss.config.js',
                'tailwind.config.js',
                'tsconfig.json',
                'tsconfig.node.json',
                // Ignore the build output and node_modules folders
                'dist',
                'node_modules'
            ]
        })
    ],

    // --- Model Definitions ---
    // *** IMPORTANT: CUSTOMIZE THIS to match your content structure ***
    models: {
        Page: {
            type: 'page',
            label: 'Page',
            filePath: 'src/content/pages/{slug}.md',
            fields: [
                { type: 'string', name: 'title', required: true },
                { type: 'markdown', name: 'content' }
            ]
        },
        Author: {
            type: 'data',
            label: 'Author',
            filePath: 'src/content/authors/{slug}.json',
            fields: [
                { type: 'string', name: 'name', required: true },
                { type: 'image', name: 'picture' }
            ]
        }
    }
});