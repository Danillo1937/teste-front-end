import Logo from '../../assets/GeralAssets/Logo.png';
import './brands.scss';

function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 className="brands__title" id="brands-title">
        Navegue por marcas
      </h2>
      <ul className="brands__list">
        <li className="brands__item"><img src={Logo} alt="Econverse" /></li>
        <li className="brands__item"><img src={Logo} alt="Econverse" /></li>
        <li className="brands__item"><img src={Logo} alt="Econverse" /></li>
        <li className="brands__item"><img src={Logo} alt="Econverse" /></li>
        <li className="brands__item"><img src={Logo} alt="Econverse" /></li>
      </ul>
    </section>
  );
}

export default Brands;