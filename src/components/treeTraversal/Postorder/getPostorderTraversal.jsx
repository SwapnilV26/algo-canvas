var animation = [];
function postorderTraversal(nodeIndex, tree1D) {
  if (nodeIndex >= tree1D.length) {
    return;
  }
  const leftChildIndex = 2 * nodeIndex + 1;
  const rightChildIndex = 2 * nodeIndex + 2;
  postorderTraversal(leftChildIndex, tree1D);
  postorderTraversal(rightChildIndex, tree1D);
  animation.push(tree1D[nodeIndex]);
}

export const getpostordertraversal = (tree) => {
  animation = [];
  var tree1D = [].concat(...tree);
  tree1D = [];
  for (var i = 0; i < tree.length; i++) {
    for (var j = 0; j < tree[i].length; j++) {
      tree1D.push([i + "", j + ""]);
    }
  }
  postorderTraversal(0, tree1D);
  return animation;
};
