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
      <div className="flex gap-2 items-center justify-center bg-slate-100 py-5">
        <Link
          to="/visualize"
          className="font-bold py-2 px-5 pl-6 mr-20 bg-blue-500 hover:bg-blue-600 rounded text-white flex items-center transition duration-150 ease-in-out"
        >
          <MdArrowBackIos size={20} />
        </Link>
        <button
          type="button"
          className={`font-bold text-lg text-gray-800 hover:bg-white hover:text-blue-500 py-2 px-5 rounded-md transition duration-150 ease-in-out  ${traversal === "preorder" && 'bg-white text-blue-500 border border-gray-200'}`}
          onClick={() => {
            setTraversal("preorder");
          }}
        >
          Preorder Traversal
        </button>
        <button
          type="button"
          className={`font-bold text-lg text-gray-800 hover:bg-white hover:text-blue-500 py-2 px-5 rounded-md transition duration-150 ease-in-out  ${traversal === "postorder" && 'bg-white text-blue-500 border border-gray-200'}`}
          onClick={() => {
            setTraversal("postorder");
          }}
        >
          Postorder Traversal
        </button>
        <button
          type="button"
          className={`font-bold text-lg text-gray-800 hover:bg-white hover:text-blue-500 py-2 px-5 rounded-md transition duration-150 ease-in-out  ${traversal === "inorder" && 'bg-white text-blue-500 border border-gray-200'}`}
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
