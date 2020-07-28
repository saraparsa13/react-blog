// import React , { useContext } from 'react'
// import './header.css'
// import ToggleTheme from './ToggleTheme'
// import { ThemeContext, themes } from '../../context'

// import { fa , faMoonO } from '@fortawesome/free-solid-svg-icons'
// import themeContext from '../../context'





// const Header = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light py-4" style={ theme }>
//             <ToggleTheme/>
//         </nav>
//     )
// }

// export default Header


import React, { Component, useState, useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import { ThemeContext } from '../../context';
import SignOut from '../pages/SignOut';


const Header = () => {

    const { theme } = useContext(ThemeContext);
    // console.log(theme)
    // const [theme, setTheme] = useState(themes.light)


    // const toggleTheme = () => {
            // theme == themes.light ? setTheme(themes.dark) : setTheme(themes.light)
        //     // console.log(theme)

    // }



    return (
        <div className="navbar" style={theme}>
            <ToggleTheme />
             <SignOut />
        </div>
    )

}


export default Header;