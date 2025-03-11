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

function binaryTreePaths(root: TreeNode | null): string [] {
    const result: string[] = []

    if (!root) return result // ルートがnullなら、空の配列を返す

    function dfs(node: TreeNode, path: string) {
        if (!node.left && !node.right) {
            result.push(path)
            return
        }

        if (node.left) {
            dfs(node.left, path + "->" + node.left.val)
        }

        if (node.right) {
            dfs(node.right, path + "->" + node.right.val)
        }
    }

    dfs(root, `${root.val}`)

    return result
}

const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
 console.log(binaryTreePaths(root))
// console.log(root)
