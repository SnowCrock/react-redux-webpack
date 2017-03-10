export  function counter1(state = 0, action) {
  return action.type;
}

export  function counter2(state = 0, action) {
  return action.text || '';
}