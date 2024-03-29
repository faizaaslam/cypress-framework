const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    testIsolation: false,
    pageLoadTimeout: 120000,
    baseUrl: 'https://ui.cogmento.com/'

  }
});
