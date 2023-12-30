import styles from "./style.module.scss";
import classNames from "classnames";
import { HeaderTop } from "../Top";
import { HeaderDiscount } from "../Discount";
import { HeaderNavigation } from "../Navigation";
import { useSelector } from "react-redux";

export default function HeaderDesktop() {
  const links = useSelector((state) => state.websiteRoutes.routes);

  return (
    // <Headroom pinStart={-100}>
    <header
      className={`border-b border-borderDarker ${classNames(styles.header)}`}
    >
      <HeaderTop links={links} />
      <HeaderDiscount />
      <HeaderNavigation links={links} />
    </header>
    // </Headroom>
  );
}
