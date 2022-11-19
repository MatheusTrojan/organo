import Personagem from "../Personagem"
import "./CardsRaca.css"

const CardsRaca = (props) => {

    const css = { 
        backgroundColor: props.corSecundaria
    }

    return (
        <section className="cards-raca" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Personagem />
            <Personagem />
        </section>
    )
}

export default CardsRaca