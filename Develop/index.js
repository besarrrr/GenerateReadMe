// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            type: 'checkbox',
            name: 'license',
            message: 'Provide the licenses that you want to use for your repository.',
            Choices: [ 'Academic Free License v3.0', 'Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license','BSD 3-clause Clear license','Creative Commons license family','Creative Commons Zero v1.0 Universal','Creative Commons Attribution 4.0','Creative Commons Attribution Share Alike 4.0','Do What The F*ck You Want To Public License','Educational Community License v2.0','Eclipse Public License 1.0','Eclipse Public License 2.0','European Union Public License 1.1','GNU Affero General Public License v3.0','GNU General Public License family','GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c','Microsoft Public License',	'MIT','Mozilla Public License 2.0','Open Software License 3.0', 'PostgreSQL License','SIL Open Font License','University of Illinois/NCSA Open Source License','The Unlicense','zLib License']
           
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

// Function call to initialize app
//init();


