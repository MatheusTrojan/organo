import Personagem from "../Personagem"
import "./CardsRaca.css"

const CardsRaca = ({ raca, personagens, aoDeletar }) => {
    return (
        personagens.length > 0 && <section className='cards-raca' style={{ backgroundImage: '', backgroundColor: raca.corPrimaria }}>
            <h3 style={{ borderColor: raca.corSecundaria }}>{raca.nome}</h3>
            <div className='cards-personagem'>
                {personagens.map((personagem, indice) => {
                    return <Personagem 
                        key={indice} 
                        personagem={personagem} 
                        corDeFundo={raca.corSecundaria} 
                        aoDeletar={aoDeletar} 
                    />
                })}
            </div>
        </section>

    )
}

export default CardsRaca