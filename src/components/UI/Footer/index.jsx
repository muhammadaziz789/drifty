import {
  TelegramIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TiktokIcon,
  YoutubeIcon,
} from "components/svg";
import { useMemo } from "react";
import FooterDesktop from "./Desktop";
import FooterMobile from "./Mobile";
import { useIsMobile } from "hooks/useMobile";

const links = [
  {
    text: "about_us",
    link: "about-us",
  },
  {
    text: "our_service",
    link: "service",
  },
  {
    text: "refund",
    link: "refund",
  },
  {
    text: "delevery_service",
    link: "delevery",
  },
  // {
  //   text: "FAQs",
  //   link: "faq",
  // },
];

export function Footer() {
  const mobile = useIsMobile("mobile");

  const socialMedias = useMemo(() => {
    const res = [
      {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/drifty.uz/",
      },
      {
        icon: <TelegramIcon />,
        link: "https://t.me/drifty_uz",
      },
      {
        icon: <TiktokIcon />,
        link: "https://www.tiktok.com/@tekkid_uz",
      },
      {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/drifty.uz/",
      },
      {
        icon: <YoutubeIcon />,
        link: "https://www.youtube.com/channel/UCT_VGsQnwXKmUco5S8jxIkg",
      },
      {
        icon: <TwitterIcon />,
        link: "https://twitter.com/drifty_uz",
      },
    ];
    return res;
  }, []);

  const contactsList = useMemo(() => {
    const res = [
      {
        icon: <TelegramIcon />,
        text: "Telegram",
        link: "https://t.me/driftyuz",
      },
      {
        icon: <PhoneIcon />,
        text: "+998 (95) 661 28 30",
        link: "tel:+998956612830",
      },
      {
        icon: <MailIcon />,
        text: "tekkid.uz@gmail.com",
        link: "mailto:tekkid.uz@gmail.com",
      },
    ];
    return res;
  }, []);

  return (
    <div className="border-t border-borderDarker">
      {mobile ? (
        <FooterMobile
          links={links}
          socialMedias={socialMedias}
          contactsList={contactsList}
        />
      ) : (
        <FooterDesktop
          links={links}
          socialMedias={socialMedias}
          contactsList={contactsList}
        />
      )}
    </div>
  );
}
