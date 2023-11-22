import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>      
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer">
        This project was coded by <a href="https://myportfoliolauraloriga.netlify.app/"
        target="_blank" rel="noreferrer">Laura Loriga </a>  and is {""}
        <a href="https://github.com/Jolie92/dictionary-app"
        target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
      </footer>
    </div>
    </div>
  );
}

