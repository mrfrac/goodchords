const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx({
  main: './src/index.ts',
  outputPath: './dist',
  tsConfig: './tsconfig.lib.json',
  compiler: 'tsc',
  format: ['esm', 'cjs'],
  generatePackageJson: false,
}, {
  plugins: [
    {
      name: 'goodchords-output-extensions',
      generateBundle(_options, bundle) {
        const declaration = bundle['index.d.ts'];

        if (declaration?.type === 'asset' && typeof declaration.source === 'string') {
          declaration.source = declaration.source
            .replaceAll('\\', '/')
            .replace(/\/{2,}/g, '/');
        }
      },
      outputOptions(options) {
        const extension = options.format === 'cjs' ? 'cjs' : 'mjs';

        return {
          ...options,
          chunkFileNames: `[name].${extension}`,
          entryFileNames: `[name].${extension}`,
        };
      },
    },
  ],
});
