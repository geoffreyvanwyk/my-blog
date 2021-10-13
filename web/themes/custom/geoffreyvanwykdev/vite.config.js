import liveReload from 'vite-plugin-live-reload'

export default {
  plugins: [
    liveReload(__dirname+'/**/*.(php|inc|theme|twig)')
  ],

  build: {
    // Generate manifest.json in outDir.
    manifest: true,
    rollupOptions: {
      // Overwrite default .html entry.
      input: [
        '/styles/style.css',
      ],
      // Remove the [hash] since Drupal will take care of that.
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].[hash].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },

  server: {
    // Required to load scripts from custom host.
    cors: true,

    // We need a strict port to match on PHP side.
    // Change freely, but update on PHP to match the same port.
    strictPort: true,
    port: 12321,

    hmr: {
      host: 'localhost',
    }
  },
}
