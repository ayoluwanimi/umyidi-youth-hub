// stackbit.config.ts
// stackbit.config.ts - CORRECTED

// stackbit.config.ts - CORRECTED

import { defineStackbitConfig } from '@stackbit/types';
// ... other imports

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    contentSources: [
        // ... your content source config
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
