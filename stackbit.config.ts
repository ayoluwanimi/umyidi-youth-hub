// stackbit.config.ts - FINAL CORRECTED VERSION

import { defineStackbitConfig } from '@stackbit/types';
import GitContentSource from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',

    contentSources: [
        GitContentSource
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