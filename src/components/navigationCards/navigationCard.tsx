import Whiskey from "../../assets/NavigationCardsAssets/whiskey.png";
import Supermercados from "../../assets/NavigationCardsAssets/supermercados.png";
import Moda from "../../assets/NavigationCardsAssets/moda.png";
import Tecnologia from "../../assets/NavigationCardsAssets/image.png";
import Ferramentas from "../../assets/NavigationCardsAssets/ferramentas.png";
import CuidadosDeSaude from "../../assets/NavigationCardsAssets/cuidados-de-saude.png";
import Corrida from "../../assets/NavigationCardsAssets/corrida.png";
import "./navigationCard.scss";

const categories = [
  { name: "Tecnologia", image: Tecnologia, active: true },
  { name: "Supermercado", image: Supermercados },
  { name: "Bebidas", image: Whiskey },
  { name: "Ferramentas", image: Ferramentas },
  { name: "Saúde", image: CuidadosDeSaude },
  { name: "Esportes e Fitness", image: Corrida },
  { name: "Moda", image: Moda },
];

function NavigationCard() {
  return (
    <section className="navigation-card" aria-label="Categorias em destaque">
      <ul className="navigation-card__list">
        {categories.map(({ name, image, active }) => (
          <li
            className={`navigation-card__item${active ? " navigation-card__item--active" : ""}`}
            key={name}
          >
            <div className="navigation-card__image">
              <img src={image} alt="" />
            </div>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavigationCard;
