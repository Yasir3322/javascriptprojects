setInterval(setClock , 1000)

   const hourhand = document.querySelector('[data-hour-hand]');
   const minuthand = document.querySelector('[data-minut-hand]')
   const secondhand = document.querySelector('[data-second-hand]')

   const dighour = document.querySelector('[data-hour]')
   const digminut = document.querySelector('[data-minut]')
   const digsecond = document.querySelector('[data-second]')

function setClock(){
    const currdate = new Date();

    const secondratio = currdate.getSeconds()/60;
    const minutsratio = (secondratio + currdate.getMinutes())/60;
    const hourratio = (minutsratio + currdate.getHours())/12;

    setRotation(hourhand,hourratio)
    setRotation(minuthand,minutsratio)
    setRotation(secondhand,secondratio)


    const h = currdate.getHours();
    dighour.innerHTML = h+":";
    const m = currdate.getMinutes();
    digminut.innerHTML = m+":";
    const s = currdate.getSeconds();
    digsecond.innerHTML = s;
}

function setRotation(element , rotationRatio){

    element.style.setProperty('--rotation' , rotationRatio * 360)
}

setClock();