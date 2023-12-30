import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

export default function CSlider({
  slidesPerView = 1,
  spaceBetween = 0,
  swiperList = [],
  onSlideChange = () => {},
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      effect={"fade"}
      onSlideChange={(e) => onSlideChange(e?.activeIndex + 1)}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className={`swiperMain`}
    >
      {swiperList?.map((item, ind) => (
        <SwiperSlide key={item?.id || ind}>
          <img src={item.image} alt="" className="h-full w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
