// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
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
            name: 'problem',
            message: 'What problem does this solve?',
            validate: motivationInput => {
              if (motivationInput) {
                return true;
              } else {
                console.log('You need to what problem your app solves!');
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
            message: 'Provide instructions and examples for use!',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('You need to enter usage details!');
                return false;
              }
            } 
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to select a license for your project?',
            default: true
          },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Provide the licenses that you want to use for your repository.',
            choices: ['mit','agpl-3.0','gpl-3.0','lgpl-3.0','mpl-2.0','apache-2.0','bsl-1.0','unlicense'],
            when: ({ confirmLicense }) => confirmLicense
        }
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('./utils/README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// TODO: Create a function to initialize app

questions()
// getting user answers 
.then(answers => {
    return generateMarkdown(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
