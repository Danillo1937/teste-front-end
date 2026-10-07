import Logo from "../../assets/HeaderAssets/Logo.png";
import Lupa from "../../assets/HeaderAssets/lupa.png";
import Heart from "../../assets/HeaderAssets/heart.png";
import ShoppingCart from "../../assets/HeaderAssets/ShoppingCart.png";
import UserCircle from "../../assets/HeaderAssets/UserCircle.png";
import Vector from "../../assets/HeaderAssets/Vector.png";
import ShieldCheck from "../../assets/HeaderAssets/ShieldCheck.png";
import Truck from "../../assets/HeaderAssets/Truck.png";
import CreditCard from "../../assets/HeaderAssets/CreditCard.png";
import CrownSimple from "../../assets/HeaderAssets/CrownSimple.png";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  function Buscar() {
    console.log(searchTerm);
  }
  return (
    <header>
      <div className="headerInformations">
        <div className="buyInfo">
          <img src={ShieldCheck} alt="Ícone de segurança" />
          <p>
            Compra <span className="infoSpan">100% segura</span>
          </p>
        </div>
        <div className="buyInfo">
          <img src={Truck} alt="Ícone de frete" />
          <p>
            <span className="infoSpan">Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div className="buyInfo">
          <img src={CreditCard} alt="Ícone de cartão de crédito" />
          <p>
            <span className="infoSpan">Parcele</span> suas compras
          </p>
        </div>
      </div>
      <hr />
      <div className="headerContent">
        <div className="image">
          <img src={Logo} alt="Logo da Econverse" />
        </div>

        <div className="searchBar">
          <input
            type="text"
            placeholder="O que você está procurando?"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={Buscar}>
            <img src={Lupa} alt="Ícone de busca" />
          </button>
        </div>

        <div className="icons">
          <img src={Vector} alt="Ícone de menu" />
          <img src={Heart} alt="Ícone de favorito" />
          <img src={UserCircle} alt="Ícone de usuário" />
          <img src={ShoppingCart} alt="Ícone de carrinho de compras" />
        </div>
      </div>
      <hr />
      <div className="headerNavigation">
        <ul>
          <li><a href="#">TODAS CATEGORIAS</a></li>
          <li><a href="#">SUPERMERCADO</a></li>
          <li><a href="#">LIVROS</a></li>
          <li><a href="#">MODA</a></li>
          <li><a href="#">LANÇAMENTOS</a></li>
          <li><a href="#">OFERTAS DO DIA</a></li>
          <li><img src={CrownSimple} alt="Ícone de assinatura" /><a href="#">ASSINATURA</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
