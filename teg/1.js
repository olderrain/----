function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function sortedArrayToBST(nums) {
  // write code here
  let n = nums.length
  let start = 0
  let end = n - 1
  const dfs = (start, end) => {
    if (start <= end) {
      let mid = Math.floor((start + end) / 2)
      let node = new TreeNode(nums[mid])
      node.left = dfs(start, mid-1)
      node.right = dfs(mid+1, end)
      return node
    }else{
      return null
    }

  }
  let root = dfs(start, end)
  return root
}

sortedArrayToBST([-1, 0, 1, 2])