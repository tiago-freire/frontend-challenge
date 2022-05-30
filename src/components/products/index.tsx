import { useEffect, useState } from "react";
import { Container, SectionTitle } from "../common/LayoutStyledComponents";
import ProductList from "./ProductList";

const Main = () => {
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
    <Container>
      <main>
        <SectionTitle>Mais Vendidos</SectionTitle>
        {products && <ProductList products={products} />}
      </main>
    </Container>
  );
};

export default Main;
