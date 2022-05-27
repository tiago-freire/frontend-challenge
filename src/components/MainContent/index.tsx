import styled from "styled-components";
import { useEffect, useState } from "react";

import bannerTop from "../../assets/banner-top.jpg";
import ProductList from "./ProductList";
import NewsletterForm from "./NewsletterForm";

const ImageBanner = styled.img({
  width: "100%",
});

const MainContent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        alert(`Erro ao recuperar os produtos: ${error}`);
      });
  }, []);

  return (
    <main>
      <ImageBanner src={bannerTop} alt="Banner do Topo" />
      <h3>Mais Vendidos</h3>
      {products && <ProductList products={products} />}
      <NewsletterForm />
    </main>
  );
};

export default MainContent;
