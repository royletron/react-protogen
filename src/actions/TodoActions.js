export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
  return{
    type: ADD_TODO,
    todo
  }
}

export const REMOVE_TODO = 'REMOVE_TODO';
export function removeTodo(todo) {
  return{
    type: REMOVE_TODO,
    todo
  }
}
