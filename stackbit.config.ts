// stackbit.config.ts - FINAL CORRECTED VERSION

import { defineStackbitConfig } from '@stackbit/types';
// *** THE FIX IS ON THIS LINE ***
// We are importing the default export from the library, so no curly braces are needed.
import GitContentSource from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    contentSources: [
        GitContentSource({
            rootPath: __dirname,
            contentDirs: ['authors'],
            excludeFiles: [
                'package.json',
                'package-lock.json',
                'README.md',
                'stackbit.config.ts',
                'vite.config.ts',
                'postcss.config.js',
                '.gitignore',
                'tsconfig*.json',
                'components.json'
            ]
        })
    ],

    models: {
        Author: {
            type: 'data',
            label: 'Author',
            filePath: 'authors/{slug}.json',
            fields: [
                { type: 'string', name: 'name', label: 'Author Name', required: true },
                { type: 'image', name: 'picture', label: 'Author Picture' },
            ],
        },
        // ... other model definitions
    }
});