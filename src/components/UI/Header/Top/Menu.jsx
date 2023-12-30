import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { MenuIcon } from "components/svg";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClearIcon from "@mui/icons-material/Clear";

const extraLink = [
  {
    text: "discounts",
    link: "discount",
  },
  {
    text: "about_us",
    link: "/about-us",
  },
  {
    text: "our_service",
    link: "/service",
  },
  {
    text: "refund",
    link: "/refund",
  },
  {
    text: "delevery_service",
    link: "/delevery",
  },
  // {
  //   text: "FAQs",
  //   link: "faq",
  // },
];

export default function HeaderMobileMenu({ links }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const urls = useMemo(() => {
    let data = [...links, ...extraLink];
    return data;
  }, [links, router, extraLink]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            type="button"
            className="flex items-center"
          >
            <MenuIcon />
          </button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="p-4 w-[300px]">
              <button className="mb-4" onClick={toggleDrawer(anchor, false)}>
                <ClearIcon />
              </button>
              {urls?.map((link, ind) => (
                <Link key={ind} href={link.link}>
                  <a
                    onClick={toggleDrawer(anchor, false)}
                    className={`w-[300px] text-[15px] flex justify-between items-center font-[600] py-6 w-full ml-0 ${
                      urls?.length - 1 !== ind ? "border-b border-border" : ""
                    } ${link.active ? "text-main" : "text-black"}`}
                  >
                    {t(link.text)}
                    <ChevronRightIcon
                      style={{
                        fontSize: "24px",
                        color: link.active ? "#00a8e8" : "#5a5a5a",
                      }}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
