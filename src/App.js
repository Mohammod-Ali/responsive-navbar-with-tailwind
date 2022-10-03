import './App.css';
import Navbar from './components/Navbar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import AssignmentsMarks from './components/Pricing/AssignmentsMarks/AssignmentsMarks';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Pricing></Pricing>
    <AssignmentsMarks></AssignmentsMarks>
    <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
