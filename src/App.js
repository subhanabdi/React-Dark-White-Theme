import Nav from './components/Nav';
import Header from './components/Header';
import ThemeProvider from './context/ThemeProvider';
function App() {
	return (
		<ThemeProvider>
			<Nav />
			<Header />
		</ThemeProvider>
	);
}

export default App;
