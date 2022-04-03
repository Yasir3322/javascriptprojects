function myfun(){
let v = document.getElementById('totaltweet').value;
document.getElementById('tweettotal').innerHTML = v+" Tweet";
}

function spanfun(){
    let a = document.getElementById('profilespan').value;
    document.querySelector('#profilespane').innerHTML = a;
}
function namefun(){
    let b = document.getElementById('name').value;
    document.querySelector('[data-profile]').innerHTML = b;
}
function followingfun(){
    let c = document.getElementById('following').value;
    document.getElementById('followingvalue').innerHTML = c
}
function followerfun(){
    let d = document.getElementById('follower').value;
    document.getElementById('followervalue').innerHTML = d
}

const realfilebutton = document.getElementById("real-file-btn");
const custombutton = document.getElementById("custom-btn");
const realfilebutton2 = document.getElementById("real-file-btn2");
const custombutton2 = document.getElementById('custom-btn2');

var uploaded_img = "";
var uploaded_img2 = "";

custombutton.addEventListener("click",function(){
    realfilebutton.click();
})

custombutton2.addEventListener("click",function(){
    realfilebutton2.click();
})

realfilebutton.addEventListener("change" , function(){
    // console.log(realfilebutton.value)
    var reader = new FileReader();
    reader.addEventListener("load" , ()=>{
        uploaded_img = reader.result;
        document.querySelector('.banner-image-container').setAttribute('src',`${uploaded_img}`)
        document.querySelector('.tweetpic').style.backgroundImage = `url(${uploaded_img})`
    })
    reader.readAsDataURL(this.files[0]);
})

realfilebutton2.addEventListener('change',function(){
    var reader = new FileReader();
    reader.addEventListener('load',()=>{
        uploaded_img2 = reader.result;
        document.querySelector('.profile-image-container').setAttribute('src',`${uploaded_img2}`);
        document.querySelector('#profile_image').setAttribute('src',`${uploaded_img2}`);
    })
    reader.readAsDataURL(this.files[0]);
})

