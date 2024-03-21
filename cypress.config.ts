import {defineConfig} from 'cypress';
import path from 'path';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
