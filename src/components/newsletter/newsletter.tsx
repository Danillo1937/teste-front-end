import './newsletter.scss'

function Newsletter() 
    {
        return (
        <section className="newsletter">
            <div className="newsletter-text">
                <h1>Inscreva-se na nossa newsletter</h1>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <div className="newsletter-form">
                <div className="form-content">
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="email" placeholder="Digite seu e-mail" />
                    <button type="submit">INSCREVER</button>
                </div>
                <input type="checkbox" id="termos" /> 
                <label htmlFor="termos">Aceito os termos e condições</label>
            </div>
        </section>
        )
    }

export default Newsletter;