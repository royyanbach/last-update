const { generateSW } = require('workbox-build');

const outDir = process.env.OUT_DIR || 'dist';

generateSW({
  globDirectory: outDir,
  globPatterns: [
    "**/*.{html,js,css,ico,webmanifest}"
  ],
  sourcemap: false,
  swDest: `${outDir}/sw.js`,
}).then(({count, size}) => {
  console.log(`Done generating sw.js, which will precache ${count} files, totaling ${size} bytes.`);
});
