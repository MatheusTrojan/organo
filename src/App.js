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
			favorito: true,
			nome: 'Gandalf',
			historia: ' Gandalf é um Mago Istari, pertencente à raça dos Maiar, espírito angelical do mundo tolkienano, e costumava andar com Nienna com quem aprendeu a paciência e a compaixão (Silmarillion), mas diz-se que era conselheiro de Irmo Lórien.',
			imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/08/1299459.jpg',
			raca: racas[0].nome
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Saruman',
			historia: 'Saruman, também conhecido como Saruman o Branco, foi o primeiro da ordem dos Istar (feiticeiro), que veio para a Terra-Média como emissário dos Valar na Terceira Era. Ele também foi líder dos magos e do Conselho Branco que se opunha a Sauron.',
			imagem: 'http://pm1.narvii.com/6300/452e8e5f5171ebf848c7015016ead7b098c86c68_00.jpg',
			raca: racas[0].nome
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Legolas',
			historia: 'Legolas, também conhecido como Legolas Verdefolha, foi um Elfo Sindarin que fez parte da Sociedade do Anel na Terceira Era. Era o filho do Rei Élfico Thranduil de Trevamata, portanto Príncipe, mas também mensageiro e mestre-arqueiro.',
			imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/cinema-o-hobbit-a-desolacao-de-smaug-20131111-08-original.jpeg?quality=70&strip=info&w=928&w=636',
			raca: "Elfos"
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Frodo Baggins',
			historia: 'Foi um hobbit do Condado que herdou de seu tio Bilbo Bolseiro o Um Anel de Sauron e comprometeu-se à missão de destruí-lo na Montanha da Perdição.',
			imagem: 'https://i.pinimg.com/originals/18/27/a2/1827a2402b262701c55aa465d87b88ab.jpg',
			raca: "Hobbits"
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Gimli',
			historia: 'Era um anão do povo de Durin que se habilitou para acompanhar Frodo Bolseiro na Sociedade do Anel, que tinha por intuito destruir o Um Anel.',
			imagem: 'http://pm1.narvii.com/6411/df6264893a4d1d37821220e1e2bc09e4caf025fe_00.jpg',
			raca: racas[1].nome
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Samwise Gamgee',
			historia: 'Como uma punição por bisbilhotar a conversa de Gandalf com Frodo sobre o Um Anel, Sam foi nomeado companheiro de Frodo em sua empreitada até Valfenda.',
			imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSeCC6gbwWoPPWpABDUlLkOlf9MQeEpZObtNA1aDuHg&s',
			raca: "Hobbits"
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: 'Wargs',
			historia: 'Provido do inglês arcaico Wargs são, na mitologia de Tolkien, uma espécie de lobo violento, que habita a Terra Média. Geralmente acompanham os Orcs, a quem permitiram serem montados nas batalhas.',
			imagem: 'https://i.pinimg.com/originals/6e/5c/ac/6e5cacec61456af8b6bab2d55fc23123.jpg',
			raca: "Criaturas"
		},
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

	function resolverFavorito(id) {
		setPersonagens(personagens.map(personagem => {
			if(personagem.id === id) personagem.favorito = !personagem.favorito;
			return personagem
		}))
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
					aoFavoritar={resolverFavorito}
				/>
				)}
				</section>
			<Rodape />
		</div>
	);
}

export default App;