/**
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @email nlezametar538@alumnos.imf.com
 * @author Jashanjeet Singh Kuka
 * @email kjashanjeets739@alumnos.imf.com
 */ 

fetch("../json/franquicias.json")
.then(equipo => equipo.json())
.then(equipo => {    
    console.log(equipo.franquicias); 
    header(equipo);
    home();
    equipos(equipo);  
    pabellones(equipo);
    dirigentes(equipo);
    premios(equipo); 
    jugadores(equipo);

}).catch(error => console.error('error', error)); // Capturamos el error si lo hay

    /**
     * Función que crea las cards de los equipo
     * @param {*} equipo 
     */

 
    function crearSection() {
        let section = document.createElement('section'); // Creamos un section
        document.body.appendChild(section); // Añadimos el section al body
        return section; // Devolvemos el section para poder manipularlo fuera de esta función si es necesario
    } // Función que crea el section

    function h1(texto) {
        let h1 = document.createElement('h1'); // Creamos un h1
        h1.textContent = texto;
        return h1;
    } // Función que crea un h1 con un texto
 

    function crearHeader() {
        let header = document.createElement('header'); // Creamos un header 
        document.body.appendChild(header); // Añadimos el header al body 
        header.appendChild(h1("NBA")); // Añadimos un h1 al header 
        return header; // Devolvemos el header para poder manipularlo fuera de esta función si es necesario
    } // Función que crea el header con un h1


    function crearNav(header) {
        let nav = document.createElement('nav'); // Creamos el nav
        header.appendChild(nav); // Añadimos el nav al header
        let ul = document.createElement('ul'); // Creamos un ul
        nav.appendChild(ul); // Añadimos el ul al nav
        return ul; // Devolvemos el ul para poder añadir elementos a él fuera de esta función
    } // Función que crea el nav y el ul


    function agregarElementoLista(ul, texto, ruta) {
        let li = document.createElement('li'); // Creamos un li
        ul.appendChild(li); // Añadimos el li al ul
        let a = document.createElement('a'); // Creamos un a
        a.textContent = texto; // Añadimos el texto al a
        a.href = ruta; // Añadimos la ruta al a
        li.appendChild(a); // Añadimos el a al li
    } // Función que añade elementos a la lista del nav
    

    function header(equipo) {   
        let header = crearHeader(); // Creamos el header
        let ul = crearNav(header); // Creamos el nav y obtenemos el ul creado

        // Agregamos elementos a la lista
        agregarElementoLista(ul, "Inicio", "#home"); // Añadimos el primer elemento a la lista del nav
        agregarElementoLista(ul, "Equipos", "#equipos"); // Añadimos el segundo elemento a la lista del nav
        agregarElementoLista(ul, "Pabellones", "#pabellones"); // Añadimos el tercer elemento a la lista del nav
        agregarElementoLista(ul, "Dirigentes", "#dirigentes"); // Añadimos el séptimo elemento a la lista del nav
        agregarElementoLista(ul, "Premios", "#premios"); // Añadimos el tercer elemento a la lista del nav
        agregarElementoLista(ul, "Jugadores", "#jugadores"); // Añadimos el sexto elemento a la lista del nav

    } // Función que crea el header con el nav y la lista de elementos

    function home() {
        let home = crearSection(); // Creamos un section
        home.id = "home"; // Añadimos un id al section

        let h1 = document.createElement('h1'); // Creamos un h1
        h1.textContent = "Inicio"; // Añadimos un texto al h1
        home.appendChild(h1); // Añadimos el h1 al section
    } // Función que crea el contenido de la sección home

    function equipos(equipo) {
        let equipos = crearSection(); // Creamos un section
        equipos.id = "equipos"; // Añadimos un id al section

        let h1 = document.createElement('h1'); // Creamos un h1
        h1.textContent = "Equipos"; // Añadimos un texto al h1
        equipos.appendChild(h1); // Añadimos el h1 al section

        equipo.franquicias.forEach(equipo => { 
            let body = document.body;
            body.className = "body";

            let section = document.createElement('section');
            section.className = 'equipos';
            let card = document.createElement('div');
            card.className = 'card';
            document.body.appendChild(card);  

            let cardInner = document.createElement('div');
            cardInner.className = 'card-inner';
            card.appendChild(cardInner);

            let cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            cardInner.appendChild(cardFront);

            let escudo = equipo.nombre.split(' ').pop(); // Obtenemos el último elemento del array
            let img = document.createElement('img'); // Creamos una imagen
            img.src = `../img/${equipo.division}/${escudo}.svg`; // Añadimos la ruta de la imagen
            img.className = "img"; // Añadimos una clase a la imagen
            cardFront.appendChild(img); // Añadimos la imagen al cardBody
            

            let cardInfo = document.createElement('h5');
            cardInfo.className = 'card-name';
            cardInfo.textContent = equipo.nombre;
            cardFront.appendChild(cardInfo);
        }); 
    } 