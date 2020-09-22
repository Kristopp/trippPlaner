import React, { createContext, useReducer } from "react";

const initialState = {
  trippFormObject: [
    {
      title: String,
      startDate: {
        type: Date,
      },
      rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
      },
      category: String,
      details: String,
      whoPays: String,
      pictures: String,
      expense: Number,
    },
    {
      timestamps: true,
    },
  ],
};


const reducer = (state, action) => { 
  console.log(state)
  switch(action.type) { 
    case "HELLO": 
    return state
    default: 
    return { ...state }
  }
}
export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
