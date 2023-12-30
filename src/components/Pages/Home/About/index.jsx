export const About = () => {
  return (
    <div className="py-10 mobile:py-20">
      <div className="max-w-[500px] flex items-center flex-col text-center mx-auto">
        <div className="w-full mobile:w-[470px]">
          <iframe
            src="https://giphy.com/embed/ixUiy1Ibh8YcBguYHt"
            width="100%"
            height="270"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-[30px] mobile:mt-5">
          Professinallardek drift qiling!
        </h1>
        <p className="text-sm text-gray mt-2">
          <span className="font-[600]">Drifty</span> online magazinida faqat
          mahsulotlarni sotmaymiz; biz drift avtomobillarining muxlislari uchun
          misli ko'rilmagan sayohatni yaratmoqdamiz.
        </p>
      </div>
    </div>
  );
};
