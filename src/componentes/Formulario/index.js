import './Formulario.css'
import CampoTexto from '../CampoTexto'; // Aqui não é necessario repetir a palavra na hora de importar (Exemplo banner/banner) é só definir o nome do coponent como index

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label='Nome'></CampoTexto>
                <CampoTexto CampoTexto label='Cargo'></CampoTexto>
                <CampoTexto label='Imagem'></CampoTexto>
            </form>
        </section>
    )
}

export default Formulario;