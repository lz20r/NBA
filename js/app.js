/**
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @email nlezametar538@alumnos.imf.com
 * @author Jashanjeet Singh Kuka
 * @email kjashanjeets739@alumnos.imf.com
 */

fetch('/json/franquicias.json')
    .then(response => response.json())
    .then(data => {   
        
    })
    .catch(error => console.error("Error ",error));
