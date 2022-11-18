import "./Form.css"
import TextField from '../TextField';
import Dropdown from "../Dropdown";

const Form = () => {

    const classes = [
        "Humanos",
        "Hobbits",
        "Elfos",
        "Anões",
        "Magos",
        "Maiars",
        "Criaturas"
    ]

    return (
        <section className="section__form">
            <form>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField label="Nome do Personagem" placeholder="Digite o nome do personagem" />
                <TextField label="Breve História" placeholder="Digite uma breve história da personagem" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <Dropdown label="Classe" itens={classes}/>
            </form>
        </section>
    )
}

export default Form