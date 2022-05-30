import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

const ProductList = (props: { products: Product[] }) => {
  return (
    <Swiper
      a11y={{
        prevSlideMessage: "Página anterior",
        nextSlideMessage: "Próxima página",
        firstSlideMessage: "Primeira página",
        lastSlideMessage: "Última página",
      }}
      navigation
      modules={[Navigation, A11y]}
      slidesPerView={4}
    >
      {props.products.map((product) => (
        <SwiperSlide>
          <ProductCard key={`product-${product.productId}`} product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductList;
