var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  // The contentSources array is where we define where Stackbit finds content.
  // This is where we will add the configuration to fix the errors.
  contentSources: [
    new import_cms_git.GitContentSource({
      // The root directory of your project
      rootPath: "C:\\Users\\Gosht\\OneDrive\\Documents\\umyidi-youth-hub",
      // *** IMPORTANT ***
      // Tell Stackbit where your actual content markdown/JSON files are.
      // Adjust this to match your project structure. Common examples:
      // contentDirs: ['content'],
      // contentDirs: ['src/pages'],
      // contentDirs: ['src/content'],
      contentDirs: ["authors"],
      // Based on your 'Author' model's filePath
      // *** THE FIX IS HERE ***
      // We provide a list of files and patterns for Stackbit to ignore.
      // This stops it from trying to validate your package.json, tsconfig.json, etc.
      excludeFiles: [
        "package.json",
        "package-lock.json",
        "README.md",
        "stackbit.config.ts",
        "vite.config.ts",
        // or next.config.js, etc.
        "postcss.config.js",
        ".gitignore",
        // This single pattern ignores tsconfig.json, tsconfig.app.json, etc.
        "tsconfig*.json",
        // This was also in your error list
        "components.json"
      ]
    })
  ],
  // The models are defined correctly here and will be used by the content source above.
  models: {
    Author: {
      type: "data",
      label: "Author",
      // This filePath tells the content source where to find Author files.
      // This is why we added 'authors' to contentDirs above.
      filePath: "authors/{slug}.json",
      fields: [
        { type: "string", name: "name", label: "Author Name", required: true },
        { type: "image", name: "picture", label: "Author Picture" }
      ]
    }
    // ... other model definitions
  }
});
//# sourceMappingURL=stackbit.config.4SJZLSQS.cjs.map
