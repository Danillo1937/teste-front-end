import Logo from '../../assets/GeralAssets/Logo.png'
import Facebook from '../../assets/FooterAssets/facebook.png'
import Instagram from '../../assets/FooterAssets/instagram.png'
import Linkedin from '../../assets/FooterAssets/linkedin.png'
import './footer.scss'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__brand">
                    <img className="footer__logo" src={Logo} alt="Econverse" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="footer__social">
                        <a href="#" aria-label="Instagram">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img src={Facebook} alt="" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src={Linkedin} alt="" />
                        </a>
                    </div>
                </div>
                <nav className="footer__links" aria-label="Links do rodapé">
                    <div className="footer__column">
                        <h2>Institucional</h2>
                        <a href="#">Sobre Nós</a>
                        <a href="#">Movimento</a>
                        <a href="#">Trabalhe conosco</a>
                    </div>
                    <div className="footer__column">
                        <h2>Ajuda</h2>
                        <a href="#">Suporte</a>
                        <a href="#">Fale Conosco</a>
                        <a href="#">Perguntas Frequentes</a>
                    </div>
                    <div className="footer__column">
                        <h2>Termos</h2>
                        <a href="#">Termos e Condições</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Troca e Devolução</a>
                    </div>
                </nav>
            </div>
            <div className="footer__copyright">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>

    )
}

export default Footer