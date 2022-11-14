import "./Form.css"
import TextField from '../TextField';

const Form = () => {
    return (
        <section className="section__form">
            <form>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField label="Nome do Personagem" placeholder="Digite o nome do personagem" />
                <TextField label="Breve História" placeholder="Digite uma breve história da personagem" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form