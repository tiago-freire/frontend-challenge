import styled from "styled-components";
import starFilled from "../../assets/star-filled.svg";
import starEmpty from "../../assets/star-empty.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const MAX_STARS = 5;
const CURRENCY = "BRL";

const showCurrencyValue = (value: number) => {
  return (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: CURRENCY,
  });
};

const BaseProductCard = (props: { product: Product; className?: string }) => {
  const { imageUrl, productName, listPrice, price, stars, productId, installments } = props.product;
  const { cart, setCart } = useContext(CartContext);

  const handleBuyButtonClick = () => {
    const newCart: Cart = {
      ...cart,
      items: [...cart.items, { ...props.product }],
      totalItems: cart.totalItems + 1,
      total: cart.total + price,
    };
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const starsFilled = Array(stars)
    .fill(0)
    .map((_, index) => <img key={`${productId}-filled-${index}`} src={starFilled} alt="Estrela Preenchida" />);

  const starsEmpty = Array(MAX_STARS - stars)
    .fill(0)
    .map((_, index) => <img key={`${productId}-empty-${index}`} src={starEmpty} alt="Estrela Vazia" />);

  return (
    <div className={props.className}>
      <img src={imageUrl} alt={productName} />
      <h4>{productName}</h4>
      <div>{[starsFilled, starsEmpty]}</div>
      <div className="listPrice">{listPrice ? `de ${showCurrencyValue(listPrice)}` : ""}</div>
      <div className="price">{price ? `por ${showCurrencyValue(price)}` : ""}</div>
      <div className="installments">
        {installments.length ? "ou em " + installments.map((i) => `${i.quantity}x de ${showCurrencyValue(i.value)}`).join(", ") : ""}
      </div>
      <button onClick={handleBuyButtonClick}>COMPRAR</button>
    </div>
  );
};

const ProductCard = styled(BaseProductCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 216px;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  :hover {
    background-color: var(--gray);
    button {
      visibility: visible;
    }
  }

  h4 {
    margin: 1rem 0 0;
  }

  h4,
  .listPrice,
  .installments {
    color: var(--dark-gray);
  }

  h4,
  button {
    font-size: 0.75rem;
  }

  h4,
  div {
    text-align: center;
    box-sizing: border-box;
  }

  .listPrice,
  .installments {
    font-size: 0.75rem;
    height: 1rem;
  }

  .listPrice {
    text-decoration: line-through;
  }

  .price {
    font-weight: bold;
  }

  button {
    visibility: hidden;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 28px;
    font-weight: bold;
    margin-top: 0.5rem;

    :hover,
    :focus,
    :focus-visible {
      background-color: var(--light-black);
    }

    :active {
      background-color: var(--dark-gray);
    }
  }
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
