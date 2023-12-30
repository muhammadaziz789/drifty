import { Container } from "@mui/material";

export const RefundWrapper = () => {
  return (
    <Container>
      <div className="my-20">
        <h1 className="mb-5 text-[30px]">Tovarni qaytarib berish</h1>
        <div className="space-y-2">
          <p>
            Tovar xarid qilingan kundan boshlab{" "}
            <span className="font-[600]">10 kun</span> ichida tovarni qaytarib
            berish va to’lov <span className="font-[600]">pulini to’liq</span>{" "}
            qaytarib olish mumkin.
          </p>
          <p>
            <span className="font-[600]">Asosiy shart</span> tovarga ziyon
            yetmagan va <span className="font-[600]">ishlatilinmagan</span>{" "}
            bo’lishi lozim.
          </p>
          <p>
            Tovarni qaytarib berish uchun @drifty.uz ga{" "}
            <span className="font-[600]">tovar rasmini</span> jo’nating va
            <span className="font-[600]">5 ish kuni</span> ichida hodimlarimiz
            tovarni olib pulni qaytarib berishadi.
          </p>
        </div>
      </div>
    </Container>
  );
};
