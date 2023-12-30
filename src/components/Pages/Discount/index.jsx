import { Container } from "@mui/material";
import { useEffect, useState } from "react";

export const DiscountWrapper = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://tekkid-c9839-default-rtdb.firebaseio.com/discounts.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data.list ?? []);
      });
  }, []);

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl text-dark text-center mb-5">Chegirmalar</h1>

        {list?.map((item, index) => (
          <div key={item} className="text-black text-xl mb-3">
            <p className="text-dark">
              <span>{index + 1}.</span> {item.title}
            </p>
            {item?.subtext && <p className="ml-5 mt-1">{item.subtext}</p>}
          </div>
        ))}
      </div>
    </Container>
  );
};
