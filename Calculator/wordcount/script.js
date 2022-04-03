function myfun(){

     let spaces = 1;
     var sentence = 0;
     let char = document.getElementById('field').value
      
     for(ch in char){
      
        switch(char[ch]){
            case " ":
                spaces++;
                break;
            case ".":
            case "!":
                sentence++;
                break;

        }

     }
     document.getElementById('para').innerHTML = "words "+ spaces + " sentences " +sentence;
     
}