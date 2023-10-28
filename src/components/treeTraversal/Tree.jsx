import React, { useState } from "react";
import PreorderTraversal from "./Preorder/PreorderTraversal";
import PostorderTraversal from "./Postorder/PostorderTraversal";
import InorderTranversal from "./Inorder/InorderTranversal";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Tree = () => {
  const [traversal, setTraversal] = useState("preorder");
  return (
    <div>
      <div className="flex gap-12 items-center justify-center bg-slate-100 py-6">
        <Link
          to="/visualize"
          className="font-bold py-2 px-5 pl-6 bg-blue-500 hover:bg-blue-600 rounded text-white flex items-center transition duration-150 ease-in-out"
        >
          <MdArrowBackIos size={20} />
        </Link>
        <button
          type="button"
          className="font-bold text-xl text-gray-800 hover:underline decoration-sky-500"
          onClick={() => {
            setTraversal("preorder");
          }}
        >
          Preorder Traversal
        </button>
        <button
          type="button"
          className="font-bold text-xl text-gray-800 hover:underline decoration-sky-500"
          onClick={() => {
            setTraversal("postorder");
          }}
        >
          Postorder Traversal
        </button>
        <button
          type="button"
          className="font-bold text-xl text-gray-800 hover:underline decoration-sky-500"
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
