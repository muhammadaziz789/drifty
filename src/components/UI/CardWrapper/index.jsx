import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Title = ({ title }) => {
  const { t } = useTranslation("common");
  return (
    title && (
      <h1 className="text-center mb-10 text-[30px] text-dark">{t(title)}</h1>
    )
  );
};

const Card = ({ element, location }) => {
  const router = useRouter();
  const getPrice = (a, b) => {
    let result = +a.replace(/\s/g, "") - +b.replace(/\s/g, "");
    result = result.toString();
    return result.slice(0, 3) + " " + result.slice(3);
  };
  const { t } = useTranslation("common");
  return (
    <div
      onClick={() => router.push(`/${location}/${element.slug}`)}
      className="bg-white pb-2 duration-300 cursor-pointer overflow-hidden"
    >
      <div>
        <img src={element.image} alt={element.name} />
      </div>

      <div className="px-2">
        <p className="text-white text-[12px] bg-main py-[4px] px-[8px] inline-block mt-3">
          {t("on_sale")}
        </p>
        <h3 className="text-sm mb-1 mt-2">{element.name}</h3>
        <div className="text-sm space-x-3 mt-4">
          <span className="text-dark font-[700]">
            From {element.price} so'm
          </span>
          <span className="text-gray text-[12px] line-through">
            {element.compare_price} so'm
          </span>
        </div>
        <span className="text-[12px] text-fire">
          {getPrice(element.compare_price, element.price)} so'm tejab qoling!
        </span>
      </div>
    </div>
  );
};

export const CardWrapper = ({
  title,
  list = [],
  location = "/",
  loading = false,
}) => {
  return (
    <div className="py-10">
      <Title title={title} />

      {loading ? (
        <h2>Yuklanmoqda...</h2>
      ) : (
        <div className="grid grid-flow-row-dense grid-cols-2 mobile:grid-cols-3 ipod:grid-cols-4 gap-x-8 gap-y-12">
          {list?.map((item, index) => (
            <Card key={index} element={item} location={location} />
          ))}
        </div>
      )}
    </div>
  );
};
