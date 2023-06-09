const fs = require('fs'); // need this statement to use the fs module
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);

/*const names = profileDataArgs[0];
const github = profileDataArgs[1];
we can use an ES6 feature called assignment destructuring to assigns above elements of profileDataArgs
array to variable names in a single expression */
const [names, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(names, github), err => {
    /* In the callback function block, a conditional statement checks for the err being returned by the callback function. 
    If err exists, an error message is displayed, using the following statement: */
    if (err) throw new Error(err);
    /* Rather than silently displaying the error with console.log(err);, 
    the preceding statement creates an exception and stops the execution of the code.*/
    console.log('Portfolio complete! Check out index.html to see the output!');
});

/* console.log(names, github);
console.log(generatePage(names, github)); */








