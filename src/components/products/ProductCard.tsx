import { useContext, useState } from "react";
import starEmpty from "../../assets/star-empty.svg";
import starFilled from "../../assets/star-filled.svg";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../common/LayoutStyledComponents";
import { MAX_STARS, showCurrencyValue } from "../common/Util";
import { ProductCardContainer } from "./ProductStyledComponents";

const ProductCard = (props: { product: Product }) => {
  const { imageUrl, productName, listPrice, price, stars, productId, installments } = props.product;
  const [activeButton, setActiveButton] = useState(false);
  const { setCart } = useContext(CartContext);

  const handleBuyButtonClick = () => {
    setCart((previousCart) => {
      const newCart: Cart = {
        ...previousCart,
        items: [...previousCart.items, { ...props.product }],
      };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const isClickEnterEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
    return e.key === "Enter";
  };

  const handleProductKeyPressEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isClickEnterEvent(event)) {
      handleBuyButtonClick();
    }
  };

  const handleProductKeyDownEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isClickEnterEvent(event)) {
      setActiveButton(true);
    }
  };

  const handleProductKeyUpEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isClickEnterEvent(event)) {
      setActiveButton(false);
    }
  };

  const starsFilled = Array(stars)
    .fill(0)
    .map((_, index) => <img key={`${productId}-filled-${index}`} src={starFilled} alt="Estrela Preenchida" />);

  const starsEmpty = Array(MAX_STARS - stars)
    .fill(0)
    .map((_, index) => <img key={`${productId}-empty-${index}`} src={starEmpty} alt="Estrela Vazia" />);

  return (
    <ProductCardContainer
      tabIndex={0}
      onKeyDown={handleProductKeyDownEnter}
      onKeyUp={handleProductKeyUpEnter}
      onKeyPress={handleProductKeyPressEnter}
    >
      <img src={imageUrl} alt={productName} />
      <h4>{productName}</h4>
      <div>{[starsFilled, starsEmpty]}</div>
      <div className="listPrice">{listPrice ? `de ${showCurrencyValue(listPrice)}` : ""}</div>
      <div className="price">{price ? `por ${showCurrencyValue(price)}` : ""}</div>
      <div className="installments">
        {installments.length ? "ou em " + installments.map((i) => `${i.quantity}x de ${showCurrencyValue(i.value)}`).join(", ") : ""}
      </div>
      {listPrice && listPrice > price && (
        <div className="off-container">
          <div className="off">OFF</div>
        </div>
      )}
      <Button className={`${activeButton ? "active" : ""}`} onClick={handleBuyButtonClick}>
        COMPRAR
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
