import cls from "./style.module.scss";
import Link from "next/link";
import { Container } from "@mui/material";
import LinkGenerator from "../../LinkGenerator";
import CLinkGenerator from "components/UI/CLinkgenerator";
import useTranslation from "next-translate/useTranslation";
export default function FooterDesktop({
  socialMedias,
  links,
  contactsList = [],
}) {
  const { t } = useTranslation("common");

  return (
    <footer className={cls.footer}>
      <Container>
        <div className={`divide-y divide-[#ffffff11] pt-[70px] ${cls.top}`}>
          <div
            className={`footerGridCols pb-5 border-b border-grayLight ${cls.wrapper}`}
          >
            <div className={cls.about}>
              <div className="h-[80px]">
                <Link href="/">
                  <a className={cls.logo}>
                    <img
                      src="/line-transparent.png"
                      alt="logo"
                      // width={200}
                    />
                  </a>
                </Link>
              </div>
              <p className="text-sm leading-[17px] hover:text-black duration-200">
                <span className="font-[700]">Savdo va mijozlarga xizmat:</span>{" "}
                <a href="tel:+998956612830">(95) 661 28 30</a>
              </p>
              <div>
                <p className={cls.socialText}>
                  Bizni ammaviy axborot vositalarida kuzating
                </p>
                <div
                  className={`gap-[14px] tablet:gap-[24px] ${cls.socialMedias}`}
                >
                  {socialMedias?.map((item, ind) => (
                    <CLinkGenerator key={ind} link={item.link}>
                      <div className="hover:scale-110">{item?.icon}</div>
                    </CLinkGenerator>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${cls.menu} pl-[20px] minDesktop:pl-[60px]`}>
              <h2 className={`${cls.gridTitle} h-[80px] text-dark`}>
                {t("menus")}
              </h2>
              <div className="flex flex-col gap-[24px]">
                {links?.map((item, ind) => (
                  <LinkGenerator
                    key={ind}
                    text={item.text}
                    link={item.link}
                    textClasses={"text-sm font-medium"}
                  />
                ))}
              </div>
            </div>
            <div className={`${cls.contact}`}>
              <h2 className={`${cls.gridTitle} h-[80px] text-dark`}>
                {t("connection")}
              </h2>
              <div className="flex flex-col gap-[24px]">
                {contactsList?.map((item, ind) => (
                  <div key={ind} className="flex w-full">
                    <div className="w-[40px]">{item.icon}</div>
                    <a
                      href={item.link}
                      target={item?.target || "_self"}
                      rel="noreferrer"
                      className="w-[75%] text-sm font-medium leading-[17px] hover:text-black duration-200"
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`py-5 pb-7`}>
            <span className="text-sm text-dark">© {t("preserved_rights")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
