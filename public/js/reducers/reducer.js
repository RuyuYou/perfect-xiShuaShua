function reducer(state = {value:''}, action) {
  switch(action.type){
    case "SECTION":
      return {
        value : action.value
      };
  }
  return state;
}

module.exports = reducer;