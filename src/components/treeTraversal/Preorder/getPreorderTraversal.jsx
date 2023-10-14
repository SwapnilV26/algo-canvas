var animation = [];
function preorderTraversal(nodeIndex, tree1D) {
  if (nodeIndex >= tree1D.length) {
    return;
  }
  animation.push(tree1D[nodeIndex]);
  const leftChildIndex = 2 * nodeIndex + 1;
  const rightChildIndex = 2 * nodeIndex + 2;
  preorderTraversal(leftChildIndex, tree1D);
  preorderTraversal(rightChildIndex, tree1D);
}

export const getpreordertraversal = (tree) => {
  animation = [];
  var tree1D = [].concat(...tree);
  tree1D = [];
  for (var i = 0; i < tree.length; i++) {
    for (var j = 0; j < tree[i].length; j++) {
      tree1D.push([i + "", j + ""]);
    }
  }
  preorderTraversal(0, tree1D);
  return animation;
};
