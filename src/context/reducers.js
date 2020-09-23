const consoleLog = () => { 
    console.log("hello")
}

export const firstReducer = (state, action) =>{ 
    switch(action.type) { 
        case "WORK":
        return consoleLog;
        default: 
        return state
    }
}