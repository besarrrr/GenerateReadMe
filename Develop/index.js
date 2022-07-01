// TODO: Include packages needed for this application
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a project name!');
                return false;
              }
            } 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation to build this?',
            validate: motivationInput => {
              if (motivationInput) {
                return true;
              } else {
                console.log('You need to enter a motivation!');
                return false;
              }
            }

        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation to build this?',
            validate: motivationInput => {
              if (motivationInput) {
                return true;
              } else {
                console.log('You need to enter a motivation!');
                return false;
              }
            }

        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn from making this project?',
            validate: learnInput => {
              if (learnInput) {
                return true;
              } else {
                console.log('You need to enter something you learned!');
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to enter a "Table of Contents" section?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: installInput => {
              if (installInput) {
                return true;
              } else {
                console.log('You need to enter install instructions!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use',
            validate: usageInput => {
              if (usagelInput) {
                return true;
              } else {
                console.log('You need to enter usage details!');
                return false;
              }
            } 
        },
        {
            type: 'input',
            name: 'license',
            message: 'Provide the licenses that you used in this project',
            validate: licenseInput => {
              if (licenseInput) {
                return true;
              } else {
                console.log('You need to enter a license!');
                return false;
              }
            } 
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions();
init();
