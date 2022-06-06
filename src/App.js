import './App.css';
import HelloWordDio from './components/aula-54/HelloWordDIO';
import HelloWordDioClass from './components/aula-54/HelloWordDioClass';
import HelloWordDev from './components/aula-54/HelloWordDev';
import Calculater from './components/aula-54/Calculater';
import Function from './components/aula-54/Function';



function App() {
  return (
    <div className="App">
      <h1>
        Treinando ReactJs
      </h1>
      <p className="p">
        Components e Propriedades
      </p> 
      <HelloWordDio />
      <HelloWordDioClass />
      <HelloWordDev name='Genildo'/>
      <Calculater n1={5} n2={5} /> 
      <Function />
    </div>
  );
}

export default App;
