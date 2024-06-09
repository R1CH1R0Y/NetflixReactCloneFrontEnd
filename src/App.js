import logo from './logo.svg';
import './App.css';
import Vintage from './components/Vintage';
import Horror from './components/Horror';
import Action from './components/Action';
import Banner from './components/Banner';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <Vintage/>
    <Horror/>
    <Action/>     
    </div>
  );
}

export default App;
