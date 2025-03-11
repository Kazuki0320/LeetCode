class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left? : TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
} 
 
 const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
//  console.log(binaryTreePaths(root))
console.log(root)
