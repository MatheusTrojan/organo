import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul className='footer-redes'>
                    <li>
                        <a href="https://github.com/MatheusTrojan">
                            <img src="/images/github.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/matheus-trojan/">
                            <img src="/images/linkedin.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <p>
                    Desenvolvido por Matheus Trojan
                </p>
            </section>
        </footer>
    )
}

export default Rodape