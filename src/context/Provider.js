import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

//Get inital data from server
//http://localhost:5000/form
const initialState = []

export const FormContext = createContext(initialState);
// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("http://localhost:5000/allTrips").then((response) => {
      dispatch({ type: "GET_USERFORMS", payload: response.data });
      console.log(response.data);
    });
  }, []);
  console.log(state)

  /* const [initialData, setInitialData] = useState([]); */
  /*   useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://localhost:5000/allTrips")
        .catch((err) => {
          console.log("Error:", err);
        });
      if (response && response.data) {
        setInitialData(response.data);
      }
    };
    getData();
  }, []); */
  //delete
  const handleDeleteForm = async (id) => {
    try {
      const res = await axios.delete("url", id);
      if (res.data.success) {
        alert(res.data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };
  /*     useEffect(() => { 
}, []) */
  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
