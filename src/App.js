import './App.scss';
import Bra from './components/Bra/Bra';
import Carts from './components/Carts/Carts';
import Next_navbar from "./components/Next_navbar/Next_navbar"
function App() {

  return (
    <div className="App">
      <Carts />
      <Bra />
      <Next_navbar />
    </div>
  );
}

export default App;
