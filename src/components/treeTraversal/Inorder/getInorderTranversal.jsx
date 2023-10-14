var animation = [];
function InorderTraversal(nodeIndex, tree1D) {
  if (nodeIndex >= tree1D.length) {
    return;
  }
  const leftChildIndex = 2 * nodeIndex + 1;
  const rightChildIndex = 2 * nodeIndex + 2;
  InorderTraversal(leftChildIndex, tree1D);
  animation.push(tree1D[nodeIndex]);
  InorderTraversal(rightChildIndex, tree1D);
}

export const getInordertraversal = (tree) => {
  animation = [];
  var tree1D = [].concat(...tree);
  tree1D = [];
  for (var i = 0; i < tree.length; i++) {
    for (var j = 0; j < tree[i].length; j++) {
      tree1D.push([i + "", j + ""]);
    }
  }
  InorderTraversal(0, tree1D);
  return animation;
};
