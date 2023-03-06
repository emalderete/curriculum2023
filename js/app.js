let fullName = document.querySelector('#fullName');
let age = document.querySelector('#age');
let country = document.querySelector('#country');
let mail = document.querySelector('#mail');
let address = document.querySelector('#address');
let image = document.querySelector('#profileImagePhoto');
let info = document.querySelector('#info');
let cell = document.querySelector('#phone');
var randomUser;



async function fetchData() {
    let response = await fetch('https://randomuser.me/api/');
    let dataJson = response.json();
    return dataJson;
}

async function dataModifier() {
    let data = await fetchData();
    let dataString = JSON.stringify(data);
    let dataParse = JSON.parse(dataString);
    randomUser = dataParse.results;
    fullName.innerHTML = `${randomUser[0].name.first} ${randomUser[0].name.last}`;
    image.setAttribute('src', `${randomUser[0].picture.large}`);
    age.innerHTML = `${randomUser[0].dob.age} años`;
    country.innerHTML = `${randomUser[0].location.country}`;
    mail.innerHTML = `${randomUser[0].email}`;
    address.innerHTML = `${randomUser[0].location.city}`;
    info.innerHTML = `<b>Hola! Mi nombre es ${randomUser[0].name.first}, ${randomUser[0].gender === "male" ? "Desarrollador" : "Desarrolladora"} FullStack.</b><br>Soy una persona creativa, orientada a resultados, enfocada en el cliente, con una sólida trayectoria en desarrollo frontend empleando React y javascript, así como Node.js
    con Express para el desarrollo backend, y me encuentro en la búsqueda de nuevos desafíos que me permitan seguir creciendo profesionalmente.`;
    cell.innerHTML = `${randomUser[0].cell}`;
}

dataModifier();