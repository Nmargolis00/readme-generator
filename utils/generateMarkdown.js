// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'None'){
        return `https://img.shields.io/badge/license-$%7Blicense%7D-blue.svg`
    }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'None'){
        return `* [License](#License)`
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'None'){
        return `##License
        This project is licensed under:${license}`
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            #${renderLicenseBadge(data.license)}
        ##${data.description}

        * [Table Of Contents](#tableOfContents)
            #${renderLicenseLink(data.license)}
        ##

        #${renderLicenseSection(data.license)}
`;
}
// Go through and upate this page so that it matches

module.exports = generateMarkdown;

