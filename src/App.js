import Eileen from './images/eileen.jpg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={Eileen} className="Eileen" alt="Eileen" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Eileen Finn</footer>
      </div>
    </div >
  );
}

export default App;
