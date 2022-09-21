import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    return (
        // O JavaScript vai olhar para essa expressão e caso > 0 seja true, ele vai retornar o 
        // segundo parâmetro da condição. Se ele for falso, o React não vai fará nada.
        (props.colaboradores.length > 0) &&
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3  style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    ></Colaborador>
                )}
            </div>
        </section>
    )
}

export default Time;