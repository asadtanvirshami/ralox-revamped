const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {},
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {},
  },
  config: { responseTimeout: 1000000 },
});
