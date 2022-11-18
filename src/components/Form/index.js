import "./Form.css"
import TextField from '../TextField';
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = () => {

    const raças = [
        "Humanos",
        "Hobbits",
        "Elfos",
        "Anões",
        "Ainur",
        "Criaturas"
    ]

    const submitForm = (event) => {
        event.preventDefault()
        console.log("form foi submetido")
    }

    return (
        <section className="section__form">
            <form onSubmit={submitForm}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField label="Nome do Personagem" placeholder="Digite o nome do personagem" required={true}/>
                <TextField label="Breve História" placeholder="Digite uma breve história da personagem" required={true}/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" required={true}/>
                <Dropdown label="Raça" itens={raças}/>
                <Button> Criar Card </Button>
            </form>
        </section>
    )
}

export default Form