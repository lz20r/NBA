fetch('../xml/nba.xml')
  .then(response => response.text())
  .then(xmlString => {
    // Parse the XML string into a DOM object
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, 'text/xml');
 
    // Extract the "pabellon" elements
    let pabellones = xmlDoc.getElementsByTagName('pabellon');
    
    
    // Create the table element
      let table = document.createElement('table');
      table.classList.add('table-style');
      
    let pabel = document.createElement('h1');
      pabel.textContent = "Pabellones";
      table.appendChild(pabel);
 
    // Create and append table header row
    let headerRow = document.createElement('tr');
      headerRow.classList.add('header-row');
    for (let attribute of ['Nombre', 'Ciudad', 'Capacidad']) {
        let th = document.createElement('th');
        th.textContent = attribute;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
 
    // Iterate over each "pabellon" element and create table rows and cells
    for (let pabellon of pabellones) {
        let row = document.createElement('tr');
        for (let attribute of ['nombre', 'ciudad', 'capacidad']) {
            let cell = document.createElement('td');
            cell.textContent = pabellon.getAttribute(attribute);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }   
 
    // Append the table to an existing HTML element with id 'table-container'
      document.body.appendChild(table);
      
 
 
 
 
 
 
    // Extract the "premios" elements
    let premios = xmlDoc.getElementsByTagName('premio');
      
    let div = document.createElement('div');
      
    let premi = document.createElement('h1');
      premi.textContent = "Premios";
      div.appendChild(premi);
 
    // Iterate over each "premio" element and create paraghraph
    for (let pre of premios) {
        let para = document.createElement('p');
        for (let attribute of ['nombre', 'descripcion']) {
            let cell = document.createElement('p');
            cell.textContent = pre.getAttribute(attribute);
            para.appendChild(cell);
        }
        div.appendChild(para);
    }

    // Append the table to an existing HTML element with id 'table-container'
    document.body.appendChild(div);
    
})
    .catch(error => {
        console.error('Error fetching XML:', error);
    });