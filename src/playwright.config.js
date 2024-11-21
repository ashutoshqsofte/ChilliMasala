const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory where test files are located
  use: {
    baseURL: 'http://localhost:3000', // Replace with your local development server URL
    headless: true, // Set to false for debugging
    viewport: { width: 1280, height: 720 }, // Default viewport size
    actionTimeout: 5000, // Timeout for actions in ms
    trace: 'on-first-retry', // Collect traces on test failures
  },
  reporter: [['html', { open: 'on-failure' }]], // Generate an HTML report
});
