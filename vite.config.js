import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { terser } from 'rollup-plugin-terser'; // Import terser plugin

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/assets/js/controllers/UserController.js'],
            refresh: true,
        }),
    ],
    build: {
      rollupOptions: {
        input: {
          app: './resources/js/app.js',
          userController: './resources/assets/js/controllers/UserController.js',
        },
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: 'js/[name].[ext]',
        },
      },
    },

});
