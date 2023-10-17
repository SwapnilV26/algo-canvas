import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { RxCross2 } from "react-icons/rx";
import Desc from "../assets/Capture.png";

const AlgoInfo = ({ open, handleClose, title, psedocode, tc }) => {
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          sx={{ ml: 1, p: 2, fontWeight: "bold" }}
          id="customized-dialog-title"
        >
          Bubble Sort {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 8,
          }}
        >
          <RxCross2 size={30} className="text-red-500" />
        </IconButton>
        <DialogContent dividers>
          <div>
            <h3 className="text-gray-800 font-bold text-xl">Definition:</h3>
            <p className="ml-5 text-gray-900 font-medium text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sint, debitis, deserunt velit nostrum iste enim iusto modi,
              nesciunt tenetur ad laudantium facilis unde explicabo suscipit
              corrupti! Ad, eius magnam!
            </p>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-xl">PseudoCode:</h3>
            <img src={Desc} alt="" />
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-xl">
              Time Complexity:
            </h3>
            <div className="ml-5 text-gray-900 font-medium">
              <p>d</p>
              <p>d</p>
              <p>d</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlgoInfo;
