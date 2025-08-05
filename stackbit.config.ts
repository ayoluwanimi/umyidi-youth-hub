// stackbit.config.ts

import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDir: 'content', // The folder where your content lives
      models: {
        // We will define our models here
      },
    }),
  ],
});
// stackbit.config.ts
// ...

export default defineStackbitConfig({
  // ...
  contentSources: [
    new GitContentSource({
      // ...
      models: {
        // --- Post Model ---
        Post: {
          type: 'page', // This is a full page
          label: 'Post',
          // How to identify which files are posts
          match: 'posts/*.md', // Matches all markdown files in content/posts/
          fields: [
            { type: 'string', name: 'title', label: 'Title', required: true, default: 'My New Post' },
            { type: 'slug', name: 'slug', label: 'URL Slug', required: true },
            { type: 'date', name: 'date', label: 'Publication Date', required: true },
            { 
              type: 'reference', // Link to another model
              name: 'author', 
              label: 'Author',
              models: ['Author'] // Specifies that this field must reference an 'Author' model
            },
            {
              type: 'list', // A list of items
              name: 'tags',
              label: 'Tags',
              items: { type: 'string' } // The items in the list are strings
            },
            { type: 'markdown', name: 'content', label: 'Post Content', required: true },
          ],
        },

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
