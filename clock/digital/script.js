setInterval(setClock , 1000);

const hour = document.querySelector('[data-hour]');
const minut = document.querySelector('[data-minut]');
const second = document.querySelector('[data-second]');

function setClock(){

    
    const setdate =  new Date();

    const secondratio = setdate.getSeconds();
    const minuts = setdate.getMinutes();
    const hours = setdate.getHours();
    second.innerHTML= secondratio;
    minut.innerHTML = minuts + "   :   ";
    hour.innerHTML = hours + "    :  ";
}


// setClock()