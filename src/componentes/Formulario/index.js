import './Formulario.css'
import CampoTexto from '../CampoTexto'; // Aqui não é necessario repetir a palavra na hora de importar (Exemplo banner/banner) é só definir o nome do coponent como index
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Ux e Design',
        'Mobile'

    ]

    const aoSalvar = (evento) => {
        // Por padrão o botão de um formulario faz o submite para a propria URL
        // Desta forma o comportamento default é fazer essa submissão.
        // preventDefault serve exatamente para previnir que isso aconteça, previnindo a ação padrão
        evento.preventDefault();
        console.log('Form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome'></CampoTexto>
                <CampoTexto obrigatorio={true} label='Cargo'></CampoTexto>
                <CampoTexto label='Imagem'></CampoTexto>
                <ListaSuspensa obrigatorio={true} label='Times' itens={times}></ListaSuspensa>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;