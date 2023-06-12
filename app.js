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
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));










