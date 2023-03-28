import './App.css';
import Welcome from './Component/welcome';
import Hero from './Component/heros';

function App() {
  return (
    <div className="App">
     <Welcome />
    <Hero name="rishab" surname="Rana"/>
    <Hero name="Rishi"/>
    <Hero name="rishu"/>
    </div>
  );
}

export default App;
