import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
function App() {


  return ( <div className = "App" >
    <header className = "App-header" >
    <NavBar/>
    <ItemList />
    </header> </div>
  );
}

export default App;