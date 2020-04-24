const initialState = {
    counter: 200,
  };
  
  export default function counter2(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return {
          counter: state.counter + 1,
        };
  
      case "SUB":
        return {
          counter: state.counter - 1,
        };
  
      case "NUM2":
        return {
          counter: state.counter + action.payload,
        };
  
      default:
        return state;
    }
  
  
  }
  