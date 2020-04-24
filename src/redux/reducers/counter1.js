import { ADD2 } from "../actions/actionTypes";

const initialState = {
    counter: 100,
  };
  
  export default function counter1(state = initialState, action) {
    switch (action.type) {
      case ADD2:
        return {
          counter: state.counter + action.payload,
        };
  
  
      default:
        return state;
    }
  
  
  }
  