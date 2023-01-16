function createTable() {
  let rows = Number(prompt("Entrez le nombre de lignes : "));
  let cols = Number(prompt("Entrez le nombre de colonnes :"));

  if (rows == null || rows == "" || cols == null || cols == "") {
    alert("data entry is not valid , try again please");
    return;
  }
  let table = document.createElement("table");


  for (let i = 0; i < rows; i++) {
    let row = table.insertRow();

    for (let j = 0; j < cols; j++) {
      let cell = row.insertCell();
      cell.innerHTML = "row is" + i + " col is" + j;
    }
  }
}