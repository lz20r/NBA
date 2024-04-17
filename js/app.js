/**
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @email nlezametar538@alumnos.imf.com
 * @author Jashanjeet Singh Kuka
 * @email kjashanjeets739@alumnos.imf.com
 */ 

fetch("../json/franquicias.json")
.then(equipo => equipo.json())
.then(equipo => {    
    //console.log(equipo); 
    header();
    //home();
    equipos(equipo);    
    createBackToTopButton();
    
}).catch(error => console.error('error', error)); // Capturamos el error si lo hay

fetch('../xml/nba.xml')
.then(response => response.text())
.then(info => {   
    jugadores(info); 
    pabellones(info);
    premios(info); 
    dirigentes(info);
    footer();
}).catch(error => console.error('error', error)); // Capturamos el error si lo hay


    /**
     * Función que crea las cards de los equipo
     * @param {*} equipo 
     */

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

            // QUE ES ESTO JAJA
            let section = document.createElement('section');
            section.className = 'equipos';


            let card = document.createElement('div');
            card.className = 'card';
            equipos.appendChild(card);  

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

            let cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardInner.appendChild(cardBack);

            let cardCity = document.createElement('h5');
            cardCity.className = 'card-city';
            cardCity.textContent = equipo.ciudad;
            cardBack.appendChild(cardCity);

            let cardState = document.createElement('h5');
            cardState.className = 'card-state';
            cardState.textContent = equipo.estado;
            cardBack.appendChild(cardState);

            let cardConference = document.createElement('h5');
            cardConference.className = 'card-conference';
            cardConference.textContent = equipo.conferencia;
            cardBack.appendChild(cardConference);

            let cardDivision = document.createElement('h5');
            cardDivision.className = 'card-division';
            cardDivision.textContent = equipo.division;
            cardBack.appendChild(cardDivision);

            let cardFounded = document.createElement('h5');
            cardFounded.className = 'card-founded';
            cardFounded.textContent = equipo.fundado;
            cardBack.appendChild(cardFounded);
        }); 
    } 

    function jugadores(info) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(info, 'application/xml');
        let table = document.createElement('table');
        table.classList.add('table-style');

        let jugadores = crearSection();
        jugadores.id = "jugadores";
        let h1 = document.createElement('h1');
        h1.textContent = "Jugadores";
        jugadores.appendChild(h1);

        // Extract the "jugador" elements
        let jug = xmlDoc.getElementsByTagName('jugador');
 

        // Iterate over each "jugador" element and create table rows and cells
        for (let jugador of jug) {

            let card = document.createElement('div');
            card.className = 'card';
            jugadores.appendChild(card);

            let cardInner = document.createElement('div');
            cardInner.className = 'card-inner';
            card.appendChild(cardInner);

            let imagen =  jugador.getAttribute('nombre').replace(' ', '-').toLowerCase(); // Obtenemos el último elemento del array
            let img = document.createElement('img'); // Creamos una imagen
            img.src = `../jugadores/${imagen}.png`; // Añadimos la ruta de la imagen
            img.className = "img"; // Añadimos una clase a la imagen
            cardInner.appendChild(img); // Añadimos la imagen al cardBody

            let cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            cardInner.appendChild(cardFront);

            let cardInfo = document.createElement('h5');
            cardInfo.className = 'card-name';
            cardInfo.textContent = jugador.getAttribute('nombre');
            cardFront.appendChild(cardInfo);

            let cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardInner.appendChild(cardBack);

            let cardPosition = document.createElement('h5');
            cardPosition.className = 'card-position';
            cardPosition.textContent = jugador.getAttribute('posicion');
            cardBack.appendChild(cardPosition);

            let cardNumber = document.createElement('h5');
            cardNumber.className = 'card-number';
            cardNumber.textContent = jugador.getAttribute('numero');
            cardBack.appendChild(cardNumber);

            let cardTeam = document.createElement('h5');
            cardTeam.className = 'card-team';
            cardTeam.textContent = jugador.getAttribute('equipo_actual');
            cardBack.appendChild(cardTeam);

            let CardNickname = document.createElement('h5');
            CardNickname.className = 'card-nickname';
            CardNickname.textContent = jugador.getAttribute('apodo');
            cardBack.appendChild(CardNickname);
        }
        document.body.appendChild(table);
    }

    function pabellones(info) {
        // Parse the XML string into a DOM object
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(info, 'text/xml');

        // Extract the "pabellon" elements
        let pabellones = xmlDoc.getElementsByTagName('pabellon');
 
        // Create the table element
        let table = document.createElement('table');
        table.classList.add('table-style');

        // Create the table header
        let thead = document.createElement('thead');
        let headerRow = document.createElement('tr');
        headerRow.classList.add('header-row');
        for (let attribute of ['Nombre', 'Ciudad', 'Capacidad']) {
            let th = document.createElement('th');
            th.textContent = attribute;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create the table body
        let tbody = document.createElement('tbody');

        // Iterate over each "pabellon" element and create table rows and cells
        for (let pabellon of pabellones) {
            let row = document.createElement('tr');
            for (let attribute of ['nombre', 'ciudad', 'capacidad']) {
                let cell = document.createElement('td');
                cell.textContent = pabellon.getAttribute(attribute);
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }

        // Append the tbody to the table
        table.appendChild(tbody);

        // Add a heading for the table
        let pabel = document.createElement('h1');
        pabel.id = 'pabellones'; // Add ID to the div container 
        pabel.textContent = "Pabellones";

        // Append the heading and table to the document body
        document.body.appendChild(pabel);
        document.body.appendChild(table);


        // Append the table to an existing HTML element with id 'table-container'
        document.body.appendChild(table);
    }

    function premios(info) {
        // Parse the XML string into a DOM object
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(info, 'text/xml');

        // Extract the "premmios" elements
        let premios = xmlDoc.getElementsByTagName('premio');
        
        let div = document.createElement('div');
        div.id = 'premios-container'; // Add ID to the div container

        let premi = document.createElement('h1');
        premi.id = 'premios'; //  
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
    }

    function dirigentes(info) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(info, 'text/xml');

        // Creating Dirigentes container
        const diri = document.createElement('div');
        diri.className = 'style';

        // Creating Dirigentes
        let dirigentes = crearSection();
        dirigentes.id = "dirigentes";
        let h1 = document.createElement('h1');
        h1.textContent = "Dirigentes";
        dirigentes.appendChild(h1);
        
        // Extracting data from the DOM object
        const comisionado = xmlDoc.querySelector('comisionado').getAttribute('nombre');
        const añosEnElPuesto = xmlDoc.querySelector('comisionado').getAttribute('años_en_el_puesto');
        const viceComisionado = xmlDoc.querySelector('vice_comisionado').getAttribute('nombre');

        // Creating div elements
        const datos = document.createElement('div');
        const p1 = document.createElement('p');
        p1.className = 'p1style';
        const p2 = document.createElement('p');
        p2.className = 'p1style';

        // Adding text to the div elements
        p1.textContent = `Comisionado: ${comisionado} (Años en el puesto: ${añosEnElPuesto})`;
        p2.textContent = `Vice comisionado: ${viceComisionado}`;
        datos.appendChild(p2);
        datos.appendChild(p1);
        dirigentes.appendChild(datos);

        // Creating div elements
        const datos2 = document.createElement('div');
        const p3 = document.createElement('p');
        p3.className = 'p1style';
        const p4 = document.createElement('p');
        p4.className = 'p1style';
        
        // Adding text to the div elements
        dirigentes.appendChild(datos2);

        // Append the table to an existing HTML element with id 'table-container'
        document.body.appendChild(diri);

        
        
    }
// FUNCIONES DE CREACIÓN DE ELEMENTOS HTML
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
    

    function header() {   
        let header = crearHeader(); // Creamos el header
        let ul = crearNav(header); // Creamos el nav y obtenemos el ul creado

        // Agregamos elementos a la lista
        //agregarElementoLista(ul, "Inicio", "#home"); // Añadimos el primer elemento a la lista del nav
        agregarElementoLista(ul, "Equipos", "#equipos"); // Añadimos el segundo elemento a la lista del nav
        agregarElementoLista(ul, "Jugadores", "#jugadores"); // Añadimos el sexto elemento a la lista del nav
        agregarElementoLista(ul, "Pabellones", "#pabellones"); // Añadimos el tercer elemento a la lista del nav
        agregarElementoLista(ul, "Premios", "#premios"); // Añadimos el tercer elemento a la lista del nav
        agregarElementoLista(ul, "Dirigentes", "#dirigentes"); // Añadimos el séptimo elemento a la lista del nav

    } // Función que crea el header con el nav y la lista de elementos

    function crearFooter() {
        let footer = document.createElement('footer'); // Creamos un footer
        document.body.appendChild(footer); // Añadimos el footer al body 
        return footer; // Devolvemos el footer para poder manipularlo fuera de esta función si es necesario
    } // Función que crea el footer con un h1

    function footer() {
        let footer = crearFooter(); // Creamos el footer
        
        footer.appendChild(h1("Naiara Zhiyao Lezameta Rodrgo")); // Añadimos un h1 al footer
        footer.appendChild(h1("Jashanjeet Singh Kuka")); // Añadimos un h1 al footer
    } // Función que crea el footer

    function createBackToTopButton() {
        // Crear el botón
        const button = document.createElement('button');
        button.classList.add('back-to-top');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.onclick = scrollToTop;
    
        // Agregar el botón al cuerpo del documento
        document.body.appendChild(button);
    }
    
    // Función para hacer scroll hacia arriba
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } 
    