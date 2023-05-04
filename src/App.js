import Header from './components/header/Header';
import Home from './components/routes/home/Home';
import SignIn from './components/routes/auth/SignIn';
import Register from './components/routes/auth/Register'
import { Routes, Route } from 'react-router-dom';
import Products from './components/routes/products/Products'
import Search from './components/search/Search';
import Product from './components/routes/product/Product';
import Cart from './components/routes/cart/Cart';

function App() {
  return (
    <>
      <Header/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register/signin' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/result' element></Route>
      </Routes>
    </>
  );
}

export default App;
