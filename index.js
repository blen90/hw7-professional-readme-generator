// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your e-mail address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please give a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "What dependencies need to be installed to run this app?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the app used for?",
        name: "usage",
    },
    {
        type: "list",
        message: "Please select the license that was used for this README file",
        name: "license",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
    },
    {
        type: "input",
        message: "Please add contributors",
        name: "contributors",
    },
    {
        type: "input",
        message: "What command do you use to test this App?",
        name: "test",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Succesfully wrote: " + fileName);
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("READMEfile.md", generateMarkdown(data));
    })
}


// Function call to initialize app
init();
