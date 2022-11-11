for (let row = 1; row <= 7; row++) {
    for (let column = 1; column <= row; column++) {
      console.log("* ")
    };
    console.log("<br \>")
  };  


  let row = 1
while (row <= 7) {
  let column = 1;
  while (column <= row) {
    console.log("* ")
    column = column + 1
  };
  row = row + 1
  console.log('<br \>')
};