function reverseMatrices(matrices) {
    /**
     * This function takes an array of matrices and returns a new array with the order of the matrices reversed.
     *
     * @param {Array.<Array.<Array>>} matrices - An array where each element is a matrix (which is itself an array of arrays).
     * @returns {Array.<Array.<Array>>} - A new array with the matrices in reversed order.
     */
    return matrices.slice().reverse();
}

// Example usage
let matrices = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]],
    [[9, 10], [11, 12]]
];

let reversedMatrices = reverseMatrices(matrices);
console.log(reversedMatrices);
