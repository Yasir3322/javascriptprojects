function myfun(choose){
    switch(choose){
        case 'foottocm':
            let input = document.createElement('input');
             input.setAttribute('type' , 'number');
             input.setAttribute('id' , 'field');
             input.setAttribute('min' , '1');
             input.autofocus;
             input.placeholder = "Type value in foot";
             let button = document.createElement('button');
             button.setAttribute('id' , 'btn');
             button.innerText = "convert";
             var div = document.getElementById('foottocm');
            div.appendChild(input);
            div.appendChild(button);
            document.getElementById('btn').addEventListener('click' , function(){
                var inputvalue = document.getElementById('field').value;
                let result = inputvalue * 30.48;
                document.getElementById('result').innerHTML = result;
            })
            break;
            case 'foottoinches':
                let input2 = document.createElement('input');
                input2.setAttribute('type' , 'number');
                input2.setAttribute('id' , 'field2');
                input2.setAttribute('min' , '1')
                input2.placeholder = "Enert foot";
                let button2 = document.createElement('button');
                button2.innerText = "convert";
                button2.setAttribute('id','btn2');
                var div = document.getElementById('foottocm');
                div.appendChild(input2);
                div.appendChild(button2);
                document.getElementById('btn2').addEventListener('click' , function(){
                    var inputvalue = document.getElementById('field2').value;
                    let result = inputvalue * 12;
                    document.getElementById('result').innerHTML = result;
                })
                break;
    }
}

