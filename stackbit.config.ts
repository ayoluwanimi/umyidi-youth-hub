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
            // We tell Stackbit to look for editable content in this folder.
            contentDirs: ['src/content'],
            // The models this content source will use.
            models: ['Page'],
            // CRITICAL: Exclude all non-content files to prevent errors.
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
                // Ignore all source code by default, except for 'contentDirs'.
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
    // This defines the structure of the content Stackbit can edit.
    models: {
        Page: {
            type: 'data',
            label: 'Page',
            // Files for this model will be in 'src/content/pages/'
            filePath: 'src/content/pages/{slug}.json',
            // The image is handled inside the component, so we only list text fields here.
            fields: [
                { type: 'string', name: 'title', label: 'Title', required: true },
                { type: 'string', name: 'subtitle', label: 'Subtitle' },
                { type: 'string', name: 'buttonText', label: 'Button Text' }
            ]
        }
    }
});