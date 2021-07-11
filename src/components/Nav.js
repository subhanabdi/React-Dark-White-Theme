import {
	Navbar,
	NavbarContainer,
	NavLogo,
	NavUl,
	NavLi,
	NavLink,
} from '../styled-components/NavStyles';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
const Nav = () => {
	const { state } = useContext(ThemeContext);
	return (
		<Navbar bg={state.bg} color={state.color}>
			<NavbarContainer>
				<NavLogo color={state.color}>Theme Website</NavLogo>
				<NavUl>
					<NavLi>
						<NavLink>register</NavLink>
					</NavLi>
					<NavLi>
						<NavLink>login</NavLink>
					</NavLi>
					<NavLi>
						<NavLink>contact</NavLink>
					</NavLi>
					<NavLi>
						<NavLink>about</NavLink>
					</NavLi>
				</NavUl>
			</NavbarContainer>
		</Navbar>
	);
};
export default Nav;
