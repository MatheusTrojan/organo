import "./Form.css"
import TextField from '../TextField';
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = ({ aoPersonagemCadastrado, racas, cadastrarRaca }) => {

    const [nome, setNome] = useState("")
    const [historia, setHistoria] = useState("")
    const [imagem, setImagem] = useState("")
    const [raca, setRaca] = useState("")
    const [nomeRaca, setNomeRaca] = useState("")
    const [corRaca, setCorRaca] = useState("")

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
            <form onSubmit={submitForm}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField 
                    label="Nome do Personagem" 
                    placeholder="Digite o nome do personagem" 
                    required={true}
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <TextField 
                    label="Breve História" 
                    placeholder="Digite uma breve história da personagem" 
                    required={true}
                    valor={historia}
                    aoAlterado = {valor => setHistoria(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
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

            <form onSubmit={(event) => {
                event.preventDefault()
                cadastrarRaca({ nome: nomeRaca, cor: corRaca })
            }}>
                <h2>Preencha os dados para inserir uma nova raça</h2>
                <TextField 
                    label="Raça" 
                    placeholder="Digite o nome da raça" 
                    required
                    valor={nomeRaca}
                    aoAlterado = {valor => setNomeRaca(valor)}
                />
                <TextField 
                    label="Cor" 
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