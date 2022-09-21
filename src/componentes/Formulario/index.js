import './Formulario.css'
import { useState } from 'react'

import CampoTexto from '../CampoTexto'; // Aqui não é necessario repetir a palavra na hora de importar (Exemplo banner/banner) é só definir o nome do coponent como index
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {
    // Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função. 
    // O hook que vamos usar aqui é o useState. Sempre que encontrarem um o use, saibam que é um hook. O React já importa ele direto.
    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')

    const aoSalvar = (evento) => {
        // Por padrão o botão de um formulario faz o submite para a propria URL
        // Desta forma o comportamento default é fazer essa submissão.
        // preventDefault serve exatamente para previnir que isso aconteça, previnindo a ação padrão
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
        console.log('Form foi submetido => ', nome, cargo, imagem, time)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                ></CampoTexto>

                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo'valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                ></CampoTexto>

                <CampoTexto 
                    label='Imagem' 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                ></CampoTexto>

                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Times' 
                    itens={props.times} 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)}
                ></ListaSuspensa>
                
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;