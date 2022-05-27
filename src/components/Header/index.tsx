import styled from "styled-components";

import logo from "../../assets/logo.svg";
import glass from "../../assets/glass.svg";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";

const SearchInput = styled.input`
  width: 60%;
  height: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-bottom: var(--gray) solid 1px;

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
  return (
    <header className={props.className}>
      <img src={logo} alt="Logo da Corebiz" />
      <SearchInput type="text" placeholder="O que está procurando?" />
      <HeaderButton>
        <img src={glass} alt="Buscar" />
      </HeaderButton>
      <HeaderButton>
        <img src={user} alt="Ícone de Usuário" />
        Minha Conta
      </HeaderButton>
      <HeaderButton>
        <img src={cart} alt="Ícone de Carrinho" />
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
