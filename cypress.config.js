const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
   specPattern: "**/*{.feature,cy.js}",
   baseUrl:"https://trello.com",
   chromeWebSecurity:false,
   firefoxWebSecurity:false,
   screenshotsFolder:"Delete card screenShot",
   trashAssetsBeforeRuns:true,
   setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber());
   },  
 },

});
