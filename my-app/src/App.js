import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  const nome = "Vitor"

  return (
    <div className="App">
      <h1> Testando Css </h1>
      <Frase />
      <Frase />
      <SayMyName nome="João"/>
      <SayMyName nome = {nome} />
      <SayMyName nome="Camilo"/>

      <Pessoa nome = "Rodrigo" idade = "28" profissao = "Programador" foto = "https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
