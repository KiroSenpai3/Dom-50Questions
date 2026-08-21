let searchBST = function (root, target) {
    while (root) {
        if (root.val == target) return root
        if (root.val < target) {
            root = root.right
        }
        else { root = root.left }
    }
}