/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    let count = 0;
    for (let i = 0; i < preferences.length; i++) {
        let firstlove = preferences[i] - 1;
        if (firstlove == i) continue;
        let secondlove = preferences[firstlove] - 1;
        if (secondlove == firstlove) continue;
        let thirdlove = preferences[secondlove] - 1;
        if (thirdlove == secondlove) continue;
        if (thirdlove != i) continue;
        count++;
    }
    return count / 3;
};
