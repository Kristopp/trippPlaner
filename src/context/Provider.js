import React, { createContext, useEffect, useState, useContext } from "react";
import reducers from '../context/reducers'
import axios from "axios";

//Get inital data from server
//http://localhost:5000/form

export const FormContext = createContext([]);

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
    const [initialData, setInitialData] = useState();
 
    const getReminders = async () => {
        const response = await axios.get("http://localhost:5000/form").catch((err) => {
          console.log("Error:", err);
        });
        if (response && response.data) {
            console.log(response.data)
            setInitialData(response.data) 
        }
    }
    useEffect(() => { 
        getReminders()
    }, [])
  return (
    <FormContext.Provider
      value={{
        initialData,
        setInitialData,
        getReminders
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
