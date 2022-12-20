import Personagem from "../Personagem"
import "./CardsRaca.css"
import hexToRgba from "hex-to-rgba"

const CardsRaca = ({ raca, personagens, aoDeletar, mudarCor }) => {
    return (
        personagens.length > 0 && <section className='cards-raca' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(raca.cor, 0.5) }}>
            <input onChange={evento => mudarCor(evento.target.value, raca.nome)} value={raca.cor} type="color" className="input-cor" />
            <h3 style={{ borderColor: raca.cor }}>{raca.nome}</h3>
            <div className='cards-personagem'>
                {personagens.map((personagem, indice) => {
                    return <Personagem 
                        key={indice} 
                        personagem={personagem} 
                        corDeFundo={raca.cor} 
                        aoDeletar={aoDeletar} 
                    />
                })}
            </div>
        </section>

    )
}

export default CardsRaca