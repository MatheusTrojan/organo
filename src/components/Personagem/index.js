import { CgCloseO } from "react-icons/cg"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import "./Personagem.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Personagem = ({ personagem, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(personagem.id);
    }

    function alerta(texto) {
        MySwal.fire(`${texto}`)
      }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
 
    return (<div className="personagem">
        <CgCloseO 
            size={25} 
            className="deletar" 
            onClick={() => {
                if(personagem.favorito) {
                    alerta("Não é possível deletar o personagem favoritado")
                } else {
                    aoDeletar(personagem.id)
            }}} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={personagem.imagem} alt={personagem.nome} />
        </div>
        <div className="rodape">
            <h4>{personagem.nome}</h4>
            <h5>{personagem.historia}</h5>
            <div className="btn-favoritar">
                {personagem.favorito 
                    ? <FaHeart {...propsFavorito} color="red"/> 
                    : <FaRegHeart {...propsFavorito} color="red"/>
                }
            </div>
        </div>
    </div>)
}

export default Personagem