// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  ## Description
  ${data.description}

  ##Github username

  (${data.userName})

  ##Email

  (${data.email}))

  ##Project title

  (${data.title})

  ##Description of the project

  (${data.description})

  ##Dependencies required for installation

  (${data.installation})


##What is the app used for?

(${data.usage})

##License used for this README file

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]

##Contributors of the project

(${data.contributors})

##Command to test this App

(${data.test})


}
`;
}







module.exports = generateMarkdown;
