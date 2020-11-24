import './App.css';
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Footer from './components/Footer/Footer';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Mastermind
      </header>
      <main className="main">
      <GameBoard /><div>
      <ColorPicker />
      <GameTimer />
      <NewGameButton /></div></main>
      <Footer />
    </div>
  );
}

export default App; 
