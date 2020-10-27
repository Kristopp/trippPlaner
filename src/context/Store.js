import React, { createContext, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  trippList: [],
  isfetching: false,
  hasError: false,
};

const deletFromMongoDbById = () =>{ 
  
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LIST_REQUEST":
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };
    case "FETCH_LIST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        trippList: action.payload,
      };
    case "FETCH_LIST_FAILURE":
      return {
        ...state,
        hasError: true,
        isFetching: false,
      };
    case "DELETE_TRIP":
      let filter = state.trippList.filter((item) => {
        return item._id !== action.payload;
      });
      return {
        ...state,
        trippList: filter,
      };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleTab, setToggleTab] = useState(false);
  const [newTrippUpload, setNewTrippUploaded] = useState(false);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_LIST_REQUEST",
    });
    fetch("http://localhost:5000/allTrips")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((resJson) => {
        dispatch({
          type: "FETCH_LIST_SUCCESS",
          payload: resJson,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "FETCH_LIST_FAILURE",
        });
      });
  }, [newTrippUpload]);
  return (
    <Context.Provider
      value={[
        state,
        dispatch,
        toggleTab,
        setToggleTab,
        newTrippUpload,
        setNewTrippUploaded,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
