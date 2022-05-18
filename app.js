const dayNum = document.querySelector('.days-num');
const hoursNum = document.querySelector('.hours-num');
const minNum = document.querySelector('.min-num');
const secNum = document.querySelector('.sec-num');

setInterval (() => {
    const launchDate = new Date ('sep 25-2022 12:20:00').getTime();
    const currentTime = new Date ().getTime();
    let timeGap = launchDate - currentTime

    const countDown = [{
        getDays : Math.floor(timeGap/(1000*60*60*24)),
        getHours : Math.floor((timeGap % (1000*60*60*24))/(1000*60*60)),
        getMin : Math.floor((timeGap % (1000*60*60))/(1000*60)),
        getSec : Math.floor((timeGap % (1000*60))/(1000)),
    }]

    countDown.map(({getDays,getHours,getMin,getSec}) => {
        dayNum.textContent = getDays;
        hoursNum.textContent = getHours;
        minNum.textContent = getMin;
        secNum.textContent = getSec;
    })
})