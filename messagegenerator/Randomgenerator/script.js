let arr = ['"I love my life because it gave me you, I love you because you are my life"',
           '"I love seeing you happy and my biggest reward is seeing you smile."',
           '"I would climb a thousand mountains to see you smile."',
           '"To have you as my girl is my honor. Be with me always!"',
           '"One text from you changes my whole mood."',
           '"I only saw you for a second, but it made my day."',
           '"There are only two times that I want to be with you… Now and Forever."',
           '"Life has never been better, thanks to you, sweetheart!"',
           '"For you, I may be just one person, but for me, you are the world"'
             ];

function myfun(){
let ran = Math.floor(Math.random()*8)
while(ran<arr.length){
    document.getElementById('quotearea').innerHTML = arr[ran];
    break;
}
}