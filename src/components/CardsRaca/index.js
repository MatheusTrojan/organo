import Personagem from "../Personagem"
import "./CardsRaca.css"

const CardsRaca = (props) => {

    const css = { 
        backgroundColor: props.corSecundaria
    }

    return (
        //caso o length seja maior que 0, vai retornar a section toda com as infos, se não, não
        props.personagens.length > 0 && <section className="cards-raca" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="cards-personagem">
                {props.personagens.map( personagem => <Personagem 
                    key={personagem.nome}
                    nome={personagem.nome} 
                    historia={personagem.historia}
                    imagem={personagem.imagem}
                    />)}
            </div>
        </section>
    )
}

export default CardsRaca