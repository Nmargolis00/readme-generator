// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'None'){
        return `![license badge](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'None'){
        return `[License](#License)`
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'None'){
        return `## License
        This project is licensed under:${license}`
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
        

## Description

 ${data.description}

 ## Table of Contents

* ${renderLicenseLink(data.license)}
* [Descriptiom](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [How to Contribute](#how-to-contribute)
* [Questions](#questions)

## Installation

 ${data.installation}

## Usage

### ${data.usage}

## Tests

### ${data.tests}


## How to Contribute

 ${data.contribute}

## Questions
Questions?\n
You can reach me by email at: ${data.email}\n
or\n
You can reach me by my github: <https://github.com/${data.github}>


`;
}
// Go through and upate this page so that it matches

module.exports = generateMarkdown;

