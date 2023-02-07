// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }else if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
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
    return 'https://opensource.org/licenses/MIT'
  }else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC'
  } else if (license === 'Unlicense') {
    return 'http://unlicense.org/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(data.license);
  if (data.license === 'None') {
    return ''
  } else {
    return `##License ${data.license}: ${licenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Get title from user input
  return `# ${data.title}
  ${renderLicenseBadge(data.licence)}
  ## Table of Contents
  a) [Description] (#description)
  b) [Installation Guide] (#installation)
  c) [Usage] (#usage)
  d) [Contribution Guidelines] (#contribution)
  e) [Test] (#test)
  f) [Questions] (#contact)
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
  [${data.license}]${renderLicenseLink(data.licence)}
  ## Questions
  For any questions please use the following to contact
  Email: ${data.contact}
  GitHub: ${data.username}
  GitHub Repo: ${data.githublink}
`;
}

module.exports = generateMarkdown;
