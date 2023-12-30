import cls from "./style.module.scss";
import Link from "next/link";
import { Container } from "@mui/material";
import LinkGenerator from "../../LinkGenerator";
import CLinkGenerator from "components/UI/CLinkgenerator";
import useTranslation from "next-translate/useTranslation";
export default function FooterMobile({
  socialMedias,
  links,
  contactsList = [],
}) {
  const { t } = useTranslation("common");
  return (
    <footer className={cls.footer}>
      <Container>
        <div className={`divide-y divide-[#ffffff11] pt-[70px] ${cls.top}`}>
          <div className={`gap-[50px] mobile:gap-[70px] ${cls.wrapper}`}>
            <div className={`${cls.about}`}>
              <div className="w-full flex items-start h-[80px]">
                <Link href="/">
                  <a className={cls.logo}>
                    <img
                      src="/line-transparent-black.png"
                      alt="logo"
                      // width={200}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex justify-between border-b border-grayLight pb-7">
              <div className={`${cls.menu}`}>
                <h2 className={`${cls.gridTitle} h-[50px] mobile:h-[80px]`}>
                  {t("menus")}
                </h2>
                <div className="flex flex-col space-y-6">
                  {links?.map((item, ind) => (
                    <LinkGenerator
                      key={ind}
                      text={item.text}
                      link={item.link}
                      textClasses={"text-black text-sm font-medium ml-0"}
                    />
                  ))}
                </div>
              </div>
              <div className={`${cls.contact}`}>
                <h2 className={`${cls.gridTitle} h-[50px] mobile:h-[80px]`}>
                  {t("connection")}
                </h2>
                <div className="flex flex-col space-y-6">
                  {contactsList?.map((item, ind) => (
                    <div key={ind} className="flex w-full flex-row items-start">
                      <div className="w-[30px] mb-0">{item.icon}</div>
                      <a
                        href={item.link}
                        target={item?.target || "_self"}
                        rel="noreferrer"
                        className="text-sm font-medium leading-[17px] text-left"
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <p className={cls.socialText}>
                    Ijtimoiy tarmoqlarda kuzating:
                  </p>
                  <div className={`gap-3 ${cls.socialMedias}`}>
                    {socialMedias?.map((item, ind) => (
                      <CLinkGenerator key={ind} link={item.link}>
                        <div className="hover:scale-110">{item?.icon}</div>
                      </CLinkGenerator>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`py-7 ${cls.bottom}`}>
            <span className="text-[13px]">© {t("preserved_rights")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
