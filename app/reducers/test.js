import { handleActions } from 'redux-actions'
export  function counter1(state = 0, action) {
  return action.type;
}

export  function counter2(state = 0, action) {
  return action.text || '';
}

export const testReducer = handleActions({
  'start action':(state,action)=>{
    console.log('start')
    return {}
  },
  'end action':(state,action)=>{
    console.log('end')
    return {}
  }
},{})