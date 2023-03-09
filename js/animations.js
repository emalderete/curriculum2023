/** Animaciones
 * En esta página se desarrolla el código que dará animaciones a la página
 * 
 * inicio de animación de botones de redes sociales.
 * al apuntar un botón con el cursor, sobre los botones aparecerá el nombre de la red social
 * también se puede editar para que muestre el nombre de usuario de la persona en cada red social.
 */
let twitterLink = document.querySelector('#twitterLink');
let facebookLink = document.querySelector('#facebookLink');
let instagramLink = document.querySelector('#instagramLink');
let linkedinLink = document.querySelector('#linkedinLink');
let githubLink = document.querySelector('#githubLink');
let facebookDiv = document.querySelector('.facebookDiv');
let instagramDiv = document.querySelector('.instagramDiv');
let linkedinDiv = document.querySelector('.linkedinDiv');
let githubDiv = document.querySelector('.githubDiv');
let twitterDiv = document.querySelector('.twitterDiv');
let social = document.querySelector('.social');

twitterLink.addEventListener('mouseover', () => { cssSocialCorrectionIn(twitterDiv) });
twitterLink.addEventListener('mouseout', () => { cssSocialCorrectionOut(twitterDiv) });

facebookLink.addEventListener('mouseover', () => { cssSocialCorrectionIn(facebookDiv) });
facebookLink.addEventListener('mouseout', () => { cssSocialCorrectionOut(facebookDiv) });

instagramLink.addEventListener('mouseover', () => { cssSocialCorrectionIn(instagramDiv) });
instagramLink.addEventListener('mouseout', () => { cssSocialCorrectionOut(instagramDiv) });

githubLink.addEventListener('mouseover', () => { cssSocialCorrectionIn(githubDiv) });
githubLink.addEventListener('mouseout', () => { cssSocialCorrectionOut(githubDiv) });

linkedinLink.addEventListener('mouseover', () => { cssSocialCorrectionIn(linkedinDiv) });
linkedinLink.addEventListener('mouseout', () => { cssSocialCorrectionOut(linkedinDiv) });

function cssSocialCorrectionIn(element) {
    element.classList.toggle('d-none');
    social.style.marginTop = '0.5rem';
}

function cssSocialCorrectionOut(element) {
    element.classList.toggle('d-none');
    social.style.marginTop = '2.5rem';
}
// Fin de animaciones de redes sociales.

/** Inicio de animación de apertura y cierre de la tarjeta secundaria.
 * Definición de estados personalizados */
let handleFlip = document.querySelector('#handleFlip')
let stateSecondCard = false;

function toggleSecondCard(newState) {
    stateSecondCard = newState;
    let state = new CustomEvent('secondCard', { detail: stateSecondCard });
    document.dispatchEvent(state);
}

// function testingSecondCardState() {
//     stateSecondCard ? toggleSecondCard(false) : toggleSecondCard(true);
// }

// document.addEventListener('secondCard', (event) => { console.log("el evento cambio a " + event.detail) });

/** Se realiza un debug en el código para confirmar que trabaja correctamente, el mismo funciona devolviendo por consola el mensaje
 * "el evento cambio a true / false" dependiendo del click que se haya realizado sobre el botón desplegable en el lado
 * derecho de la tarjeta principal. */

// Declaramos las variables que invocan a los elementos que serán modificados con un cambio de estado

let mainCard = document.querySelector('.mainCard');
let secondaryCard = document.querySelector('.secondaryCard');
let openSecButton = document.querySelector('#openSecButton');
let closeSecButton = document.querySelector('#closeSecButton');
let secContent = document.querySelector('#content');

// Desarrollamos el escuchador de eventos que detonará los cambios.

document.addEventListener('secondCard', () => {
    mainCard.classList.toggle('moveCard');
    mainCard.classList.toggle('reverse');
    secondaryCard.classList.toggle('hideCard');
    openSecButton.classList.toggle('d-none');
    closeSecButton.classList.toggle('d-none');
    handleFlip.classList.toggle('d-none');
    stateSecondCard ? setTimeout(() => { secContent.classList.toggle('showContent') }, 1000) : secContent.classList.toggle('showContent');
});

/** Desarrollamos la función disparadora del evento,
 * esta función es llamada desde el botón en ángulo en el lado
 * derecho de la tarjeta principal*/

function secondaryCardHandler() {
    stateSecondCard ? toggleSecondCard(false) : toggleSecondCard(true);
}

/**
 * Desarrollamos la animación de volteo de la tarjeta principal.
 * primero definimos el nuevo estado.
 */

let flipped = false;

function toggleFlip(newState) {
    flipped = newState;
    let state = new CustomEvent('flippedCard', { detail: flipped });
    document.dispatchEvent(state);
}

// Ahora definimos las variables que faltan.
let main = document.querySelector('.mainContainer');

// Por último definimos un evento escuhcador y una función disparadora.

document.addEventListener('flippedCard', () => {
    main.classList.toggle('flipCard');
});

function toggleFlipHandler() {
    flipped ? toggleFlip(false) : toggleFlip(true);
}

// Ahora solo falta definir la funcionalidad de los botones
// para la vista móvil.

let openMobile = document.querySelector('#openMobile');
let closeMobile = document.querySelector('.mobileCloseButton');
let mobileMenu = document.querySelector('.mobileMenu');

function toggleMobile(){
    mobileMenu.classList.toggle('hideMobile');
}