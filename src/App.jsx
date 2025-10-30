import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from './components/Error'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection message='Bienvenido a MoodHaus' slogan='Tu casa, tu mood.' />
            <ItemListContainer />
          </>
        } />
        <Route path='/category/:type' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
