// stackbit.config.ts - CORRECTED

import { defineStackbitConfig } from '@stackbit/types';
// We need to import GitContentSource to use it
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    // The contentSources array is where we define where Stackbit finds content.
    // This is where we will add the configuration to fix the errors.
    contentSources: [
        new GitContentSource({
            // The root directory of your project
            rootPath: __dirname,

            // *** IMPORTANT ***
            // Tell Stackbit where your actual content markdown/JSON files are.
            // Adjust this to match your project structure. Common examples:
            // contentDirs: ['content'],
            // contentDirs: ['src/pages'],
            // contentDirs: ['src/content'],
            contentDirs: ['authors'], // Based on your 'Author' model's filePath

            // *** THE FIX IS HERE ***
            // We provide a list of files and patterns for Stackbit to ignore.
            // This stops it from trying to validate your package.json, tsconfig.json, etc.
            excludeFiles: [
                'package.json',
                'package-lock.json',
                'README.md',
                'stackbit.config.ts',
                'vite.config.ts', // or next.config.js, etc.
                'postcss.config.js',
                '.gitignore',
                // This single pattern ignores tsconfig.json, tsconfig.app.json, etc.
                'tsconfig*.json',
                // This was also in your error list
                'components.json'
            ]
        })
    ],

    // The models are defined correctly here and will be used by the content source above.
    models: {
        Author: {
            type: 'data',
            label: 'Author',
            // This filePath tells the content source where to find Author files.
            // This is why we added 'authors' to contentDirs above.
            filePath: 'authors/{slug}.json',
            fields: [
                { type: 'string', name: 'name', label: 'Author Name', required: true },
                { type: 'image', name: 'picture', label: 'Author Picture' },
            ],
        },
        // ... other model definitions
    }
});