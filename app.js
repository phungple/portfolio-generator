import inquirer from "inquirer";
//const fs = require('fs');
//const generatePage = require('./src/page-template');
//const pageHTML = generatePage(names, github);

//const profileDataArgs = process.argv.slice(2);

/*const names = profileDataArgs[0];
const github = profileDataArgs[1];
we can use an ES6 feature called assignment destructuring to assigns above elements of profileDataArgs
array to variable names in a single expression 
const [names, github] = profileDataArgs; */

//fs.writeFile('./index.html', pageHTML, err => {
    /* In the callback function block, a conditional statement checks for the err being returned by the callback function. 
    If err exists, an error message is displayed, using the following statement: */
//    if (err) throw err;
    /* Rather than silently displaying the error with console.log(err);, 
    the preceding statement creates an exception and stops the execution of the code.*/
//     console.log('Portfolio complete! Check out index.html to see the output!');
//});
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GibHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
=================
Add a New Project
=================
`);
    // to avoid the projects array to be set to an empty array in every function call
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)'
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What did you build this project with? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (Required)'
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                // If portfolioData isn't included as the argument in the function call, a new projects array will be initialized, and the existing project data will be lost
                return promptProject(portfolioData);
            } else {
                // we have to return the portfolioData so we can retrieve the user's answer and build an HTML template
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
    









