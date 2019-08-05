import React from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import './font.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi! My name is <span>Helmi Domínguez.</span>
        </p>
        <p>
          I'm a multicultural UI-UX designer currently based in Helsinki.
        </p>
        <p>
          From early conceptualizations to project implementation, I enjoy solving problems to fulfill user needs.
        </p>
      </header>
      <section className="App-section">
        <p>
          Do not hesitate to drop me a <a className="App-link" href="mailto:hello@helmi.im" target="_blank" rel="noopener noreferrer">message!</a>
        </p>
        <p>More about me</p>
      </section>
      <footer className="App-footer">
        <p>© Helmi Domínguez, 2019</p>
      </footer>
    </div>
  );
}

export default App;
