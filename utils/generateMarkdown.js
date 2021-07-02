// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseOption = [];
function renderLicenseBadge(data) {
console.log("RENDER LICENSE",data.license)

if (data.license === 'Apache License') {

  let apache = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
licenseOption.push(apache);
  }
   else if (data.license === 'GNU General Public License'){
     let gnu = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  licenseOption.push(gnu);
    }
   else {
let mit= `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`
licenseOption.push(mit);
  }
}

  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data)
  
  return `# ${data.title}
  
  ## Table of Contents
  *[Description] (#description)
  *[Dependencies]

## Description
  ${data.description}

  ##Github username

  ${data.userName}

## Email

  ${data.email}

  ##Project title

  ${data.title}

## Description of the project

  ${data.description}

## Dependencies required for installation

  ${data.installation}


## What is the app used for?

${data.usage}

##License

${licenseOption} ${data.license}

## Contributors of the project

${data.contributors}

## Command to test this App

${data.test}

`;
}



module.exports = generateMarkdown;
