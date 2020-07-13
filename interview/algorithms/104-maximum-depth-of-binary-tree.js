/**
 * Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree
 * Difficulty: Easy
 * Language: JavaScript
 * Accepted date: 2017-03-24
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};