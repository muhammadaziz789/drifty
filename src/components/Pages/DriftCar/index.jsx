import { Container } from "@mui/material";
import { CardWrapper } from "components/UI/CardWrapper";
import { useEffect, useState } from "react";

const DriftCarWrapper = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://tekkid-c9839-default-rtdb.firebaseio.com/cars.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <div>
        <CardWrapper
          title="drift_cars"
          list={list}
          location="product"
          loading={loading}
        />
      </div>
    </Container>
  );
};

export default DriftCarWrapper;
