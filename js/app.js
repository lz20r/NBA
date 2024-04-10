/**
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @email nlezametar538@alumnos.imf.com
 * @author Jashanjeet Singh Kuka
 * @email kjashanjeets739@alumnos.imf.com
 */

fetch('/json/franquicias.json')
    .then(data => data.json())
    .then(data => {
    pintarDatos(data);
})
    .catch(error => console.log("Error, no carga correctamente"));

    function pintarDatos(data){
        console.log(data["franquicias"]);
    
        let div_content = document.getElementById('content');
    
        for(let fran in data["franquicias"]){
            // Por cada iteracion, creo la card y la coloco
    
            // 1. crear la card
            let div = document.createElement('div');
            div.classList.add('card');
    
            // 2. Crear etiqueta h1
            let h1 = document.createElement('h1');
            h1.textContent = "Nombre: " + data["franquicias"][fran]["nombre"];
            div.appendChild(h1);
    
            // 3. Crear etiqueta h5 de ciudad.
            let ciudad = document.createElement('h5');
            h5.textContent = "Ciudad: " + data["franquicias"][fran]["ciudad"];
            div.appendChild(ciudad);
    
            // 4. Crear etiqueta h5 de estado.
            let estado = document.createElement('h5');
            h5.textContent = "Estado: " + data["franquicias"][fran]["estado"];
            div.appendChild(estado);
    
            // 5. Crear etiqueta h5 de conferencia.
            let conferencia = document.createElement('h5');
            h5.textContent = "Conferencia: " + data["franquicias"][fran]["conferencia"];
            div.appendChild(conferencia);
    
            // 6. Crear etiqueta h5 de division.
            let division = document.createElement('h5');
            h5.textContent = "Division: " + data["franquicias"][fran]["division"];
            div.appendChild(division);
    
            // 7. Crear etiqueta h5 de fundado.
            let fundado = document.createElement('h5');
            h5.textContent = "Fundado: " + data["franquicias"][fran]["fundado"];
            div.appendChild(fundado);

            div_content.appendChild(div);
        }
    }
