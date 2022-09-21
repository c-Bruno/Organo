import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='Lista-suspensa'>
            <label>{ props.label }</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {/* Quando trabalhamos com Array, podemos usar o map */}
                {props.itens.map((item, index) => {
                    return <option  key={item}>{ item }</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;