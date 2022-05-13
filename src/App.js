import React from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import './font.css'

const name = 'Helmi Domínguez Vanha-aho';
const year = (new Date().getFullYear());

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Hi! My name is <span>{name}</span>,
				</p>
				<p>
					I'm a multicultural Product Designer currently based in Helsinki.
				</p>
				<p>
					From early conceptualizations to project implementation, I enjoy solving problems to fulfill user needs.
				</p>
			</header>
			<section className="App-section">
				<p>
					Do not hesitate to drop me a <a className="App-link" href="mailto:hello@helmi.im" target="_blank" rel="noopener noreferrer">message!</a>
				</p>
				<p><a className="App-link" href="https://linkedin.com/in/helmidv" target="_blank" rel="noopener noreferrer">More about me</a></p>
			</section>
			<footer className="App-footer">
				<p>© {name}, {year}</p>
			</footer>
		</div>
	);
}

export default App;
