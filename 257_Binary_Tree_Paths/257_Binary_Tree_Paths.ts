// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];

    if (!root) return result; // ルートが null なら空の配列を返す

    function dfs(node: TreeNode, path: string) {
        if (!node.left && !node.right) { 
            // 葉ノードに到達したら、パスをリストに追加
            result.push(path);
            return;
        }

        // 左の子ノードがあれば探索
        if (node.left) {
            dfs(node.left, path + "->" + node.left.val);
        }

        // 右の子ノードがあれば探索
        if (node.right) {
            dfs(node.right, path + "->" + node.right.val);
        }
    }

    // ルートノードから探索開始
    dfs(root, `${root.val}`);

    return result;
}

