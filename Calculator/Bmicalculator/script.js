let  myfun=()=>{
    
    let P = document.getElementById('field1').value;
    let IR = document.getElementById('perfield').value;
    let Tenure = document.getElementById('myselect').value;

    let Interest = (P * IR * 0.01 ) / Tenure;
   let  payment = ((P/Tenure) + Interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById('para').innerHTML = payment;





}