import { useContext } from "react";
import cartIcon from "../../assets/cart.svg";
import logo from "../../assets/logo.svg";
import userIcon from "../../assets/user.svg";
import { CartContext, defaultCart } from "../../contexts/CartContext";
import { Container } from "../common/LayoutStyledComponents";
import { Badge, HeaderButton, HeaderContainer } from "./HeaderStyledComponents";
import SearchForm from "./SearchForm";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);

  const clearCart = () => {
    setCart(defaultCart);
    localStorage.removeItem("cart");
  };

  return (
    <Container full sticky>
      <Container>
        <HeaderContainer>
          <img src={logo} alt="Logo da Corebiz" />
          <SearchForm />
          <HeaderButton>
            <img src={userIcon} alt="Ícone de Usuário" />
            Minha Conta
          </HeaderButton>
          <HeaderButton onDoubleClick={clearCart} title="Dê um clique duplo para limpar o carrinho">
            <img src={cartIcon} alt="Ícone de Carrinho" />
            <Badge>{cart.items?.length}</Badge>
          </HeaderButton>
        </HeaderContainer>
      </Container>
    </Container>
  );
};

export default Header;
