import styled from "styled-components";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import { CartContextProvider } from "./contexts/CartContext";

const Container = styled.div`
  --light-gray: #f2f2f2;
  --gray: #e6e8ea;
  --dark-gray: #7a7a7a;
  --light-black: #333333;
  max-width: 1248px;
  margin: 0 auto;

  * {
    font-family: "Nunito", sans-serif;
    &:focus-visible {
      outline: var(--dark-gray) solid 2px;
    }
  }
`;

function App() {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    </CartContextProvider>
  );
}

export default App;
