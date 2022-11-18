import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';


function App() {

  const [personagens, setPersonagens] = useState([])

  const personagemAdicionado = (personagem) => {
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoPersonagemCadastrado={personagem => personagemAdicionado(personagem)}/>
    </div>
  );
}

export default App;