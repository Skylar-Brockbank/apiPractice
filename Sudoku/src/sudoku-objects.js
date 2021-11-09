export default function Board() {
  let column = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(j);
    }
    column.push(row);
  }
  this.spaces = column;
}