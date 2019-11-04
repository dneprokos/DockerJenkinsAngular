// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters  = require('jasmine-reporters');


/**
 * @type { import("protractor").Config }
 */
exports.config = {
  resultJsonOutputFile: './e2e/results/test-results.json',
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
    defaultTimeoutInterval: 40000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    let jUnitReporter = new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './e2e/test-results',
      filePrefix: 'reportXMLoutput'
    });

    let specReporter = new SpecReporter({ 
      spec: { 
        displaySuccessful: true,
        displayErrorMessages: true,
        displayFailed: true,
        displayDuration: true
      },
      suite: { displayNumber: true },
      summary: { displayFailed: true } 
    });

    jasmine.getEnv().addReporter(specReporter);
  }
};