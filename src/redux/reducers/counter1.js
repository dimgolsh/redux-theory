const initialState = {
    counter: 100,
  };
  
  export default function counter1(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return {
          counter: state.counter + 1,
        };
  
      case "SUB":
        return {
          counter: state.counter - 1,
        };
  
      case "NUM":
        return {
          counter: state.counter + action.payload,
        };
  
      default:
        return state;
    }
  
  
  }
  