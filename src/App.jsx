import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer message='Bienvenido a MoodHaus' slogan ='Tu casa, tu mood.'/>      
    </>
  )
};

export default App;
