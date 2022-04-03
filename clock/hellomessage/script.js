function fun(){
    let inputvalue = document.querySelector('[data-input]').value;
    let str = "Today is "

    const d = new Date();
     let a =d.getDay()
    //  console.log(a);
    switch(a){
      
             case 0:
             document.querySelector('[data-day]').innerHTML = str +"sunday " + inputvalue;
              break;
             case 1:
             document.querySelector('[data-day]').innerHTML = str+"Monday " + inputvalue;
              break;
             case 2:
             document.querySelector('[data-day]').innerHTML = str+"theusday " + inputvalue;
              break;
             case 3:
             document.querySelector('[data-day]').innerHTML = str+"wednesday " + inputvalue;
              break;
             case 4:
             document.querySelector('[data-day]').innerHTML = str+"thursday " + inputvalue;
              break;
             case 5:
             document.querySelector('[data-day]').innerHTML = str+"Friday " + inputvalue;
              break;
             case 6:
             document.querySelector('[data-day]').innerHTML = str+"saturday " + inputvalue;
              break;
                     
    }
}