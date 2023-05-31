
import './App.css';
import Experiencia from './components/Experiencia/Experiencia';
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
    </div>
  );
}

export default App;
