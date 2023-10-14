import React, { useState } from "react";
import PreorderTraversal from "./Preorder/PreorderTraversal";
import PostorderTraversal from "./Postorder/PostorderTraversal";
import InorderTranversal from "./Inorder/InorderTranversal";

const Tree = () => {
  const [traversal, setTraversal] = useState("preorder");
  return (
    <div>
      <div className="flex gap-5 items-center justify-center bg-slate-200 py-5">
        <button
          type="button"
          onClick={() => {
            setTraversal("preorder");
          }}
        >
          Preorder Traversal
        </button>
        <button
          type="button"
          onClick={() => {
            setTraversal("postorder");
          }}
        >
          Postorder Traversal
        </button>
        <button
          type="button"
          onClick={() => {
            setTraversal("inorder");
          }}
        >
          Inorder Traversal
        </button>
      </div>
      {traversal == "preorder" && <PreorderTraversal />}
      {traversal == "postorder" && <PostorderTraversal />}
      {traversal == "inorder" && <InorderTranversal />}
    </div>
  );
};

export default Tree;
