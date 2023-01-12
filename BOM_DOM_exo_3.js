function createTable() {
    let rows = parseInt(prompt("Entrez le nombre de lignes pour le tableau :"));
    let cols = parseInt(prompt("Entrez le nombre de colonnes pour le tableau :"));
  
    // créer un élément table
    let table = document.createElement("table");
  
    // ajouter des lignes et des colonnes
    for (let i = 0; i < rows; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < cols; j++) {
          let td = document.createElement("td");
          td.innerHTML = `Ligne-${i} Colonne-${j}`;
          tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  