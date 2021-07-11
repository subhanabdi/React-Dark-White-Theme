import ThemeContext from './ThemeContext';
import { useState } from 'react';
const ThemeProvider = ({ children }) => {
	const colors = JSON.parse(localStorage.getItem('colors'));
	const init = {
		bg: 'white',
		color: 'black',
	};
	const [state, setState] = useState(colors ? colors : init);
	const changeTheme = (colors) => {
		localStorage.setItem('colors', colors);
		setState(JSON.parse(colors));
	};
	return (
		<ThemeContext.Provider value={{ state, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
export default ThemeProvider;
