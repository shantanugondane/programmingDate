const buttonHeight = 100;
const buttonWidth = 150;

let maxWidth = window.innerWidth - buttonWidth;
let maxHeight = window.innerHeight - buttonHeight;

const responses = [
    "NO!!! ;A;",
    "I think you've made a mistake. try again?",
    "NO! please think again !",
    "please give me a chance",
    "This is serious business, stop messing around!",
    "WRONG ANSWER!",
    "Press again to confirm :c",
    "if you love me, you would say yes",
    "I will be very happy if you press the other button :D",
    "listen, this isn't funny no more >:c",
    "I will do whatever you want me to do, please say yes :c",
    "reconsider please?"
];


window.addEventListener('DOMContentLoaded', () => {
    const gif = document.getElementById('gif')
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const icon = document.getElementById('noIcon');
    const headerText = document.getElementById('header_text');

    noButton.addEventListener('mouseover', () => {
        let response = responses[Math.floor(Math.random() * responses.length)];
        headerText.innerHTML = response;
        
        let maxWidth = window.innerWidth - buttonWidth;
        let maxHeight = window.innerHeight - buttonHeight;

        icon.src = "https://media.tenor.com/xggBaDYUIaIAAAAi/dudu-bubu.gif";
        gif.src = "https://media.tenor.com/Pbv3D2Gk_uYAAAAi/dudu-bubu.gif";

        noButton.style.position = 'absolute';
        noButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })
    
    yesButton.addEventListener('mouseover', () => {
        icon.src = 'img/no_icon.svg';
        gif.src = "https://media.tenor.com/Ck2Rk9PDIQIAAAAi/baby-bubu-bubu-dudu.gif";
        headerText.innerHTML = "click the button ";
    })

    yesButton.addEventListener('click', () => {
        window.location.href = "yes.html"
    })

});