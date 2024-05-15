const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  waitForAnimations: true,
  requestTimeout: 60 * 1000,
  responseTimeout: 120 * 1000,
  defaultCommandTimeout: 20 * 1000,
  pageLoadTimeout: 120 * 1000,

  e2e: {
    // baseUrl: 'https://e2e.solarmarket.com.br',
    baseUrl: 'https://qa-clean.business.solarmarket.com.br/',
    // username: 'guilherme.mello@solarmarket.com.br',
    username: 'leonardomellotrindade+emp@gmail.com',
    password: '123456',
    fixturesFolder: './cypress/fixtures',
    videosFolder: './cypress/results/videos',
    screenshotsFolder: './cypress/results/screenshots',
    supportFile: './cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: './cypress/e2e/**/*.feature',
    slowTestThreshold: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalRunAllSpecs: true,
    testIsolation: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    env: {
      hideXhr: true
    }
  },
});
