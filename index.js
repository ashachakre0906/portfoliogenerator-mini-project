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
                name : 'name' ,
                message : 'What is your Github UserName ?'
            }
            ,
            {
                type : 'input' ,
                name : 'Linkedin' ,
                message : 'Enter your Linkedin profile ?'
            },


        ]
    )
}