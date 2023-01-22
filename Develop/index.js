// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project' 
    },
    {
        type:'input',
        name: 'description',
        message: 'Please provide a short description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can we install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: "How can we use your project"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines for your project"
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can we test your project?'
    },
    {
        type:'list',
        name:'license', 
        message: 'Please select a license',
        choices: ['MIT', 'Apache', 'ISC', 'Microsoft Public License', 'none'] 
    },
    {
        type:'input',
        name:'email', 
        message:'Please provide your email address'
    },
    {
        type:'input',
        name:'username', 
        message:'Please provide your GitHub username'
    },
    {
        type:'input',
        name:'githublink', 
        message: 'Please provide a link to your GitHub repository'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('../README.md', data, (err) =>{
        if (err) throw (err);
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('README.md', generateMarkdown(response))

        })
}

// Function call to initialize app
init();




// need a descripition
// table of contents
//installation
//usage 
//licence
//contributing 
// test 
//questions 