
const daysEl = document.querySelector('span#days');
const hoursEl = document.querySelector('span#hours');
const minutesEl = document.querySelector('span#minutes');
const secondsEl = document.querySelector('span#seconds');


const countDown = new Date( "Jan 1, 2024 00:00:00");
console.log(countDown);

const timer = setInterval( function(){
    
    const nowDate = new Date();
    const dateDifference = countDown.getTime() - nowDate.getTime();

    secondsEl.innerHTML = Math.floor((dateDifference % (60 * 1000)) / 1000);
    minutesEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    hoursEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysEl.innerHTML = Math.floor((dateDifference / (60 * 60 * 24 * 1000)));

    if ( dateDifference <= 0 ){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'HAPPY 2024!!';
    }

}, 1000);