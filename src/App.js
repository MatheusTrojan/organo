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
				/>
			)}
		  </section>
		  <Rodape />
		</div>
	  );
}

export default App;