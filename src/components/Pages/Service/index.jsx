import { Container } from "@mui/material";
import CSlider from "components/UI/CSlider";
import { useEffect, useState } from "react";

export const ServiceWrapper = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://tekkid-c9839-default-rtdb.firebaseio.com/services.json")
      .then((response) => response.json())
      .then((data) => {
        const list = data?.images?.map((item) => {
          return {
            image: item,
          };
        });
        setImages(list ?? []);
      });
  }, []);
  console.log("images", images);
  return (
    <Container>
      <div className="my-20">
        <h1 className="text-[30px] text-medium text-center mb-5">
          Bizning xizmatlarimiz
        </h1>
        <div className="grid grid-cols-1 ipod:grid-cols-3 gap-1">
          {images?.map((item, index) => (
            <img key={index} src={item?.image} alt="" />
          ))}
        </div>
        <div className="w-1/2">
          {/* <CSlider swiperList={images ?? []} /> */}
        </div>
      </div>
    </Container>
  );
};
