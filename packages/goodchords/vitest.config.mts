import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: '../../coverage/packages/goodchords',
    },
    environment: 'node',
    globals: true,
    include: ['src/**/*.test.ts'],
  },
});
