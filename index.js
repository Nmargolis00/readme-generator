// TODO: Include packages needed for this application
const { log } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Write a description of your project and tools you used'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'How is your App installed?',
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'How will this project be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What is the App's license? Use Arrow Keys and Enter to select",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
        ],
    },
       {
        type: 'input', 
        name: 'contribute',
        message: 'How would one contribute to this project if they would like to?'
    },
       {
        type: 'input', 
        name: 'tests',
        message: 'Please list any applicable tests for this project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponse)=>{
        console.log("Created a README");
        writeToFile('README.MD', generateMarkdown({...userResponse}))
    })
}

// Function call to initialize app
init();
