// stackbit.config.ts
// stackbit.config.ts - CORRECTED

import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

// A SINGLE, CONSOLIDATED DEFAULT EXPORT
export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [/* ... your models ... */],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                publicPath: '/'
            }
        })
    ]
    // Add any other configuration properties inside this single object
});

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
