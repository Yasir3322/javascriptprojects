function myfun(){
   let inputvalue = document.getElementById('field').value;
   let arr = [];
   do{
        let a = inputvalue/2;
        let b = inputvalue%2;
        arr.push(Math.floor(b));
        inputvalue = a;
   }while(inputvalue>=2)
   arr.push(Math.floor(inputvalue));
  
   document.getElementById('result').innerHTML = arr.reverse();
  

}