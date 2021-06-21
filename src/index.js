module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
    let i = 0;
    let newMatrix = [];
    for (i = 0; i < matrix.length; i++){
      if (i % 2 === 0) {
        newMatrix.push(matrix[i]);
      } else {
        newMatrix.push(matrix[i].reverse());
      }
    }
    
    let newArray = [];
    for (i = 0; i < newMatrix.length; i++) {
      newArray = newArray.concat(newMatrix[i]);
    }
  
    return newArray;
  }
