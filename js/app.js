/**
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @email nlezametar538@alumnos.imf.com
 * @author Jashanjeet Singh Kuka
 * @email kjashanjeets739@alumnos.imf.com
 */ 

/**
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
a2.className = "a2";
a2.textContent = "equipo"; // Añadimos el texto al a
a2.href = "equipo.html"; // Añadimos la ruta al a
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
        
        let section = document.createElement("div"); // Obtenemos el div con id section
        main.appendChild(section);
        section.className = "section"; // Añadimos una clase al div

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
 
        let nombre = document.createElement('h1'); // Creamos un h1
        nombre.textContent = equipo.nombre; // Añadimos el nombre del equipo al h1
        cardBody.appendChild(nombre); // Añadimos el h1 al cardBody
        
        let ciudad = document.createElement('h4'); // Creamos un h4
        ciudad.textContent = "Ciudad: " + equipo.ciudad; // Añadimos la ciudad del equipo al h4
        cardBody.appendChild(ciudad); // Añadimos el h4 al cardBody

        let estado = document.createElement('h4'); // Creamos un h4
        estado.textContent = "Estado: " + equipo.estado; // Añadimos el estado del equipo al h4
        cardBody.appendChild(estado); // Añadimos el h4 al cardBody

        let conferencia = document.createElement('h4'); // Creamos un h4
        conferencia.textContent = "Conferencia: " + equipo.conferencia; // Añadimos la conferencia del equipo al h4
        cardBody.appendChild(conferencia); // Añadimos el h4 al cardBody

        let division = document.createElement('h4'); // Creamos un h4
        division.textContent = "Division: " + equipo.division; // Añadimos la división del equipo al h4
        cardBody.appendChild(division); // Añadimos el h4 al cardBody

        let fundado = document.createElement('h4'); // Creamos un h4
        fundado.textContent = "Fundado: " + equipo.fundado; // Añadimos el año de fundación del equipo al h4
        cardBody.appendChild(fundado); // Añadimos el h4 al cardBody
 
        section.appendChild(card);
    });  

    let footer = document.createElement('footer'); // Creamos un footer
    footer.className = "footer"; // Añadimos una clase al footer
    document.body.appendChild(footer); // Añadimos el footer al body
    
    let p = document.createElement('p'); // Creamos un p
    p.textContent = "NBA 2021"; // Añadimos el texto al p
    footer.appendChild(p); // Añadimos el p al footer
})
.catch(error => console.error('error', error)); // Capturamos el error si lo hay
 */

fetch("../json/franquicias.json")
.then(equipo => equipo.json())
.then(equipo => {
    header("Equipo");
    
}).catch(error => console.error('error', error)); // Capturamos el error si lo hay

    /**
     * Función que crea las cards de los equipo
     * @param {*} equipo 
     */
    function crearHeader() {
        let header = document.createElement('header'); // Creamos un header 
        document.body.appendChild(header); // Añadimos el header al body
        let h1 = document.createElement('h1'); // Creamos un h1
        h1.textContent = "NBA"; // Añadimos el texto al h1
        header.appendChild(h1); // Añadimos el h1 al header   
        
        // Creamos el nav
        let nav = document.createElement('nav'); 
        header.appendChild(nav); // Añadimos el nav al header
        let ul = document.createElement('ul'); // Creamos un ul
        nav.appendChild(ul); // Añadimos el ul al nav
        return ul; // Devolvemos el ul para poder añadir elementos a él fuera de esta función
    }
    
    function agregarElementoLista(ul, texto, ruta) {
        let li = document.createElement('li'); // Creamos un li
        ul.appendChild(li); // Añadimos el li al ul
        let a = document.createElement('a'); // Creamos un a
        a.textContent = texto; // Añadimos el texto al a
        a.href = ruta; // Añadimos la ruta al a
        li.appendChild(a); // Añadimos el a al li
    }
    
    function header(equipo) { 
        // Creamos el body
        document.body 
    
        let ul = crearHeader(); // Creamos el header y obtenemos el ul creado
    
        // Agregamos elementos a la lista
        agregarElementoLista(ul, "Inicio", "#home");
        agregarElementoLista(ul, equipo, "#equipo");
        agregarElementoLista(ul, "Jugadores", "#jugadores");
        agregarElementoLista(ul, "Estadísticas", "#estadisticas");
        agregarElementoLista(ul, "Contacto", "#contacto");
    } 
    
    /**
     * Función que crea las cards de los equipo
     * @param {*} equipo 
     */

    function cards(equipo){

    }

