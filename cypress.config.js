const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  // env: {
  //   username: "",
  //   password: "",
  //   apiUrl: "",
  // },

  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
