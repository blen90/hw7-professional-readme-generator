// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseOption = [];
function renderLicenseBadge(data) {
  console.log("RENDER LICENSE", data.license)

  if (data.license === 'Apache License') {

    let apache = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    licenseOption.push(apache);
  }
  else if (data.license === 'GNU General Public License') {
    let gnu = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    licenseOption.push(gnu);
  }
  else {
    let mit = `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`
    licenseOption.push(mit);
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);


  return `# ${data.title}

## License badge

${licenseOption}

  
## Table of Contents

  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)


## Description

  ${data.description}


## Username

  ${data.userName}


## Email

  ${data.email}


## Dependencies

  ${data.installation}


## Usage

${data.usage}


## License

This project is governed by: ${data.license}


## Contributors

${data.contributors}


## Test

${data.test}


## Questions

If you have any questions about the repo, open an issue or contact me directly at:  blen.or90@gmail.com

To see more of my work you can find me on Github: [Blenda's Github profile](https://github.com/blen90)


`;
}

module.exports = generateMarkdown;
