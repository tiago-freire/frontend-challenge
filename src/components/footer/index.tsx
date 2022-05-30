import headphoneIcon from "../../assets/headphone.svg";
import letterIcon from "../../assets/letter.svg";
import logoWhiteIcon from "../../assets/logo-white.svg";
import vtexIcon from "../../assets/vtex.svg";
import { Button, Container, SectionTitle } from "../common/LayoutStyledComponents";
import { FooterColumns, FooterContainer } from "./FooterStyledComponents";

const CONTACT_LINK = "https://www.corebiz.ag/pt/#contact";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterColumns>
          <section className="localization">
            <SectionTitle>Localização</SectionTitle>
            <address>
              <p>
                Avenida Andrômeda, 2000. Bloco 6 e 8<br />
                Alphavile SP
                <br />
                <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
                <br />
                <a href="tel:+55 11 3090 1039">+55 11 3090 1039</a>
              </p>
            </address>
          </section>
          <section className="contact">
            <Button onClick={() => window.open(CONTACT_LINK)}>
              <img src={letterIcon} alt="Ícone de email" />
              ENTRE EM CONTATO
            </Button>
            <Button onClick={() => window.open(CONTACT_LINK)}>
              <img src={headphoneIcon} alt="Ícone de headphone" />
              FALE COM O NOSSO CONSULTOR ONLINE
            </Button>
          </section>
          <section className="copyright">
            <p>
              Created by
              <img src={logoWhiteIcon} alt="Corebiz" />
            </p>
            <p>
              Powered by
              <img src={vtexIcon} alt="VTEX" />
            </p>
          </section>
        </FooterColumns>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
