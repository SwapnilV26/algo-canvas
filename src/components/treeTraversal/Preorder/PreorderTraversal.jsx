import React, { useEffect, useState } from "react";
import classes from "../Tree.module.css";
import { getpreordertraversal } from "./getPreorderTraversal";
import TreeNode from "../TreeNode";
import { Box } from "@mui/material";
import AlgoInfo from "../../AlgoInfo";
import Algos from "../../../assets/data.json";

const PreorderTraversal = () => {
  const [tree, setTree] = useState([]);
  const [regenerate, setRegenerate] = useState(0);
  const [open, setOpen] = useState(false);
  const ANIMATION_SPEED = 500;
  const traversal = "preorder";

  useEffect(() => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let prevLetter = null;
    var Final_array = [];
    for (var i = 0; i < 4; i++) {
      var Each_Row = [];
      for (var j = 0; j < Math.pow(2, i); j++) {
        let letter = null;
        while (!letter || (prevLetter && prevLetter.includes(letter))) {
          letter = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        prevLetter += letter;
        Each_Row.push(letter);
        if (tree.length != 0)
          document.getElementById(`${i}-${j}-${traversal}`).className =
            "common row_each_Element";
      }
      Final_array.push(Each_Row);
    }
    setTree(Final_array);
  }, [regenerate]);

  const GenerateTree = () => {
    setRegenerate((regenerate) => ++regenerate);
  };

  const preordertraversal = () => {
    const animation = getpreordertraversal(tree);
    for (var i = 0; i < animation.length; i++) {
      const new_I = i;
      setTimeout(() => {
        document.getElementById(
          `${animation[new_I][0]}-${animation[new_I][1]}-${traversal}`
        ).className = "common visited";
      }, ANIMATION_SPEED * i);
    }
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.container + "relative"}>
      {/* <BackButton /> */}
      <h1 className="text-center text-3xl px-2 md:text-5xl font-bold tracking-tight my-3">Preorder Traversal</h1>

      <div className="my-4 mx-auto flex gap-4 w-fit items-center">
        <p className="font-semibold text-lg">
          <em className="font-normal">Time Complexity:</em>{" "}  {Algos.treeTraversal[1].timeComplexity}
        </p>
        <button
          onClick={handleClickOpen}
          className="text-white px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          View more
        </button>
        <Box>
          <AlgoInfo
            open={open}
            handleClose={handleClickOpen}
            data={{
              type: "treeTraversal",
              index: 1
            }}
          />
        </Box>
      </div>
      <div className={classes.Trees}>
        {tree.map((row, index) => (
          <div key={index} className={classes.row}>
            {row.map((element, element_index) => (
              <TreeNode
                key={element_index}
                row={index}
                col={element_index}
                element={element}
                traversal={traversal}
              ></TreeNode>
            ))}
          </div>
        ))}
      </div>
      <div className={classes.button}>
        <button
          className="text-blue-700 hover:text-white border border-blue-500 bg-white hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-1.5 text-center"
          onClick={() => {
            GenerateTree();
          }}
        >
          Generate Tree
        </button>
        <button
          className="text-blue-700 hover:text-white border border-blue-500 bg-white hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-1.5 text-center"
          onClick={() => {
            preordertraversal();
          }}
        >
          Preorder Traversal
        </button>
      </div>
    </div>
  );
};

export default PreorderTraversal;
