import './App.css';
import NumberGenerator from './NumberGenerator';

function App() {
  return (
    <div className="App">
      <NumberGenerator />
      <NumberGenerator title={"Mini Number Generator"} maxBalls={3} maxNumber={18}/>
    </div>
  );
}

export default App;
