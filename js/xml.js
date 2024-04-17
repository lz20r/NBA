fetch('../xml/nba.xml')
  .then(response => response.text())
  .then(info => {
    // Parse the XML string into a DOM object
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(info, 'text/xml');

    // Extract the "premmios" elements
    let premios = xmlDoc.getElementsByTagName('premio');
    
    let div = document.createElement('div');
    div.id = 'premios-container'; // Add ID to the div container

    let premi = document.createElement('h1');
    premi.id = 'premios-title'; //  
    premi.textContent = "Premios";
    div.appendChild(premi);

    // Iterate over each "premio" element and create paraghraph
    for (let pre of premios) {
        let para = document.createElement('p');
        for (let attribute of ['nombre']) {
            let heading = document.createElement('h2');
            heading.textContent = pre.getAttribute(attribute);
            para.appendChild(heading);
            for (let attribute of [ 'descripcion']) {
                let cell = document.createElement('p');
                cell.textContent = pre.getAttribute(attribute);
                para.appendChild(cell);
            }
        }
        div.appendChild(para);
    }

        // Append the table to an existing HTML element with id 'table-container'
        document.body.appendChild(div);    
    }).catch(error => { console.error('Error fetching XML:', error);});