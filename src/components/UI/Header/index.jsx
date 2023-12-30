import { useEffect, useCallback } from "react";
import HeaderDesktop from "./Desktop";
import { useDispatch } from "react-redux";
import {
  setRoutes,
  setNoHeaderPages,
  setNoFooterPages,
} from "store/websiteRoutes/websiteRoutes.slice";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { websiteActions } from "store/website/websiteSlice";
export function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleGetActiveLink = useCallback(
    (link) => {
      return router.pathname === link;
    },
    [router]
  );

  useEffect(() => {
    const routes = [
      {
        text: "best_sellers",
        icon: "",
        link: "/",
        active: handleGetActiveLink("/"),
      },
      {
        text: "drift_cars",
        icon: "",
        link: "/drift-cars",
        active: handleGetActiveLink("/drift-cars"),
      },
    ];
    dispatch(setRoutes(routes));
  }, [dispatch, handleGetActiveLink]);

  useEffect(() => {
    const header = ["/profile"];
    const footer = ["/profile"];
    dispatch(setNoHeaderPages(header));
    dispatch(setNoFooterPages(footer));
  }, [dispatch]);

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };
  router.events.on("routeChangeStart", () => {
    routeChange();
    dispatch(websiteActions.setMobileMenuOpen(false));
    NProgress.start();
  });
  router.events.on("routeChangeComplete", () => {
    routeChange();
    NProgress.done();
  });
  router.events.on("routeChangeError", () => NProgress.done());

  return (
    <div className="relative z-[99]">
      <HeaderDesktop />
    </div>
  );
}
