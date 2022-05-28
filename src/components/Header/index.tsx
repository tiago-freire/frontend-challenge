import styled from "styled-components";
import { useContext } from "react";

import logo from "../../assets/logo.svg";
import glassIcon from "../../assets/glass.svg";
import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart.svg";

import { CartContext } from "../../contexts/CartContext";

const SearchInput = styled.input`
  width: 60%;
  height: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-bottom: var(--dark-gray) solid 1px;

  &:focus-visible {
    border-bottom-color: transparent;
  }
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const BaseHeader = (props: { className?: string }) => {
  const { cart } = useContext(CartContext);

  return (
    <header className={props.className}>
      <img src={logo} alt="Logo da Corebiz" />
      <SearchInput type="text" placeholder="O que está procurando?" />
      <HeaderButton>
        <img src={glassIcon} alt="Buscar" />
      </HeaderButton>
      <HeaderButton>
        <img src={userIcon} alt="Ícone de Usuário" />
        Minha Conta
      </HeaderButton>
      <HeaderButton>
        <img src={cartIcon} alt="Ícone de Carrinho" /> - {cart.totalItems}
      </HeaderButton>
    </header>
  );
};

const Header = styled(BaseHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export default Header;
