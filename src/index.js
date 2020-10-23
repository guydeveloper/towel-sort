
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];

    return matrix.reduce((acc, item, idx) => {
        if ((idx & 1)) {
            for (let i = item.length - 1; i >= 0; i -= 1) {
                acc.push(item[i]);
            }
        } else {
            for (let i = 0; i < item.length; i += 1) {
                acc.push(item[i]);
            }
        }
        return acc;
    }, []);
}
