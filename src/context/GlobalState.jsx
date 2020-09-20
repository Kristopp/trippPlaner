import React, { createContext, useReducer } from "react";
import AppReducer from '../reducers/AppReducer'

const initialState = { 
    trippFormObject: [ 
        {
            title: String,
            startDate: {
              type: Date,
            },
            Latitude: { 
              type: Number,
              min: -90,
              max: 90,
            },
            Longitude: { 
             type: Number,
              min: -180,
              max: 180,
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
          }
    ]
} 

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeTab(id) { 
        dispatch({
            type: "REMOVE_TAB",
            payload: id
        })
    }
    function addTab(title) { 
        dispatch({
            type: "ADD_TAB",
            payload: title
        })
    }
    return ( 
        <GlobalContext.Provider 
        value={{ 
            formValues: state.trippFormObject,
            addTab,
            removeTab,
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}