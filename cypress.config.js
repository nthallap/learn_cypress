const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config({ debug: true });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        deleteFile(filename){
          return new Promise((resolve, reject) => {
            rm(filename, { maxRetries: 10, recursive: true}, (err) => {
              if(err){
                console.error(err)
              }
              resolve(null)
            })
          })
        }
      });
      allureWriter(on, config);
      return config;
    },
    watchForFileChanges: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  env: {
    allure: true,
    allureResultsPath: 'allure_reports',
    client_id: `${process.env.id}`,
    client_secret: `${process.env.secret}`
  },
});
