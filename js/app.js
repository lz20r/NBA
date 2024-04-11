/**
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @email nlezametar538@alumnos.imf.com
 * @author Jashanjeet Singh Kuka
 * @email kjashanjeets739@alumnos.imf.com
 */

let header = document.createElement('header'); // Creamos un header
header.className = "header"; // Añadimos una clase al header
document.body.appendChild(header); // Añadimos el header al body

let h1 = document.createElement('h1'); // Creamos un h1
h1.textContent = "NBA"; // Añadimos el texto al h1
header.appendChild(h1); // Añadimos el h1 al header

let nav = document.createElement('nav'); // Creamos un nav
nav.className = "nav"; // Añadimos una clase al nav
header.appendChild(nav); // Añadimos el nav al header

let ul = document.createElement('ul'); // Creamos un ul
nav.appendChild(ul); // Añadimos el ul al nav

let li = document.createElement('li'); // Creamos un li
ul.appendChild(li); // Añadimos el li al ul

let a = document.createElement('a'); // Creamos un a
a.textContent = "Inicio"; // Añadimos el texto al a
a.href = "../index.html"; // Añadimos la ruta al a
li.appendChild(a); // Añadimos el a al li

let li2 = document.createElement('li'); // Creamos un li
ul.appendChild(li2); // Añadimos el li al ul

let a2 = document.createElement('a'); // Creamos un a
a2.textContent = "Equipos"; // Añadimos el texto al a
a2.href = "equipos.html"; // Añadimos la ruta al a
li2.appendChild(a2); // Añadimos el a al li

let li3 = document.createElement('li'); // Creamos un li
ul.appendChild(li3); // Añadimos el li al ul

let a3 = document.createElement('a'); // Creamos un a
a3.textContent = "Jugadores"; // Añadimos el texto al a
a3.href = "jugadores.html"; // Añadimos la ruta al a
li3.appendChild(a3); // Añadimos el a al li

let li4 = document.createElement('li'); // Creamos un li
ul.appendChild(li4); // Añadimos el li al ul
let a4 = document.createElement('a'); // Creamos un a
a4.textContent = "Estadísticas"; // Añadimos el texto al a
a4.href = "estadisticas.html"; // Añadimos la ruta al a
li4.appendChild(a4); // Añadimos el a al li

let li5 = document.createElement('li'); // Creamos un li
ul.appendChild(li5); // Añadimos el li al ul
let a5 = document.createElement('a'); // Creamos un a
a5.textContent = "Contacto"; // Añadimos el texto al a
a5.href = "contacto.html"; // Añadimos la ruta al a
li5.appendChild(a5); // Añadimos el a al li



fetch("../json/franquicias.json") // Hacemos una petición GET al servidor
.then(response => response.json()) // Convertimos el json a objeto
.then(data => {  // data es el objeto que se obtiene del json 
    data.franquicias.forEach(equipo => { 
        let body = document.body;
        body.className = "body";

        let main = document.createElement('main'); // Creamos un main
        body.appendChild(main); // Añadimos el main al body
        
        let container = document.createElement("div"); // Obtenemos el div con id container
        main.appendChild(container);
        container.className = "container"; // Añadimos una clase al div

        let card = document.createElement("div"); // Creamos un div
        card.className = "card"; // Añadimos una clase al div
        
        let cardHeader = document.createElement("div"); // Creamos un div
        cardHeader.className = "card-header"; // Añadimos una clase al div
        card.appendChild(cardHeader); // Añadimos el div al card

        let cardBody = document.createElement("div"); // Creamos un div
        cardBody.className = "card-body"; // Añadimos una clase al div
        card.appendChild(cardBody); // Añadimos el div al card

        let escudo = equipo.nombre.split(' ').pop(); // Obtenemos el último elemento del array
        let img = document.createElement('img'); // Creamos una imagen
        img.src = `../img/${equipo.division}/${escudo}.svg`; // Añadimos la ruta de la imagen
        img.className = "img"; // Añadimos una clase a la imagen
        cardBody.appendChild(img); // Añadimos la imagen al cardBody
 
        let nombre = document.createElement('nombre'); // Creamos un h5
        nombre.textContent = equipo.nombre; // Añadimos el nombre del equipo al h5
        cardBody.appendChild(nombre); // Añadimos el h5 al cardBody
        
        let ciudad = document.createElement('ciudad'); // Creamos un h5
        ciudad.textContent = equipo.ciudad; // Añadimos la ciudad del equipo al h5
        cardBody.appendChild(ciudad); // Añadimos el h5 al cardBody

        let estado = document.createElement('estado'); // Creamos un h5
        estado.textContent = equipo.estado; // Añadimos el estado del equipo al h5
        cardBody.appendChild(estado); // Añadimos el h5 al cardBody

        let conferencia = document.createElement('conferencia'); // Creamos un h5
        conferencia.textContent = equipo.conferencia; // Añadimos la conferencia del equipo al h5
        cardBody.appendChild(conferencia); // Añadimos el h5 al cardBody

        let division = document.createElement('division'); // Creamos un h5
        division.textContent = equipo.division; // Añadimos la división del equipo al h5
        cardBody.appendChild(division); // Añadimos el h5 al cardBody

        let fundado = document.createElement('fundado'); // Creamos un h5
        fundado.textContent = equipo.fundado; // Añadimos el año de fundación del equipo al h5
        cardBody.appendChild(fundado); // Añadimos el h5 al cardBody


        
        

        container.appendChild(card);
    });  
})
.catch(error => console.error('error', error));

card.innerHTML = `
            <div class="card-header">
            <div class="card-body">
                <img src="${img.src}"> 
                <h5>${equipo.nombre}</h5>
                <h5>${equipo.ciudad}</h5>
                <h5>${equipo.estado}</h5>
                <h5>${equipo.conferencia}</h5>
                <h5>${equipo.division}</h5>
                <h5>${equipo.fundado}</h5>
            </div>
        `;