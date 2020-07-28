import React, { Component, createContext, useState } from 'react';

export const themes = {
    dark: {
        color: '#26B191' ,
        background:  '#333',
        borderColor: 'white'
    },
    light: {
        color: 'black',
        background: 'lightgray',
    }
}
export const ThemeContext = React.createContext(themes.light)




const ContextProvider = (props) => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		theme == themes.light ? setTheme(themes.dark) : setTheme(themes.light)
    }
    
    const { children } = props;
    
	return (
		<ThemeContext.Provider value={{ theme , toggleTheme }}>
 			{children}
		</ThemeContext.Provider>
	)
}


// export const ThemeContext = createContext();

// const ContextProvider = (props) => {
// 	const [lightTheme, setLightTheme] = useState(true);

// 	const toggleTheme = () => {
// 		setLightTheme(!lightTheme);
// 	}
// 	const { children } = props;
// 	return (
// 		<ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
//  			{children}
// 		</ThemeContext.Provider>
// 	)
// }


export default ContextProvider;

