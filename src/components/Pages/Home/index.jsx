import { Container } from "@mui/material";
import { CardWrapper } from "components/UI/CardWrapper";
import { useEffect, useState } from "react";
import { About } from "./About";
import { Testimonials } from "./Testimonials";

export default function HomePageWrapper() {
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
      <CardWrapper
        title="best_sellers"
        list={list}
        location="product"
        loading={loading}
      />
      <About />
      {/* <Testimonials /> */}
    </Container>
  );
}
