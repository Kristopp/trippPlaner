import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//Get inital data from server
//http://localhost:5000/form

export const FormContext = createContext([]);

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://localhost:5000/form")
        .catch((err) => {
          console.log("Error:", err);
        });
      if (response && response.data) {
        setInitialData(response.data);
      }
    };
    getData();
  }, []);
  /*     useEffect(() => { 
}, []) */
  return (
    <FormContext.Provider
      value={{
        initialData,
        setInitialData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
