
import './App.css';
import Contacto from './components/Contacto/Contacto';
import Experiencia from './components/Experiencia/Experiencia';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projectos from './components/Projectos/Projectos';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header></Header>
      <Projectos></Projectos>
      <Experiencia/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
