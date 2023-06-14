
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart'


function App() {


  return (
    <>

  <BrowserRouter>
  <CarritoProvider>
  <NavBar/>
   <Routes>
    <Route path='/' element ={ <ItemListContainer/> }/>
    <Route path= '/categoria/:idCategoria'  element = { <ItemListContainer/>}/>
    <Route path='/item/:idItem' element = { <ItemDetailContainer/> }/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='*' element={<h2>Sitio en construcción</h2>}/>
   </Routes>
   </CarritoProvider>
   </BrowserRouter>
    </>
  );
}

export default App
