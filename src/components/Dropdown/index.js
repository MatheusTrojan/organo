import "./Dropdown.css"

const Dropdown = ({ label, aoAlterado, valor, required = false, items }) => {

    // console.log(props.itens)

    return (
        <div className="dropdown-list">
            <label>{label}</label>
            <select onChange={event => aoAlterado(event.target.value)} value={valor} required={required}>
                <option value="">Selecione</option>
                {items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown