import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import products from './products';

import{BrowserRouter as Router , Routes, Route} from 'react-router-dom';
function App() {
  return (
    <form>
    <Header />
    <Router>
    <Routes>
      <Route path ="/" Component={Main} ></Route> 
      <Route path="/products"Component={products}></Route>
      </Routes>

    </Router>
  

    </form>
   
  
  );
}

export default App;
