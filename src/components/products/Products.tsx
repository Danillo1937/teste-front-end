import { useState, useEffect } from "react";
import type { Product, ProductResponse } from "../../interfaces/Product";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
    .then((response) =>{
        return response.json()
    })
    .then((data: ProductResponse) => {
        console.log(data);
        setProducts(data.products);

    })
  }, []);

  return (
    <section className="products" aria-label="Produtos em destaque">
        {products.map((product, index) => (
            <div className="product-card" key={index}>  
                <h3>{product.productName}</h3>
            </div>
        ))}

    </section>
  )
}

export default Products