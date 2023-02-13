import Eileen from './images/eileen.jpg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Eileen Finn <img src={Eileen} className="Eileen" alt="Eileen" /></footer>
      </div>
    </div >
  );
}

export default App;