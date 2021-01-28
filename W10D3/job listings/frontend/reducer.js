const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "SWITCH_LOCATION":
      let nextState = Object.assign({}, state);
      const location = {
        city: action.city,
        jobs: action.jobs
      };
      nextState[action.location] = location;
      return nextState;
    default:
      return state;
  }
};

export default reducer;