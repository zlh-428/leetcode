// 递归法 ----------------------------------------------------------------

// 前序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = []

    const Traversal = (root) => {
        if (!root) return
        res.push(root.val)
        root.left && Traversal(root.left);
        root.right && Traversal(root.right);
    }

    Traversal(root)
    return res
};

// 中序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = []

    const Traversal = (root) => {
        if (!root) return
        Traversal(root.left)
        res.push(root.val)
        Traversal(root.right)
    }
    Traversal(root)
    return res
};

// 后序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = []

    const Traversal = (root) => {
        if (!root) return
        root.left && Traversal(root.left);
        root.right && Traversal(root.right);
        res.push(root.val)
    }

    Traversal(root)
    return res
};