// import React, { Component, useContext } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { ThemeContext } from '../../context'


// const button = {
//     width: '45px',
//     height: '25px',
//     borderRadius: '45%',
//     backgroundColor: 'grey',
//     border: 'darkgray solid 2px',
//     position: 'absolute'
// }

// const dot = {
//     width: '20px',
//     height: '20px',
//     borderRadius: '50%',
//     backgroundColor: "rgb(209, 206, 206)",
//     postition: 'relative',
//     border: 'grey solid 1px'
// }

// const ToggleTheme = () => {

//     const clickHandler = (e) => {

//         const classnames = document.querySelector('.trigger').classList

//         for (let i = 0; i < classnames.length; i++) {
//             if (classnames[i] == 'button-off') {
//                 classnames.remove('button-off');
//                 classnames.add('button-on');
//             }
//             else if (classnames[i] == 'button-on') {
//                 classnames.remove('button-on');
//                 classnames.add('button-off');
//             }
//         }

//     }

//     return (
//         <>
//             <FontAwesomeIcon icon={['fa', 'fa-moon-o']} />
//             <FontAwesomeIcon icon="fa fa-moon-o" />
//             <div onClick={() => clickHandler()} style={button}>
//                 <div className="trigger button-off"></div>
//             </div>
//         </>
//     )
// }

// export default ToggleTheme;


import React, { Component, useState, useContext } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { ThemeContext, themes } from '../../context';

const ToggleTheme = () => {
    
    const { toggleTheme } = useContext(ThemeContext)
    const [icon , setIcon] = useState(true)
    

	const iconChange = () => {
		let newIcon = !icon;
		setIcon(newIcon);
	}

	return (
		<div className="toggle__box">
			<span>
			{icon ? (
				<img src={moon} className="moon-icon" />
			) : (
				<img src={sun} className="sun-icon" />
			)}
			</span>
			<div className="toggle__btn" onClick={toggleTheme}>
				<input type="checkbox" className="checkbox" onChange={iconChange}  />
				<div className="circle"></div>
				<div className="layer"></div>
			</div>
 		</div>
	)
}

export default ToggleTheme;