import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

const API_URL = "http://localhost:5000/form"

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
    const [ iniTialData, setInitialData] = useState()
/*   const [name, setName] = useState("William");
  const [location, setLocation] = useState("Mars"); */
  useEffect(() => { 
    axios.get(`http://localhost:5000/form`)
    .then(res => {
      const mainData = res.data;
      setInitialData(mainData)
    })
  }, [])
  return (
    <UserContext.Provider
      value={{
        iniTialData,
        setInitialData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
