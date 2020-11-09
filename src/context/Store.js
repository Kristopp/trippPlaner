import React, { createContext, useReducer, useState, useEffect } from "react";
import isEmpty from '../server/validation/isEmpty'
import axios from "axios";

const initialState = {
  trippList: [],
  currentUser: { 
    isAuthenticated: false,
    user: {}
  },
  isfetching: false,
  hasError: false,
  error:""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER_ERROR": 
    return { 
      ...state,
      error: action.payload
    }
    case "SET_CURRENT_USER": 
    
    return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload

    }
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
  const [toggleRegModal, setRegModal] = useState(false)
  const [loadPage, setLoadPage] = useState(false);
  const [authentication, setAuthentication] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:5000/allTrips")
    .then((res) => dispatch({type: "FETCH_LIST_SUCCESS",payload: res.data }))
    .catch((error) => console.log(console.log(error)))
  }, [loadPage])

  return (
    <Context.Provider
      value={[
        state,
        dispatch,
        toggleTab,
        setToggleTab,
        toggleRegModal,
        setRegModal, 
        loadPage,
        setLoadPage,
        authentication,
        setAuthentication,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
