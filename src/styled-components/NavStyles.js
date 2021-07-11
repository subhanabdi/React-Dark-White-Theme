import styled from 'styled-components';
export const Navbar = styled.nav`
	width: 100%;
	height: 70px;
	background: ${(props) => props.bg};
	color: ${(props) => props.color};
	border-bottom: ${(props) =>
		props.bg === 'white' ? '1px solid #f3f4f6' : null};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	transition: all 0.5s linear;
`;
export const NavbarContainer = styled.div`
	max-width: 1200px;
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	height: 70px;
	justify-content: space-between;
`;
export const NavLogo = styled.a`
	color: ${(props) => props.color};
	text-decoration: none;
	font-size: 18px;
	font-weight: 500;
`;
export const NavUl = styled.ul`
	list-style: none;
	display: flex;
`;
export const NavLi = styled.li`
	display: inline-block;
	margin: 0 10px;
	&:last-child {
		margin-right: 0;
	}
`;
export const NavLink = styled.a`
	text-decoration: none;
	display: block;
	text-transform: capitalize;
	font-size: 14px;
	font-weight: 400;
`;
