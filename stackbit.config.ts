// stackbit.config.ts - FINAL CORRECTED VERSION

import { defineStackbitConfig } from '@stackbit/types';
// Step 1: Import the entire module into a single object.
import * as GitContentSourceModule from '@stackbit/cms-git';

// Step 2: The actual class we need is on the ".default" property of the module.
// We pull it out and assign it to a new constant.
const GitContentSource = GitContentSourceModule.default;

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    contentSources: [
        // Step 3: Now 'GitContentSource' is the correct, callable class constructor.
        // This 'new' call will now work.
        new GitContentSource({
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