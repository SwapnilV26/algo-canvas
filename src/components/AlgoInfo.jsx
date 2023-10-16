import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const AlgoInfo = ({ open, handleClose, title, psedocode, tc }) => {
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          Close
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Definition Bubble sort is a simple sorting algorithm that repeatedly
            steps through a list, compares adjacent elements, and swaps them if
            they are in the wrong order. The pass through the list is repeated
            until the list is sorted. Pseudocode Input: A list of elements to be
            sorted. Output: The sorted list. 1. Repeat the following steps until
            no swaps are made during a pass: a. Set a boolean variable `swapped`
            to false. b. Iterate through the list from the beginning to the end:
            i. If the current element is greater than the next element: - Swap
            the current element with the next element. - Set `swapped` to true.
            2. Return the sorted list.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlgoInfo;
