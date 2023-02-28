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
    social.style.margin = '0.5rem 8rem';
}

function cssSocialCorrectionOut(element) {
    element.classList.toggle('d-none');
    social.style.margin = '2.5rem 8rem';
}