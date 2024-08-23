const core = require('@actions/core');

try {
    const threshold = core.getInput('threshold');
    const jsonSummary = core.getInput('jsonSummary');

    const coverageData = JSON.parse(jsonSummary);
    let totalStatements = 0;
    let coveredStatements = 0;
  
    for (const file in coverageData) {
      const fileCoverage = coverageData[file];
      const statements = fileCoverage.s;
  
      for (const statement in statements) {
        totalStatements++;
        if (statements[statement] > 0) {
          coveredStatements++;
        }
      }
    }
  
    const coveragePercentage = (coveredStatements / totalStatements) * 100;    
  
    if (coveragePercentage >= threshold) {
      // core.setOutput("Coverage is at least 90%.", true);
      core.setOutput("message", `Coverage is ${coveragePercentage}%`);
      core.setOutput("pass", true)
    } else {
      core.setOutput("message", `Coverage is below ${threshold}%`);
      core.setOutput("pass", false)
    }
} catch (error) {
    core.setFailed(error.message);
}