import { createContext,useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COLOR':
            return {
                ...state,
                color: action.payload
            }
        case 'TOGGLE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }
}

export function ThemeProvider({children}) {

    const [state, dispatch] = useReducer(themeReducer,{color: 'blue',mode: 'dark'})
    const toggleColor = (color) => {
        dispatch({type: 'TOGGLE_COLOR', payload: color})
    }
    const toggleMode = (mode) => {
        dispatch({type: 'TOGGLE_MODE', payload: mode})
    }
    

    return(
        <ThemeContext.Provider value={{...state,toggleColor,toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )

}