import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/main.ts", // The entry file for your library
      name: "HarmonyUI",       // Global variable name for UMD builds
      fileName: (format) => `harmonyui.${format}.js`, // Output filenames
    },
    rollupOptions: {
      // Ensure Vue is treated as an external dependency
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
