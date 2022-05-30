import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #fff;
`;

export const SearchFormContainer = styled.form`
  width: 65%;
  height: 1.5rem;
  border: none;
  border-bottom: var(--dark-gray) solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  height: 100%;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  cursor: pointer;
`;

export const Badge = styled.span<{ children: number }>`
  visibility: ${(props) => (props?.children ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--red);
  color: #fff;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  font-size: ${(props) => (props?.children && props.children < 100 ? 0.55 : 0.4)}rem;
  font-weight: bold;
`;
