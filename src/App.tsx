import Footer from "./components/footer";
import Header from "./components/header";
import NewsletterForm from "./components/newsletter";
import Main from "./components/products";
import SlideBanners from "./components/slide-banners";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <SlideBanners />
      <Main />
      <NewsletterForm />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
