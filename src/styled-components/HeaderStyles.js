import styled from 'styled-components';
export const HeaderContainer = styled.header`
	width: 100%;
	height: 100vh;
	color: ${(props) => props.color};
	background: ${(props) => props.bg};
	display: flex;
	align-items: center;
	transition: all 0.5s linear;
`;
export const Headingsm = styled.h5`
	font-size: 16px;
	font-weight: 400;
	text-transform: capitalize;
`;
export const Headingmd = styled.h3`
	font-size: 20px;
	font-weight: 500;
	margin-top: 30px;
	text-transform: capitalize;
`;
export const Headinglg = styled.h1`
	font-size: 60px;
	font-weight: 700;
	margin-top: 30px;
	text-transform: capitalize;
`;
export const HeaderLink = styled.div`
	margin-top: 20px;
`;
export const ImageContainer = styled.div`
	width: 100%;
	height: ${(props) => props.height}px;
	overflow: hidden;
	margin-right: ${(props) => props.mr}px;
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const Theme = styled.div`
	width: 20px;
	height: 20px;
	background: ${(props) => props.bg};
	border-radius: 50%;
	position: fixed;
	top: 90px;
	right: 20px;
	cursor: pointer;
`;
