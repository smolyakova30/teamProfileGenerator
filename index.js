const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const questions = [
    
    {
        type: 'input',
        name: 'name',
        message: `What is your name?`,
        validate: nameInput => {
            if (nameInput){
                return true;
            }else{
                console.log(`Please, enter your name!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'email',
        message: `What is your email?`,
        validate: emailInput => {
            if (emailInput){
                return true;
            }else{
                console.log(`Please, enter your email!`);
                return false
            }
        }
    },
];


// triger asking the question

const init = () =>{
 return inquirer.prompt(questions);
}

init()
.then(userInput => {
    return fs.writeFile ('./dist/index.html', templateHTML(userInput), err =>{
console.log(err);
    });
})
.catch(err =>{
    console.log(err)
});

const templateHTML = function(userInput){
    let htmlOutput = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h3> ${userInput.name}</h3>
    </body>
    </html>
    `

return htmlOutput;
}