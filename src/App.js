import { useState } from 'react';
import Banner from './components/Banner';
import CardsRaca from './components/CardsRaca';
import Form from './components/Form';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

	const [racas, setRacas] = useState([
		{
			id: uuidv4(),
			nome: "Ainur",
			cor: "#57C278",
		},
		{
			id: uuidv4(),
			nome: "Anões",
			cor: "#82CFFA",
		},
		{
			id: uuidv4(),
			nome: "Criaturas",
			cor: "#A6D157",
		},
		{
			id: uuidv4(),
			nome: "Elfos",
			cor: "#E06B69",
		},
		{
			id: uuidv4(),
			nome: "Hobbits",
			cor: "#FFBA05",
		},
		{
			id: uuidv4(),
			nome: "Humanos",
			cor: "#FF8A29",
		},
	])

	const inicial = [
		{
			id: uuidv4(),
			nome: 'Gandalf',
			historia: 'lorem ipsum',
			imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/08/1299459.jpg',
			raca: racas[0].nome
		},
		{
			id: uuidv4(),
			nome: 'Saruman',
			historia: 'lorem ipsum',
			imagem: 'http://pm1.narvii.com/6300/452e8e5f5171ebf848c7015016ead7b098c86c68_00.jpg',
			raca: racas[0].nome
		}
	]

	const [personagens, setPersonagens] = useState(inicial)

	function deletarPersonagem(id) {
		setPersonagens(personagens.filter(personagem => personagem.id !== id))
		console.log(personagens)
	}

	function mudarCorDaRaca(cor, id) {
		setRacas(racas.map(raca => {
			if(raca.id === id) {
				raca.cor = cor;
			}
			return raca;
		}))
	}

	function cadastrarRaca(novaRaca) {
		setRacas([...racas, { ...novaRaca, id: uuidv4() } ])
	}

	return (
		<div>
			<Banner />
			<Form 
				cadastrarRaca={cadastrarRaca}
				racas={racas.map(raca => raca.nome)} 
				aoPersonagemCadastrado={personagem => setPersonagens([...personagens, personagem])} 
			/>
			<section>
			<h1 className='cards-titulo'>Raças e Personagens</h1>
			{racas.map((raca, indice) => 
				<CardsRaca 
					key={indice} 
					raca={raca} 
					personagens={personagens.filter(personagem => personagem.raca === raca.nome)} 
					aoDeletar={deletarPersonagem} 
					mudarCor={mudarCorDaRaca}
				/>
				)}
				</section>
			<Rodape />
		</div>
	);
}

export default App;