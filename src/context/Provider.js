import React, { useReducer } from "react";
import MainContext from "./mainContext";
import { firstReducer } from "./reducers";

const FormProvider = (props) => {
  const [state, dispatch] = useReducer(firstReducer, MainContext);
  console.log(state)
  const getLog = () => { 
      dispatch({
          type: "WORK"
      });
  }

  return <MainContext.Provider value={{
      MainContext,
      getLog
  }}>{props.children}</MainContext.Provider>;
};

export default FormProvider;
