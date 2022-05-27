import styled from "styled-components";
import starFilled from "../../assets/star-filled.svg";
import starEmpty from "../../assets/star-empty.svg";

const MAX_STARS = 5;
const CURRENCY = "BRL";

const showCurrencyValue = (value: number) => {
  return (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: CURRENCY,
  });
};

const BaseProductCard = (props: { product: Product; className?: string }) => {
  const { imageUrl, productName, listPrice, price, stars, productId } = props.product;

  const starsFilled = Array(stars)
    .fill(0)
    .map((_, index) => <img key={`${productId}-filled-${index}`} src={starFilled} alt="Estrela Preenchida" />);

  const starsEmpty = Array(MAX_STARS - stars)
    .fill(0)
    .map((_, index) => <img key={`${productId}-empty-${index}`} src={starEmpty} alt="Estrela Vazia" />);

  return (
    <div className={props.className}>
      <img src={imageUrl} alt={productName} />
      <span>{productName}</span>
      <span>
        {listPrice ? `de ${showCurrencyValue(listPrice)} por ` : ""}
        {showCurrencyValue(price)}
      </span>
      <span>{[starsFilled, starsEmpty]}</span>
    </div>
  );
};

const ProductCard = styled(BaseProductCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 216px;
`;

const BaseProductList = (props: { products: Product[]; className?: string }) => {
  return (
    <div className={props.className}>
      {props.products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
};

const ProductList = styled(BaseProductList)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export default ProductList;
