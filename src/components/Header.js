import {
	HeaderContainer,
	Headingsm,
	Headingmd,
	Headinglg,
	HeaderLink,
	ImageContainer,
	Image,
	Theme,
} from '../styled-components/HeaderStyles';
import { useState } from 'react';
import {
	Container,
	Row,
	Col6,
	Button,
	Flex,
} from '../styled-components/SharedStyles';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
const Header = () => {
	const { state: contextState, changeTheme } = useContext(ThemeContext);
	const [state] = useState({
		sm: 'hello my name is',
		md: 'web developer & web designer',
		lg: 'Subhan Abidi',
	});
	const themeObject = JSON.stringify({
		bg: contextState.bg === 'black' ? 'white' : 'black',
		color: contextState.bg === 'black' ? 'black' : 'white',
	});
	return (
		<>
			<HeaderContainer bg={contextState.bg} color={contextState.color}>
				<Container>
					<Row>
						<Col6>
							<Headingsm>{state.sm}</Headingsm>
							<Headinglg>{state.lg}</Headinglg>
							<Headingmd>{state.md}</Headingmd>
							<HeaderLink>
								<Button>download cv</Button>
							</HeaderLink>
						</Col6>
						<Col6>
							<Flex>
								<ImageContainer height='300' mr='20'>
									<Image src='/images/image1.jpg' alt='image one' />
								</ImageContainer>
								<ImageContainer height='500'>
									<Image src='/images/image2.jpg' alt='image one' />
								</ImageContainer>
							</Flex>
						</Col6>
					</Row>
				</Container>
			</HeaderContainer>
			<Theme
				onClick={() => changeTheme(themeObject)}
				bg={contextState.bg === 'white' ? 'black' : 'white'}
			/>
		</>
	);
};
export default Header;
