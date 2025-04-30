// vitest.config.js
import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config(); // por defecto .env
}

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
});
