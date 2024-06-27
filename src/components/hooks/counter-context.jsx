/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
// import { useState } from "react";

const CountContext = createContext();
const CountProvide = ({ children }) => {
  //dispatch({type:'plus', step:2})
  const [count, dispatch] = useReducer((count, action) => {
    // Call by in _____.jsx const [count, dispatch] = useReducer(reducer, 0);
    // if (action.type === "plus") {
    //   return count + 1;
    // }
    //   else if(action.type =='minus'){
    //     return count -1;
    //   } else {
    //     return count;
    //   }
    const { type, step } = action;
    switch (type) {
      case "plus":
        return count + step;
      case "minus":
        return count - step;
      default:
        return count;
    }
  }, 0);

  const plusCount = (step = 1) => dispatch({ type: "plus", step });
  const minusCount = (step = 1) => dispatch({ type: "minus", step });

  // const [count, setCount] = useState(0);
  // const plusCount = () => setCount((count) => count + 1);
  // const minusCount = () => setCount((count) => count - 1);

  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {/* //{x:count, y:count} */}
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => useContext(CountContext);

export { CountProvide, useCount };
