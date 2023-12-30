import CCollapse from "components/UI/CCollapse";
import useTranslation from "next-translate/useTranslation";
import { useMemo } from "react";

export const Testimonials = () => {
  const { t } = useTranslation();

  const list = useMemo(() => {
    return [
      {
        title: "Sifatli va takrorlanmas mahsulotlar",
        children: [
          {
            title:
              "Drifty onlayn magazinida tovar sifati narxiga mos keladi! Drifty da biz bozorda ajralib turadigan chinakam o‘ziga xos mahsulotlarni sizga taqdim etishga intilamiz. Buning uchun bozorni sinchkovlik bilan o'rganamiz. Biz tushunamizki, mijozlarimiz nafaqat o'z ehtiyojlarini qondiradigan, balki o'ziga xosligini ham aks ettiruvchi mahsulotlarni izlaydilar. Shuning uchun biz do'konimizdagi maxsulotlar sifatli va o'ziga xos bo'lishiga xarakat qilamiz. Drifty da har bir xaridingiz sifatli, o'ziga xos va qulay narxda bo'ladi, Drifty orqali ishonch bilan xarid qiling.",
          },
        ],
      },
      {
        title: "Sizning mamnunligingiz",
        children: [
          {
            title:
              "Drifty da mijozlar mamnunligi biz qilayotgan har bir ishda markaziy oʻrinni egallaydi. Bizning asosiy maqsadimiz - har bir mijoz nafaqat izlayotgan narsasini topa olishi, balki mamnun tabassum bilan xarid qilishini ta'minlashdir. Mamnun mijoz bizning muvaffaqiyatimiz kaliti ekanligini tushunamiz va shuning uchun biz sizning quvonchingizni hamma narsadan ustun qo'yamiz. Bizning sinchkovlik bilan tanlangan mahsulot tanlovimizdan tortib, muammosiz xizmatlarimiz va raqobatbardosh narxlarigacha Drifty ning har bir jihati sizning qulayligingizni hisobga olgan holda ishlab chiqilgan. Biz ishonamizki, ajoyib xizmat va qiymatni taqdim etish nafaqat mijozlarimiz bilan uzoq muddatli munosabatlarni o'rnatadi, balki ijobiy va yoqimli xarid qilish tajribasiga ham hissa qo'shadi. Sizning baxtingiz bizning motivatsiyamizdir va biz sizning umidlaringizni qondirish va undan yuqori bo'lish uchun xizmatlarimizni doimiy ravishda yaxshilashga intilamiz. Biz bilan xarid qiling va mijozlar ehtiyojini qondirish asosiy maqsad bo'lgan dunyoni boshdan kechiring; bu bizning sobit majburiyatimizdir.",
          },
        ],
      },
      {
        title: "Pulni qaytarib berish kafolati",
        children: [
          {
            title:
              "Drifty da biz mahsulotlarimiz sifatli va mijozni qoniqtirishi ustida bosh qotiramiz. Sizning xotirjamligingiz uchun biz 10 kunlik pulni qaytarib berish kafolatini taklif qilamiz. Agar biron-bir sababga ko'ra xaridingiz sizni to'liq qoniqtirmasa, mahsulotni olganingizdan keyin 10 kun ichida qaytarib berishingiz mumkin va biz pulingizni mamnuniyat bilan qaytarib beramiz. Qaytarilishning ikki tomon manfaatlariga mos kelishini ta'minlash uchun biz mahsulotning foydalanilmagan va zarar ko'rmasligini so'raymiz. Bizning maqsadimiz xaridingizni xavf-xatarsiz va yoqimli qilishdir va pulni qaytarib berish kafolati takliflarimiz sifatiga ishonchimizdan dalolat beradi. Ishonchimiz komilki, Drifty da sizning mamnunligingiz nafaqat bizning va'damiz; bu bizning kafolatimiz.",
          },
        ],
      },
      {
        title: "Tekin dostavka",
        children: [
          {
            title:
              "Biz Toshkent bo'ylab tekin va tezkor Dostavka xizmatini ta'minlaymiz. Tovarlar Toshkent bo'ylab 1-2 ish kunida yetkazib beriladi.",
          },
        ],
      },
    ];
  }, []);

  return (
    <div className="py-10 mobile:py-20 max-w-[700px] mx-auto">
      <h1 className="text-center text-[30px]">
        Nega bizdan xarid qilishingiz kerak?
      </h1>
      {list.map((item, index) => (
        <CCollapse key={index} element={item} />
      ))}
    </div>
  );
};
