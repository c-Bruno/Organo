import './CampoTexto.css'

// Na pratica, essa declaração de constante é a mesma coisa que criar um function
// Isso se trata de um code style que usa arrow functions
const CampoTexto = (props) => {
    // React nos entrega implicitamente um parâmetro chamado props, que são as propriedades que esse componente recebeu. 

    const placeholderModificada = `Digite seu ${props.label}`
    return (
        <div className='campo-texto'>
            <label>{ props.label }</label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto;