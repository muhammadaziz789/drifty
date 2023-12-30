import { Container } from "@mui/material";
import { useRouter } from "next/router";

export const DeleveryWrapper = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="my-20 text-center w-[300px] mx-auto">
        <h1 className="mb-5 text-[30px]">Dostavka xizmati</h1>
        <div className="space-y-2">
          <p>Yetkazib berish 1 ish kuni ichida ✅</p>
          <p>Toshkent bo’ylab Xizmat bepul ✅</p>
          <p>Mijozlar bilan uzviy aloqa ✅</p>
          <p>Imkoni boricha tez yetkazib beramiz ✅</p>
        </div>
        <button
          onClick={() => router.push("/shopping")}
          className={`h-[48px] bg-yellow text-white px-4 flex items-center w-full mt-3 justify-center space-x-2 `}
        >
          Hoziroq buyrtma bering
        </button>
      </div>
    </Container>
  );
};
