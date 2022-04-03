function changecolor(x){
     x.style.background = 'peru';
}

function myfun(choose){
     let inputvalue = document.getElementById('field').value;

    //  console.log(choose)
     switch(choose){
         case 'pound':
             let result = inputvalue * 2.2;
             document.getElementById('btn').onclick = function () {document.getElementById('result').innerHTML = result;}
                break;
             case 'gram':
             let r3 = inputvalue * 1000;
            document.getElementById('btn').onclick = function(){document.getElementById('result').innerHTML = r3;}
                break;
              case 'Ounces':
             let r5 = inputvalue * 35.274;
             document.getElementById('btn').onclick=function(){document.getElementById('result').innerHTML=r5;}
              break;
              case 'Milligram':
                let r2 = inputvalue * 1000000;
                document.getElementById('btn').onclick=function(){document.getElementById('result').innerHTML=r2;}
                   break;
            }
}