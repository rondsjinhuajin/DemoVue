import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					hack: `true`,
				},
				javascriptEnabled: true,
			},
		},
	},
  server: {
    // host: "127.0.0.1",
    host: "0.0.0.0",
    port: 8080,
    strictPort: false,
    https: false,
    open: false,
  },
});
