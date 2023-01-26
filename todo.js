

const prompt = require('prompt-sync')()

class task {
    constructor(todo,description){
        this.todo = todo;
        this.description = description;
    }
}

const todolist = [];


//view todo
const view = () => {
    console.log(`\n Todo list `)
    for (let i = 0; i < todolist.length; i++) {
        console.log(`${i + 1} ${todolist[i].todo} :${todolist[i].description}`)
    }
    console.log('\n')
}

//add todo
const add = (todo,description) => {
    todo = prompt('What is your todo : ');
    description = prompt('describe your todo : ');
    console.log(todolist.push(new task(todo,description )))
    console.log(`Add was successful! \n`)

    view()
} 

//remove
const remove = (todo) => {
    view()

    todo = prompt('What is the title of your todo: ')

    const findtodo = (mytodo, todo) => {
        const index = mytodo.findIndex((todo1, index) => {
            return todo1.todo.toUpperCase() === todo.toUpperCase()
        })
        return index
    }

    const getId = findtodo(todolist, todo)

    let ask = prompt(`Are you sure? `)
    ask = ask.toUpperCase()

    if (ask == 'yes' || ask == 'y') {
        console.log(todolist.splice(getId,1))
        console.log(`Todo deleted! \n`)
    } else {
        console.log(`You can cancelled! \n`)
    }
    
    
    view()
}

//edit todo
const update = (todo) => {
    view()

    todo = prompt('What would you like to adjust: ')

    const findtodo = (mytodo, todo) => {
        const index = mytodo.findIndex((todo1, index) => {
            return todo1.todo.toUpperCase() === todo.toUpperCase()
        })
        return index
    }

    const getId = findtodo(todolist, todo)

    let replacetodo = prompt(`What would you like to replace ${title} with ? `)
    let replacedescription = prompt(`Enter a description: `)

    let replaced = new task(replacetodo, replacedescription)

    console.log(todolist.splice(getId,1,replaced))
    console.log(`\n update was successful! \n`)

    view()
}
//master

let main = () =>{
    console.log(`************************WELCOME TO YOUR TO DO LIST***************************`)
    console.log(`\n(1)View your todo \n(2)Add to your todo \n(3)Update todo list \n(4)Delete todo list \n(5)Exit \n`)
    let askUser = prompt(`\nWhat would you like to do ? \n NOTE: Enter the first word as your answer `)
    askUser = askUser.toLowerCase();

    if(askUser == 'view'){
        view()
        main()
    }
    else if(askUser == 'add') {
        add()
        main()
    }
    else if(askUser == 'delete') {
        remove()
        main()
    }
    else if(askUser == 'update'){
        update()
        main()
    }
    else if(askUser == 'exit'){
        return
    }
    else {
        console.log('Invalid Input')
        main()
    }
}

main()
