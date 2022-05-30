import { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerTop from "../../assets/banner-top.jpg";
import { Banner } from "../common/LayoutStyledComponents";

const SlideBanners = () => {
  return (
    <Swiper
      a11y={{
        prevSlideMessage: "Página anterior",
        nextSlideMessage: "Próxima página",
        firstSlideMessage: "Primeira página",
        lastSlideMessage: "Última página",
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000 }}
      modules={[Autoplay, A11y, Pagination]}
      slidesPerView={1}
    >
      <SwiperSlide>
        <Banner>
          <h2>
            <small>Olá, o que você está buscando?</small>
            <br />
            Criar ou migrar seu
            <br />
            e-commerce?
          </h2>
          <img src={bannerTop} alt="Banner do Topo" />
        </Banner>
      </SwiperSlide>
      <SwiperSlide>
        <Banner>
          <h2>
            <small>Entre em contato conosco!</small>
          </h2>
          <img src={bannerTop} alt="Banner do Topo" />
        </Banner>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideBanners;
