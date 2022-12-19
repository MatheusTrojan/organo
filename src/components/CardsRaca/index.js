import Personagem from "../Personagem"
import "./CardsRaca.css"

const CardsRaca = (props, aoDeletar) => {

    const css = { 
        backgroundColor: props.corSecundaria
    }

    return (
        props.personagens.length > 0 && <section className="cards-raca" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="cards-personagem">
                {props.personagens.map( personagem => {
                    console.log(<Personagem 
                        key={personagem.nome}
                        nome={personagem.nome} 
                        historia={personagem.historia}
                        imagem={personagem.imagem}
                        corDeFundo={props.corPrimaria}
                        aoDeletar= {aoDeletar}
                    />)
                    return <Personagem 
                        key={personagem.nome}
                        nome={personagem.nome} 
                        historia={personagem.historia}
                        imagem={personagem.imagem}
                        corDeFundo={props.corPrimaria}
                        aoDeletar= {props.aoDeletar}
                    />})}
            </div>
        </section>
    )
}

export default CardsRaca