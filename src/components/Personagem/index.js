import { CgCloseO } from "react-icons/cg"
import "./Personagem.css"

const Personagem = ({ personagem, corDeFundo, aoDeletar }) => {
    return (<div className="personagem">
        <CgCloseO size={25} className="deletar" onClick={aoDeletar} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={personagem.imagem} alt={personagem.nome} />
        </div>
        <div className="rodape">
            <h4>{personagem.nome}</h4>
            <h5>{personagem.historia}</h5>
        </div>
    </div>)
}

export default Personagem