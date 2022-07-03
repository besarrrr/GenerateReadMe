
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  *  ${data.description}
  *  ${data.motivation}
  *  ${data.problem}
  *  ${data.learn}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Github]((#github))
  * [Contact](#contact)
  * [License](#license)
  
  ## Installation
  
  ${data.install}

  ## Usage

  ${data.usage}

  ## Github 
  
  https://github.com/${data.github}

  ## Contact 

  If you have any questions about this projects, please contact me directly at ${data.email}.

  ## License
  
  This is licensed by: ${data.license}
  <br>
  https://choosealicense.com/licenses/${data.license}/
  
`;
}

module.exports = generateMarkdown;
