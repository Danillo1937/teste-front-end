import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Esquerda from "../../assets/ProductAssets/esquerda.png";
import Direita from "../../assets/ProductAssets/direita.png";
import type { Product, ProductResponse } from "../../interfaces/Product";
import "./Products.scss";

function Products({ info }: { info: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const productGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/Products.json")
    .then((response) =>{
        return response.json()
    })
    .then((data: ProductResponse) => {
        console.log(data);
        setProducts(data.products);
    })
  }, []);

  useEffect(() => {
    const grid = productGridRef.current;
    if (!grid) return;

    const updateScrollButtons = () => {
      setCanScrollLeft(grid.scrollLeft > 0);
      setCanScrollRight(grid.scrollLeft + grid.clientWidth < grid.scrollWidth - 1);
    };

    updateScrollButtons();
    grid.addEventListener("scroll", updateScrollButtons, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(grid);

    return () => {
      grid.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [products]);

  useEffect(() => {
    if (!selectedProduct) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  function openProductModal(product: Product) {
    setSelectedProduct(product);
    setQuantity(1);
  }

  function scrollProducts(direction: -1 | 1) {
    const grid = productGridRef.current;
    if (!grid) return;

    const firstCard = grid.querySelector<HTMLElement>(".product-card");
    if (!firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(grid).gap) || 0;
    grid.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <>
    <section className="products" aria-label="Produtos em destaque">
        <h1 className="product-title">Produtos Relacionados</h1>
        {info === 1 ? (
          <div className="navigationBar">
            <button className="buttonNavigationProducts">CELULAR</button>
            <button className="buttonNavigationProducts">ACESSÓRIOS</button>
            <button className="buttonNavigationProducts">TABLETS</button>
            <button className="buttonNavigationProducts">NOTEBOOKS</button>
            <button className="buttonNavigationProducts">TVS</button>
            <button className="buttonNavigationProducts">VER TODOS</button>
          </div>
        ) : (
          <a href="#" className="span-ver-todos">
            Ver Todos
          </a>
        )}
        <div className="product-carousel">
          <button
            className="carousel-arrow carousel-arrow-left"
            type="button"
            aria-label="Ver produtos anteriores"
            disabled={!canScrollLeft}
            onClick={() => scrollProducts(-1)}
          >
            <img src={Esquerda} alt="" />
          </button>
          <div className="product-grid" ref={productGridRef}>
            {products.map((product) => (
              <article className="product-card" key={product.productName}>
                <img src={product.photo} alt={product.productName} />
                <p>{product.descriptionShort}</p>
                <span className="product-real-price">
                    {(product.price * 1.1).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>
                <span>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span className="product-descont">
                    Ou 2x de {(product.price / 2).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })} sem juros
                </span>
                <span className="product-frete">Frete Grátis</span>
                <button
                  className="buttonNavigationProducts"
                  type="button"
                  onClick={() => openProductModal(product)}
                >
                  COMPRAR
                </button>
              </article>
              
            ))}
          </div>
          <button
            className="carousel-arrow carousel-arrow-right"
            type="button"
            aria-label="Ver próximos produtos"
            disabled={!canScrollRight}
            onClick={() => scrollProducts(1)}
          >
            <img src={Direita} alt="" />
          </button>
        </div>
    </section>
    {selectedProduct && createPortal(
      <div
        className="product-modal-backdrop"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setSelectedProduct(null);
          }
        }}
      >
        <section
          className="product-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <button
            className="product-modal__close"
            type="button"
            aria-label="Fechar janela"
            onClick={() => setSelectedProduct(null)}
          >
            &times;
          </button>
          <img
            className="product-modal__image"
            src={selectedProduct.photo}
            alt={selectedProduct.productName}
          />
          <div className="product-modal__content">
            <h2 id="product-modal-title">{selectedProduct.productName}</h2>
            <p className="product-modal__price">
              {selectedProduct.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="product-modal__description">
              {selectedProduct.descriptionShort}
            </p>
            <a className="product-modal__details" href="#produtos">
              Veja mais detalhes do produto &gt;
            </a>
            <div className="product-modal__actions">
              <div className="product-modal__quantity" aria-label="Quantidade">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                >
                  &minus;
                </button>
                <span aria-live="polite">{quantity.toString().padStart(2, "0")}</span>
                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity((current) => current + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="product-modal__buy"
                type="button"
                onClick={() => setSelectedProduct(null)}
              >
                COMPRAR
              </button>
            </div>
          </div>
        </section>
      </div>,
      document.body,
    )}
    </>
  )
}

export default Products