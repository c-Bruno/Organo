// Import dos componentes
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSecundaria: '#FAE9F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
  ]

  // Toda vez que criamos um state no React ele devolve uma variável para 
  // lermos e um variável para escrevermos
  const[colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) // Aqui eu crio um novo array, espalhando todos os colaboradores já existentes e adicionando mais um a eles
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} 
        times={times.map(time => time.nome)} // Aqui estamos transformando um objeto complexo em um objeto simples, pegando um objeto TIME em cada inteiração do map, e extraindo o seu nome
      ></Formulario>

      { times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        ></Time> // A key é utilizada para controlar renderização
      )}
    </div>
  );
}

export default App;
