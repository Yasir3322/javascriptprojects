let x =10
let y =0;

do{
   y = x/2;
//    console.log(Math.floor(y));
   console.log(Math.floor(x%2));
   x = y;
//    console.log(x);

}while(x>2)
console.log(Math.floor(x));

