// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/tests/*.e2e-spec.ts'
  ],
  output: './output',
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://testapp:4200/',
  seleniumAddress: 'http://hub:4444/wd/hub/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { 
      //displayStacktrace: true,
      displaySuccessful: true,
      displayErrorMessages: true,
      displayFailed: true,
      displayDuration: true 
    } }));
  }
};