import { Container } from "@mui/material";
import LinkGenerator from "components/UI/LinkGenerator";

export const HeaderNavigation = ({ links = [] }) => {
  return (
    <div className="pt-3 pb-4 bg-white">
      <Container>
        <ul className="flex space-x-8">
          {links?.map((link, index) => (
            <div className="relative" key={index}>
              <LinkGenerator
                key={link.text}
                link={link.link}
                text={link.text}
                icon={link.icon}
                width={"24"}
                height={"24"}
                textClasses={`${link.active ? "text-dark" : "text-black"}`}
              />
              {link.active && (
                <div className="w-full h-[2px] absolute left-0 -bottom-4 bg-dark rounded-sm"></div>
              )}
            </div>
          ))}
        </ul>
      </Container>
    </div>
  );
};
