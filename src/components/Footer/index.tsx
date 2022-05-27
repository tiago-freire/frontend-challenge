import styled from "styled-components";

const BaseFooter = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <h3>Localização</h3>
      <address>
        <p>
          Avenida Andrômeda, 2000. Bloco 6 e 8<br />
          Alphavile SP
          <br />
          <a href="mailto:brasil@corebiz.ag">mailto:brasil@corebiz.ag</a>
          <br />
          <a href="tel:+55 11 3090 1039">+55 11 3090 1039</a>
        </p>
      </address>
    </footer>
  );
};

const Footer = styled(BaseFooter)`
  background-color: #000;
  padding: 1rem 0;
  color: #fff;

  address {
    font-style: normal;
  }

  /* h3 {
    border-bottom: #fff solid 4px;
  } */

  a {
    color: currentColor;
    text-decoration: none;
  }
`;

export default Footer;
