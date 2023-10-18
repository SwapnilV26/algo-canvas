import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { RxCross2 } from "react-icons/rx";
import Desc from "../assets/Capture.png";
import Algos from "../assets/data.json";

const AlgoInfo = ({ open, handleClose, data}) => {

  if (!data ||  Algos[data.type][data.index] === undefined) {
    return <></>;
  }
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          sx={{ ml: 1, p: 2, fontWeight: "bold" }}
          id="customized-dialog-title"
        >
          {Algos[data.type][data.index].name}
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
              {
                Algos[data.type][data.index].definition
              }
            </p>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-xl">PseudoCode:</h3>
            <img src={Algos[data.type][data.index]?.code} alt="" />
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-xl">
              Time Complexity:
            </h3>
            <div className="ml-5 text-gray-900 font-medium">
              {
                Algos[data.type][data.index].timeComplexity
              }
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlgoInfo;
