//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this._matrix = matrix;
  }

  get rows() {
    const rows = [];

    this._matrix.split('\n').forEach(row => rows.push(row.split(' ')));

    rows.forEach((row, i) => {
      row.forEach((num, j) => {
        rows[i][j] = parseInt(num)
      })
    });

    return rows;
  }

  get columns() {
    const rows = this.rows;
    const columns = [];

    for (let i = 0; i < rows[0].length; i++) {
   
      const column = []

      for (let j = 0; j < rows.length; j++) {
        column.push(rows[j][i]);
      }
      columns.push(column);
    }

    return columns;
  }
}

