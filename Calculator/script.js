function myfun(choose){

    switch(choose){
        case 'add':
           let input1 = document.getElementById('field').value
           let input2 = document.getElementById('field2').value

           let value1 =  parseInt (input1);
           let value2 = parseInt(input2) 
           let result = value1+value2;
           document.getElementById('para').innerHTML= result

           break;

           case 'subtract':
            let input3 = document.getElementById('field').value
            let input4 = document.getElementById('field2').value
 
            let value3 =  parseInt (input3);
            let value4 = parseInt(input4) 
            let result2 = value3 - value4;
            document.getElementById('para').innerHTML= result2

            break;
            
            case 'multiply':
                let input5 = document.getElementById('field').value
                let input6 = document.getElementById('field2').value
                
                let value5 =  parseInt (input5);
                let value6 = parseInt(input6) 
                let result3 = value5*value6;
                document.getElementById('para').innerHTML= result3

                break;
        }
    }
    
    
    