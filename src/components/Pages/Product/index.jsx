import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Form } from "./Form";
import { ImageFrame } from "./ImageFrame";

const counts = [
  {
    count: 1,
    price: "349 000",
    compare_price: "",
  },
  {
    count: 2,
    price: "679 000",
    compare_price: "698 000 so'm",
  },
  {
    count: 3,
    price: "989 000",
    compare_price: "1 047 000 so'm",
  },
];

export const ProductWrapper = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [product, setProduct] = useState({});
  const [info, setInfo] = useState({});
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch("https://tekkid-c9839-default-rtdb.firebaseio.com/cars.json")
      .then((response) => response.json())
      .then((data) => {
        data?.forEach((element) => {
          if (element.slug === router.query.slug) setProduct(element);
        });
      });
    // .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    fetch("https://tekkid-c9839-default-rtdb.firebaseio.com/product.json")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data["nismo-white"]);
      });
  }, []);

  return (
    <div className="bg-white py-10">
      <Container>
        <div className="p-5 mobile:p-10 bg-mainBackground">
          <Form productInfo={product} />
        </div>
        <div className="grid ipod:grid-cols-2 gap-10 mt-10">
          <div>
            <ImageFrame images={product?.images ?? [product.image]} />
            {/* <img src={product.image} /> */}
          </div>
          <div>
            <p className="text-white text-sm bg-main py-[4px] px-[12px] mb-4 inline-block">
              {t("on_sale")}
            </p>
            <h1 className="text-2xl mobile:text-3xl text-dark font-medium">
              Drift RC™ - Super drift avtomobil
            </h1>
            <div className="mt-2 space-x-4">
              <span className="text-grayDark font-[700] text-lg">
                Narx: {product.price} so'm
              </span>
              <span className="text-gray line-through">
                {product.compare_price} so'm
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <h4 className="text-dark text-lg font-medium">
                Ko'proq xarid qiling va chekirmaga ega bo'ling!
              </h4>
              {counts.map((item) => (
                <button
                  key={item.count}
                  className="text-black flex items-center cursor-pointer"
                >
                  {/* <Radio checked={productInfo.count === item.count} /> */}
                  <p>
                    {item.count} ta - {item.price} so'm{" "}
                    <span className="line-through ml-2 text-sm">
                      {item.compare_price}
                    </span>
                  </p>
                </button>
              ))}
            </div>
            <div className="mobile:hidden">
              <div className="my-10">
                <img src={info.drift_img} alt={info.drift_img} />
              </div>
              <div className="my-10 text-center mobile:text-left">
                <h3 className="text-2xl text-dark font-medium">
                  "Forsaj" filmiga o'xshaydi, lekin real hayotda
                </h3>
                <p className="mt-2">
                  <span className="font-[600]">Dvigatel yuqori quvvat</span> va{" "}
                  <span className="font-[600]">to'liq privot</span>, bu siz va
                  bolalaringiz uchun haqiqiy{" "}
                  <span className="font-[600]">drift zavqini</span> beradi.
                </p>
                <div className="my-10">
                  <img src={info.night_drift} alt={info.night_drift} />
                </div>
                <h3 className="text-2xl text-dark font-medium">
                  Tunda siz o'zingizni Yaponyada xis qilasiz!
                </h3>
                <p className="mt-2">
                  <span className="font-[600]">Tunda drift</span> qilish yana
                  ham zavqli, bu{" "}
                  <span className="font-[600]">Tokyo kechalaridagi</span>{" "}
                  poygalarni eslatadi!
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-xl text-dark font-medium mt-5 mobile:mt-10">
          Avto xarakteristika
        </h3>
        <div className="mt-3 space-y-4">
          <div className="flex space-x-2">
            <p className="text-dark font-medium">Model:</p>
            <span className="text-black">{product.name}</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium">Material:</p>
            <span className="text-black">Metall, Plastik</span>
          </div>

          <div className="flex space-x-2">
            <p className="text-dark font-medium">Batareya vaqti:</p>
            <span className="text-black">30 daqiqa</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium">Yuqori tezlik:</p>
            <span className="text-black">30 km/h gacha</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium"> Avtomobil o'lchami:</p>
            <span className="text-black">19x8,5x6 sm</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium">Batareya:</p>
            <span className="text-black">500 mAh. USB orqali zaryatlanadi</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium">
              Masofadan boshqarish chostatasi:
            </p>
            <span className="text-black">2.4Ghz</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium">
              Masofadan boshqarish diapazoni:
            </p>
            <span className="text-black">80-100 metr</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-dark font-medium whitespace-nowrap">
              Paket o'z ichiga oladi:
            </p>
            <span className="text-black">
              Original quti, Batareya, Masofadan boshqarish pulti, USB kabeli,
              drift uchun balon, poyga uchun balon
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
