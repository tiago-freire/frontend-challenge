import styled from "styled-components";

export const ProductCardContainer = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 216px;
  margin: 0.5rem auto;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  :hover,
  :focus,
  :focus-visible {
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

  .off-container {
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 80px 70px 0;
    border-color: transparent var(--red) transparent transparent;
  }

  .off {
    margin-top: 0.75rem;
    width: 70px;
    text-align: right;
    color: #fff;
    font-weight: bold;
    font-size: 0.75rem;
  }

  button {
    visibility: hidden;
    margin-top: 0.5rem;
  }
`;
