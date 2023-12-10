import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import {CartProvider} from "react-use-cart"
import Cart from './components/Cart';

function App() {
  return (
    <div className='app'>
      <CartProvider>
      <Home/>
      <h2 className='text-center text-success m-2'>Savat 👇✔</h2>
      <Cart/>
      </CartProvider>
      
    </div>
  );
}

export default App;
