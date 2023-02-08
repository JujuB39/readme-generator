// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  }else if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'ISC') {
    return '(https://opensource.org/licenses/ISC)'
  } else if (license === 'Unlicense') {
    return '(http://unlicense.org/)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(license);
  if (license === 'None') {
    return ''
  } else {
    return `##License ${license}: ${licenseLink}`
  }
}
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Get title from user input
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  a) [Description](#description) <br>
  b) [Installation Guide](#installation) <br>
  c) [Usage](#usage) <br>
  d) [Contribution Guidelines](#contribution) <br>
  e) [Test](#test) <br>
  f) [Questions](#questions) <br>
  ## Description
  ${data.description}
  ## Installation Guide
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  [${data.license}]${renderLicenseLink(data.license)}
  ## Questions
  For any questions please use the following to contact
  Email: ${data.contact}
  GitHub: ${data.username}
  GitHub Repo: ${data.githublink}
`;
}

module.exports = generateMarkdown;
