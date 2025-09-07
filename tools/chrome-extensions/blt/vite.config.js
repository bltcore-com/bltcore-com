/**
 * Defines the Vite configuration for the project.
 * This file is the entry point for configuring the Vite build tool.
 * It allows you to customize various aspects of the build process, such as plugins, server settings, and build options.
 */
import { defineConfig } from "vite";
/**
 * Imports the React plugin for Vite, which provides support for using React with Vite.
 * This plugin is used to enable React functionality in the Vite build process.
 */
import react from "@vitejs/plugin-react-swc";
/**
 * Imports the `@modyfi/vite-plugin-yaml` plugin, which provides support for loading YAML files in the Vite build process.
 * This plugin is used to enable YAML functionality in the Vite build configuration.
 */
import ViteYaml from "@modyfi/vite-plugin-yaml";

// https://crxjs.dev/vite-plugin
/**
 * Imports the `@crxjs/vite-plugin` plugin, which provides support for building Chrome extensions with Vite.
 * This plugin is used to enable Chrome extension functionality in the Vite build process.
 */
import { crx } from "@crxjs/vite-plugin";

/**
 * Imports the manifest configuration for the Chrome extension from the `manifest.json` file.
 * This manifest contains important metadata about the extension, such as the version, name, and permissions.
 * The manifest is used by the Chrome browser to properly load and configure the extension.
 */
import manifest from "./manifest.json";

import packageJson from './package.json'
const { version } = packageJson

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/)

manifest.version = `${major}.${minor}.${patch}.${label}`
manifest.version_name = version

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  ViteYaml(), crx({ manifest })],
  server: {
    port: 9999
  },
   // optimizeDeps: {
   //    exclude: []
   // },
   /**
    * Configures the Vite build process to manually chunk the output based on the dependencies in the `node_modules` directory.
    * This ensures that vendor dependencies are separated into their own chunks, which can improve performance by allowing the browser to cache these dependencies.
    * The `manualChunks` option is used to define a custom chunking strategy, where any module that is part of the `node_modules` directory is placed in a separate chunk.
    * The chunk name is derived from the first directory name within the `node_modules` directory for each dependency.
    */
   build: {
      rollupOptions: {
         output: {
            manualChunks(id) {
               if (id.includes("node_modules")) {
                  return id
                     .toString()
                     .split("node_modules/")[1]
                     .split("/")[0]
                     .toString();
               }
            },
         },
      },
   },
})