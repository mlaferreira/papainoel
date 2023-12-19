const btn = document.querySelector('.btn');
const countCard = document.querySelector('#card-count');
const audioPapaiNoel = new Audio('assets/audio/merry-christmas.mp3');
const audioConfetti = new Audio('assets/audio/confetti.wav');
audioConfetti.volume = 0.2;
audioPapaiNoel.volume = 0.4;


var count = 0;

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(count === 0){
        countCard.style.display = 'flex';
    }
    
        count++;
        countCard.innerText = count;
       audioConfetti.play();
       audioPapaiNoel.play();
       handleConfettiEffect()

})