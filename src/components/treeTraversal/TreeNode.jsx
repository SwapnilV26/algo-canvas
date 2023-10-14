import React from "react";
import "./TreeNode.css";

const TreeNode = ({ col, row, element, traversal }) => {
  return (
    <div
      id={`${row}-${col}-${traversal}`}
      className={`common row_each_Element`}
    >
      {element}
    </div>
  );
};
export default TreeNode;
