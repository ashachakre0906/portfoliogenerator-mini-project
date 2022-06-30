const inquirer = require('inquirer');
const fs = require ('fs');
const promptUser = () => {
    return inquirer.prompt(
        [
            {
                type : 'input' ,
                name : 'name' ,
                message : 'What is your name ?'
            },
            {
                type : 'input' ,
                name : 'location' ,
                message : 'Where are you from ?'
            }
            ,
            {
                type : 'input' ,
                name : 'hobby' ,
                message : 'What is your favorite hobby ?'
            }
            ,
            {
                type : 'input' ,
                name : 'github' ,
                message : 'What is your Github UserName ?'
            }
            ,
            {
                type : 'input' ,
                name : 'linkedin' ,
                message : 'Enter your Linkedin profile ?'
            },


        ]
    )
}
const generateHTML = ({name,location,hobby,github,linkedin}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" type =text/css href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>portfolio generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <p class="lead">My hobbies are ${hobby}.</p>
      <h3><span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
//Using writeFileSync as a promise

const init = () => {
    promptUser()
       //Use writeFileSync method to use promises instead of a callback function
       .then((answers) => fs.writeFileSync('./index.html', generateHTML(answers)))
       .then(() => console.log ("sucessfully wrote to index.html"))
       .catch((err) => console.error(err));
};

init();
