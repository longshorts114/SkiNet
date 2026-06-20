"use strict";
let message = "Hello";
let test = "Testing";
// interface Todo{
//     id:number
//     title:string
//     completed:boolean
// }
let todos = [];
function addTodo(title) {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
}
addTodo("Add Base API");
addTodo("Publish API");
toggleTodo(1);
console.log(todos);
