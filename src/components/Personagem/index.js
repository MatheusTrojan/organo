import "./Personagem.css"

// ao invés de PROPS, podemos desestruturar e passar "mastigado" o que eu quero passar como parametro, sem a necessidade de colocar "props." na frente de cada elemento
const Personagem = ({ nome, historia, imagem }) => {
    return (
        <div className="personagem">
            <div className="cabecalho">
                <img src={imagem} alt={nome}/>
            </div>

            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{historia}</h5>
            </div>
        </div>
    )
}

export default Personagem