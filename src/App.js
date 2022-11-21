import { useState } from 'react';
import Banner from './components/Banner';
import CardsRaca from './components/CardsRaca';
import Form from './components/Form';
import Rodape from './components/Rodape';


function App() {

	const racas = [
		{
			nome: "Ainur",
			corPrimaria: "#57C278",
			corSecundaria: "#D9F7E9"
		},
		{
			nome: "Anões",
			corPrimaria: "#82CFFA",
			corSecundaria: "#E8F8FF"
		},
		{
			nome: "Criaturas",
			corPrimaria: "#A6D157",
			corSecundaria: "#F0F8E2"
		},
		{
			nome: "Elfos",
			corPrimaria: "#E06B69",
			corSecundaria: "#FDE7E8"
		},
		{
			nome: "Hobbits",
			corPrimaria: "#FFBA05",
			corSecundaria: "#FFF5D9"
		},
		{
			nome: "Humanos",
			corPrimaria: "#FF8A29",
			corSecundaria: "#FFEEDF"
		},
	]

	const [personagens, setPersonagens] = useState([])

	const personagemAdicionado = (personagem) => {
		// console.log(personagem)
		setPersonagens([...personagens, personagem])
	}

	return (
		<div className="App">
			<Banner />
			<Form racas={racas.map(raca => raca.nome)} aoPersonagemCadastrado={personagem => personagemAdicionado(personagem)} />

			{racas.map(raca => <CardsRaca
				key={raca.nome} 
				nome={raca.nome} 
				corPrimaria={raca.corPrimaria} 
				corSecundaria={raca.corSecundaria} 
				personagens={personagens.filter(personagem => personagem.raca === raca.nome)}
			/>)}
			<Rodape />

		</div>
	);
}

export default App;