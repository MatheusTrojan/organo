import "./Campos.css"

const Campos = ({ type = "text", label, placeholder, valor, aoAlterado, required = false }) => {

    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className={`campos campos-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campos   