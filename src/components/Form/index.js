import "./Form.css"
import Campos from '../Campos';
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = ({ aoPersonagemCadastrado, racas, cadastrarRaca }) => {

    const [nome, setNome] = useState("")
    const [historia, setHistoria] = useState("")
    const [imagem, setImagem] = useState("")
    const [raca, setRaca] = useState("")
    const [nomeRaca, setNomeRaca] = useState("")
    const [corRaca, setCorRaca] = useState("#000000")

    const submitForm = (event) => {
        event.preventDefault()
        // console.log("form foi submetido => ", nome, historia, imagem, raca)

        aoPersonagemCadastrado({
            nome: nome,
            historia: historia,
            imagem: imagem,
            raca: raca
        })
        setNome("")
        setHistoria("")
        setImagem("")
        setRaca("")
    }

    return (
        <section className="section__form">
            <form className="formulario" onSubmit={submitForm}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <Campos 
                    label="Nome do Personagem" 
                    placeholder="Digite o nome do personagem" 
                    required={true}
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <Campos 
                    label="Breve História" 
                    placeholder="Conte uma breve história da personagem" 
                    required={true}
                    valor={historia}
                    aoAlterado = {valor => setHistoria(valor)}
                />
                <Campos 
                    label="Imagem" 
                    placeholder="Insira o endereço da imagem ( jpg )" 
                    required={true}
                    valor={imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <Dropdown 
                    label="Raça" 
                    items={racas}
                    required={true}
                    valor={raca}
                    aoAlterado={valor => setRaca(valor)}
                />
                <Button> 
                    Criar Card 
                </Button>
            </form>

            <form className="formulario" onSubmit={(event) => {
                event.preventDefault()
                cadastrarRaca({ 
                    nome: nomeRaca, 
                    cor: corRaca })
                setNomeRaca("")
                setCorRaca("#000000")
            }}>
                <h2>Ou preencha esse formulário para inserir uma nova raça:</h2>
                <Campos 
                    label="Nome da Raça" 
                    placeholder="Digite o nome da raça" 
                    required
                    valor={nomeRaca}
                    aoAlterado = {valor => setNomeRaca(valor)}
                />
                <Campos 
                    type="color"
                    label="Escolha uma cor!" 
                    placeholder="Digite a cor do time" 
                    required
                    valor={corRaca}
                    aoAlterado = {valor => setCorRaca(valor)}
                />
                <Button> 
                    Criar Raça
                </Button>
            </form>
        </section>
    )
}

export default Form