import { Container } from "@mui/material";
import { useEffect, useState } from "react";
export default function AboutPageWrapper() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://tekkid-c9839-default-rtdb.firebaseio.com/about.json")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data ?? []);
      });
  }, []);

  return (
    <Container>
      <div className="pt-10 pb-20 flex flex-col items-center">
        <div className="text-center ipod:w-3/4">
          <h1 className="text-center text-[30px] text-dark">{info.title}</h1>
          <p className="mb-10">
            Drifty onlayn magazini bu avtomobilni sevuvchilar dan tashkil topgan
            jamoa. Bizning maqsadimiz sizga o’z sifati va qulayligi bilan
            ajralib turuvchi avtomobillarni taqdim etish.
          </p>
        </div>

        <img className="ipod:w-1/2" src={info.goal} alt={info.goal} />
      </div>
    </Container>
  );
}
