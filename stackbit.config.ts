// stackbit.config.ts
// stackbit.config.ts - CORRECTED

// stackbit.config.ts - CORRECTED

import { defineStackbitConfig } from '@stackbit/types';
// ... other imports

export default defineStackbitConfig({ // <--- Opening brace
    stackbitVersion: '~0.6.0',
    contentSources: [
        // ... your content source config
    ], // <--- IMPORTANT: Add a comma here if it's missing

    // THIS IS THE CORRECT LOCATION FOR THE MODELS PROPERTY
    models: {
        // ... model definitions
    }

}); // <--- Closing brace and parenthesis of the function call

        // --- Author Model (from before) ---
        Author: {
          type: 'data',
          label: 'Author',
          filePath: 'authors/{slug}.json',
          fields: [
            { type: 'string', name: 'name', label: 'Author Name', required: true },
            { type: 'image', name: 'picture', label: 'Author Picture' },
          ],
        },
      },
    }),
  ],
});
