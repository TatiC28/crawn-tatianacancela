import './App.css';
import NavBar from './components/NavBar';
import ProductsData from './components/shop/ProductsData.js';


function App() {


  return ( <div className = "App" >
    <header className = "App-header" >
    <NavBar/>
    <ProductsData/>
    </header> </div>
  );
}

export default App;