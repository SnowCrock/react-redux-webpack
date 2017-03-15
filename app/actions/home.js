import { createAjaxAction } from 'utils/ansyAction'
export function addTodo(text){
  return{
    type:'ADD_TODO',
    text:text,
  }
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const increment = createAjaxAction('','start action','end action')