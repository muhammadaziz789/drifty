import { Container } from "@mui/material";
import gsap from "gsap";
import { useIsMobile } from "hooks/useMobile";
import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/all";

export const HeaderDiscount = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPerecent = 0;
  const direction = -1;
  const mobile = useIsMobile("mobile");

  useEffect(() => {
    if (mobile) requestAnimationFrame(animation);
  }, [mobile]);

  const animation = () => {
    if (xPerecent <= -100) {
      xPerecent = 0;
    }

    if (xPerecent > 0) {
      xPerecent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPerecent });
    gsap.set(secondText.current, { xPercent: xPerecent });
    xPerecent += 0.1 * direction;

    requestAnimationFrame(animation);
  };

  return (
    <div className="bg-main py-1 overflow-hidden">
      <Container>
        <div
          ref={slider}
          className="relative flex mobile:justify-center whitespace-nowrap space-x-10"
        >
          <p
            ref={firstText}
            className="slider-text text-white text-[15px] text-[11px] uppercase tracking-wider text-center"
          >
            Instagramda oxirgi postimizga{" "}
            <span className="font-[700] text-[15px] tracking-normal">
              1 ta komment
            </span>{" "}
            yozish orqali{" "}
            <span className="font-[700] text-[15px] tracking-normal">
              10% chegirmaga
            </span>{" "}
            ega bo'ling
          </p>
          <p
            ref={secondText}
            className="mobile:hidden slider-text text-white text-[15px] text-[11px] uppercase tracking-wider text-center"
          >
            Instagramda oxirgi postimizga{" "}
            <span className="font-[700] text-[15px] tracking-normal">
              1 ta komment
            </span>{" "}
            yozish orqali{" "}
            <span className="font-[700] text-[15px] tracking-normal">
              10% chegirmaga
            </span>{" "}
            ega bo'ling
          </p>
        </div>
      </Container>
    </div>
  );
};
