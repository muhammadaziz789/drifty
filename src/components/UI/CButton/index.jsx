import { Button } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import cls from "./style.module.scss";
export default function CButton({
  icon = "",
  width = "40",
  height = "40",
  text = "button",
  translation = "common",
  color = "#fff",
  disabled = false,
  backgroundColor = "#5a5a5a",
  variant = "contained",
  boxShadow = "none",
  classes = "bg-black",
  fontWeight = "400",
  customStyles = {},
  type = "button",
  handleClick = () => {},
  children,
}) {
  const { t } = useTranslation(translation);
  const customization = {
    color: color,
    fontWeight: fontWeight,
    borderRadius: "0",
    backgroundColor: backgroundColor,
    textTransform: "none",
    "&": {
      boxShadow: boxShadow,
      backgroundColor: backgroundColor,
      "&:hover, &.Mui-focusVisible": {
        color: color,
        boxShadow: boxShadow,
        backgroundColor: backgroundColor,
      },
    },
    ...customStyles,
  };

  return (
    <>
      <Button
        variant={variant}
        sx={customization}
        className={`normal-case bg-black ${classes} relative normal-case cursor-pointer ${cls.button}`}
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
        type={type}
        disabled={disabled}
      >
        {children || (
          <div>
            {icon?.length ? (
              <Image
                src={icon}
                alt={text + "img"}
                width={width}
                height={height}
              />
            ) : (
              ""
            )}
            {t(text, `${translation}:${text}`)}
          </div>
        )}
      </Button>
    </>
  );
}
