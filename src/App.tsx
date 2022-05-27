import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import styled from "styled-components";

const Container = styled.div`
  --gray: #7a7a7a;
  --light-gray: #f2f2f2;
  max-width: 1248px;
  margin: 0 auto;
  font-size: 18px;

  * {
    font-family: "Nunito", sans-serif;
    &:focus-visible {
      outline: var(--gray) solid 2px;
    }
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default App;
