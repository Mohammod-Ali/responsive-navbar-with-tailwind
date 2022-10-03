import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Pricing></Pricing>
    </div>
  );
}

export default App;
