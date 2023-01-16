import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "3buzr6",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

// module.exports = {
//     projectId: "3buzr6",
//     // The rest of the Cypress config options go here...
// };
