import './partnerCards.scss';

function PartnerCard() {
  return (
    <section className="partner-card" aria-label="Parceiros em destaque">
      <div className="partner-card__list">
        <article className="partner-card__item">
          <div className="partner-card__content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="partner-card__button">
              CONFIRA
            </button>
          </div>
        </article>

        <article className="partner-card__item">
          <div className="partner-card__content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="partner-card__button">
              CONFIRA
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PartnerCard;