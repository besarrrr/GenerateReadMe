
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
  * [License](#license)
  
  ## Installation
  
  ${data.install}

  ## Usage

  ${data.usage}

  ## Github Account
  
  https://github.com/${data.github}

  ## License
  
  This is licensed by: ${data.license}
  <br>
  https://choosealicense.com/licenses/${data.license}/
  
`;
}

module.exports = generateMarkdown;
