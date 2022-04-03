function myfun(){
    var enteramount = document.getElementById('field').value;
     return enteramount;
   
}
function fun(x){
    x.style.background = "peru"
}
function itemsfun(choosen){
    let inputvalue = myfun();
    let xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://api.currencyfreaks.com/latest?apikey=a2abeb83bd4e46ac99ad67cc414ba8d0");
    xhr.onreadystatechange = function(){
          if(xhr.status == 200 && xhr.readyState == 4){
              let data = this.responseText;
              const json = JSON.parse(data);
              const {rates} = json;   
              switch(choosen){
                case "PKR":
                    let result = inputvalue * rates.PKR;
                    document.getElementById("result").innerHTML = result;
                    break;
                case "INR":
                    let result2 = inputvalue * rates.INR;
                    document.getElementById("result").innerHTML = result2;
                    break;
                case "FJD":
                    let result3 = inputvalue * rates.FJD;
                    document.getElementById("result").innerHTML = result3;
                    break;
                case "STD":
                    let result4 = inputvalue * rates.STD;
                    document.getElementById("result").innerHTML = result4;
                    break;
                case "ZAR":
                    let result5 = inputvalue * rates.INR;
                    document.getElementById("result").innerHTML = result5;
                    break;
            }
          }
    }
    xhr.send();

}
// function converter(value){

 
// }
