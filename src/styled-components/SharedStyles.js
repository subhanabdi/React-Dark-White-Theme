import styled from 'styled-components';
export const Container = styled.div`
	max-width: 1200px;
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
`;
export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
	align-items: center;
`;
export const Col6 = styled.div`
	width: 50%;
	padding: 15px;
`;
export const Button = styled.a`
	text-decoration: none;
	outline: none;
	height: 45px;
	line-height: 45px;
	border: none;
	background: blueviolet;
	color: #fff;
	border-radius: 4px;
	display: inline-block;
	font-size: 14px;
	padding: 0 15px;
	text-transform: capitalize;
	font-weight: 500;
	cursor: pointer;
`;
export const Flex = styled.div`
	display: flex;
	align-items: center;
`;
