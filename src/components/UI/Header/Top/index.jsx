import { Container, Link } from "@mui/material";
import { useIsMobile } from "hooks/useMobile";
import HeaderMobileMenu from "./Menu";
import CLinkGenerator from "components/UI/CLinkgenerator";
import { InstagramIcon, TelegramIcon, TiktokIcon } from "components/svg";
import { useMemo } from "react";
import { useRouter } from "next/router";

export const HeaderTop = ({ links = [] }) => {
  const mobile = useIsMobile("mobile");
  const router = useRouter();

  const socialMedias = useMemo(() => {
    const res = [
      {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/drifty.uz/",
      },
      {
        icon: <TelegramIcon />,
        link: "https://t.me/driftyuz",
      },
      {
        icon: <TiktokIcon />,
        link: "https://www.tiktok.com/@drifty.uz",
      },
    ];
    if (mobile) return [res[0]];
    return res;
  }, [mobile]);

  return (
    <div className="w-full">
      <div className="bg-grayLight py-3">
        <Container>
          <div className="flex items-center justify-between text-gray text-[13px] tracking-widest font-[700] flex-col md:flex-row space-y-1">
            <p>Savol yoki muammo bormi?</p>
            <a href="tel:+998994912830">Biz bilan bog'laning: (99) 491 28 30</a>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <div className="py-3 flex items-center justify-between">
            {mobile && <HeaderMobileMenu links={links} />}

            <div onClick={() => router.push("/")}>
              <img
                src="/line-transparent.png"
                alt="logo"
                // width={mobile ? 140 : 200}
              />
            </div>

            <div className={`flex space-x-3`}>
              {socialMedias?.map((item, ind) => (
                <CLinkGenerator key={ind} link={item.link}>
                  <div className="hover:scale-110">{item?.icon}</div>
                </CLinkGenerator>
              ))}
            </div>
            {/* <Link href="/shopping">
              <a>
                <CartIcon />
              </a>
            </Link> */}
          </div>
        </Container>
      </div>
    </div>
  );
};
