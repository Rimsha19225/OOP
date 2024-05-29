#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name: string
    constructor(n:string){
        this.name = n
    }
}

class person{
    students: Student[] = []
    addStudent(obj: Student){
        this.students.push(obj)
    }
}


const persons = new person()

const programStart = async(persons: person) => {
    do{
    console.log("Welcome!");
    const ans = await inquirer.prompt(
        {
            name: "select",
            type: "list",
            message: "whome would you like to interact with?",
            choices: ["Staff", "Student", "exit"]
        }
    )

    if(ans.select == "Staff"){
        console.log("You Approach the staff room. Please feel to free to ask any question.");
    }
    else if(ans.select == "Student"){
        let ans = await inquirer.prompt(
            {
                name: "Student",
                type: "input",
                message: "Enter the student,s name you wish to engage with:"
            }
        )
        const student = persons.students.find(value => value.name == ans.Student)
        if (!student){
            const name = new Student(ans.Student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you!`);
            console.log(`\nNew Student Added`);
            console.log(`\nCurrent Stueent List:`);
            console.log(persons.students);
        } else {
            console.log(`Hello i am ${student.name}. Nice to see you again!`);
            console.log(`\nExisting Student List:`);
            console.log(persons.students);
        }
    }else if(ans.select == "exit"){
        console.log(`Exiting the Program...`);
        process.exit()
    }
    }while(true)
}

programStart(persons)