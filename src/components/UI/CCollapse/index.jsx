import ListItemButton from "@mui/material/ListItemButton";
import { Add, Close } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
export default function CCollapse({ element = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const styleListItem = {
    background: "#fff",
    border: "1px solid #ebebeb",
    marginTop: "10px",
    padding: "12px 16px",
  };

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <ListItemButton
        style={styleListItem}
        onClick={(e) => {
          e.preventDefault();
          handleClick(element);
        }}
      >
        <div className="w-full font-medium text-black text-sm flex items-center space-x-2">
          <div className="w-[20px] h-[20px] border border-main flex items-center justify-center">
            <DoneIcon style={{ color: "#00a8e8" }} fontSize="24" />
          </div>
          <span>{element?.title}</span>
        </div>
        {isOpen ? (
          <Close style={{ color: "#A4AFC1" }} fontSize="20" />
        ) : (
          <Add style={{ color: "#A4AFC1" }} fontSize="20" />
        )}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <div className="ml-[16px] mt-4">
          {element?.children?.map((children, ind) => (
            <div key={ind} className="mb-2 flex items-center justify-between">
              <p className="text-sm text-black leading-6">{children.title}</p>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
