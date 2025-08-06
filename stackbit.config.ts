// stackbit.config.ts - FINAL CORRECTED VERSION

import { defineStackbitConfig } from '@stackbit/types';
import GitContentSource from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    contentSources: [
        // *** THE FIX IS HERE ***
        // We must create a new "instance" of GitContentSource
        // and pass it a configuration object with our settings.
         GitContentSource({
            // Tells Stackbit where your project root is
            rootPath: __dirname,

            // Tells Stackbit which directories contain your content
            contentDirs: ['authors'],

            // Tells Stackbit which files to ignore so it doesn't
            // try to treat them as content
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