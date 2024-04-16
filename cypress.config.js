const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://wave-trial.getbynder.com',
    supportFile: false,
  },
})
