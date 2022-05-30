import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #000;
  padding: 1rem 0;
  color: #fff;

  address {
    font-style: normal;
    font-size: 0.75rem;
    line-height: 1.5rem;
    opacity: 0.75;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  h3 {
    :after {
      background: #fff;
    }
  }
`;

export const FooterColumns = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  section {
    display: flex;
    flex-direction: column;
  }

  .contact {
    gap: 1.5rem;
  }

  .copyright {
    gap: 2rem;
    flex-direction: row;

    p {
      display: flex;
      flex-direction: column;
      font-size: 0.6rem;
      opacity: 0.75;
    }
  }

  button {
    width: 195px;
    height: 38px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 0.5rem;
    text-align: left;
    font-size: 0.65rem;
    line-height: 0.75rem;

    &:hover,
    &:focus,
    &:focus-visible,
    &:active {
      background-color: var(--gray);
    }

    img {
      width: 1rem;
    }
  }
`;
