import { useState } from "react";

export const ImageFrame = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col-reverse mobile:flex-row">
      <div className="mt-2 mobile:mr-2 flex gap-2 mobile:flex-col">
        {images?.map(
          (el, index) =>
            el && (
              <div className="w-[70px]">
                <img
                  key={el}
                  className={`w-[70px] h-[70px] object-cover rounded-[4px] cursor-pointer hover:outline ${
                    current === index ? "outline" : ""
                  }`}
                  src={el}
                  alt={el}
                  onClick={() => setCurrent(index)}
                />
              </div>
            )
        )}
      </div>
      <div className="w-full">
        <img src={images[current]} alt={images[current]} />
      </div>
    </div>
  );
};
