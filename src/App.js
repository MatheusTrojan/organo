import { useState } from 'react';
import Banner from './components/Banner';
import CardsRaca from './components/CardsRaca';
import Form from './components/Form';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

	const [racas, setRacas] = useState([
		{
			nome: "Ainur",
			cor: "#57C278",
		},
		{
			nome: "Anões",
			cor: "#82CFFA",
		},
		{
			nome: "Criaturas",
			cor: "#A6D157",
		},
		{
			nome: "Elfos",
			cor: "#E06B69",
		},
		{
			nome: "Hobbits",
			cor: "#FFBA05",
		},
		{
			nome: "Humanos",
			cor: "#FF8A29",
		},
	])

	const inicial = [
		{
		  nome: 'Gandalf',
		  historia: 'lorem ipsum',
		  imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/08/1299459.jpg',
		  raca: racas[0].nome
		}
	]

	const [personagens, setPersonagens] = useState(inicial)

	function deletarPersonagem() {
		console.log("deletando personagem")
	}

	function mudarCorDaRaca(cor, nome) {
		setRacas(racas.map(raca => {
			if(raca.nome === nome) {
				raca.cor = cor;
			}
			return raca;
		}))
	}

	return (
		<div>
		  <Banner />
		  <Form racas={racas.map(raca => raca.nome)} aoPersonagemCadastrado={personagem => setPersonagens([...personagens, personagem])} />
		  <section className="racas">
			<h1>Minha organização</h1>
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