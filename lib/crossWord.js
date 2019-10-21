/*
Example:
  var grid = ["GEEKSFORGEEKS",
              "GEEKSQUIZGEEK",
              "IDEQAPRACTICE"];

  var word = "GEEKS";

  crossWord(grid,word);
*/
function checkPattern(grid, word, row, col) {
  var dirArr = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (var dir = 0; dir < dirArr.length; dir++) {
    var rd = row + dirArr[dir][0];
    var cd = col + dirArr[dir][1];

    for (var k = 1; k < word.length; k++) {
      if (rd < 0 || cd < 0 || rd == grid.length || cd == grid[0].length) {
        break;
      }

      if (grid[rd][cd] !== word[k]) {
        break;
      }
      rd += dirArr[dir][0];
      cd += dirArr[dir][1];
    }

    if (k === word.length) {
      return true;
    }
  }
  return false;
}

function crossWord(grid, word) {
  var found = false;
  var machedPattern = [];
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      k = 0;
      if (word[0] == grid[i][j]) {
        found = checkPattern(grid, word, i, j);
        if (found) {
          machedPattern.push([1, j]);
        }
      }
    }
  }

  return machedPattern;
}
