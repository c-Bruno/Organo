import './Rodape.css'

const Rodape = (props) => {
    return (
        <footer className='rodape'>
            <div className="container">
                <div className="column">
                    <img className="imagem-rede" src='/imagens/fb.png' alt='Facebook'></img>
                    <img className="imagem-rede" src='/imagens/tw.png' alt='Twitter'></img>
                    <img className="imagem-rede" src='/imagens/ig.png' alt='Instagram'></img>
                </div>

                <div className="column">
                    <img  className='imagem-organo' src='/imagens/logo.png' alt='Organo'></img>
                </div>

                <div className="column">
                    <h4>Desenvolvido por Bruno</h4>
                </div>
            </div>
        </footer>
    )
}

export default Rodape;