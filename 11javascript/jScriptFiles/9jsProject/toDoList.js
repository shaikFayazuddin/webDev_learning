// todo code
console.log("Welcome todo console!!!");
let question = prompt('What would you like to do?')
const toDoList = [];

while (question !== 'quit' && question !== 'q') {
    let listIndex = 0;

    
    if (question.toLowerCase() === 'new') {
        let newTodo = prompt("Enter new ToDo:");
        while (newTodo !== 'okay') {
            toDoList.push(newTodo);
            console.log(`${newTodo} added to the list`);
            let newTodo = prompt("Enter another ToDo or press 'okay to exit")
        }
    }
    else if (question.toLowerCase()  === 'list') {
        console.log('**************');
        for (let item of toDoList) {
            console.log(`${listIndex}: ${item}`);
            listIndex += 1;
        }
        console.log('**************');
    }
    else if (question.toLowerCase()  === 'delete') {
        const deleteIndex = parseInt(prompt("Enter the index of the ToDo that you wish to delete:"));
        console.log(deleteIndex);
        if (!Number.isNaN(deleteIndex)) {
            const removedItem = toDoList.splice(deleteIndex, 1);
            console.log(`${removedItem}  removed"`);
        } else {
            console.log("Unknow Index")
        }
    }
    question = prompt('What would you like to do?')
}
console.log("Ok!! You Quit the app!");
console.log(toDoList);