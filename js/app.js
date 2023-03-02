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
let fullName = document.querySelector('#fullName');
let age = document.querySelector('#age');
let country = document.querySelector('#country');
let mail = document.querySelector('#mail');
let address = document.querySelector('#address');
let image = document.querySelector('#profileImagePhoto');
var randomUser;

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
    age.innerHTML = `${randomUser[0].dob.age}`;
    country.innerHTML = `${randomUser[0].location.country}`;
    mail.innerHTML = `${randomUser[0].email}`;
    address.innerHTML = `${randomUser[0].location.city}`;
}

dataModifier();