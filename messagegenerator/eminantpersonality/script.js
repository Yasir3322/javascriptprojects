const data = [{
    person1:{
        name: "Muhammad Ali Jinnah",
    about: "Muhammad Ali Jinnah was a barrister, politician and the founder of Pakistan. Jinnah served as the leader of the All-India Muslim League from 1913 until the inception of Pakistan on 14 August 1947, and then as the Dominion of Pakistan's first governor-general until his death.",
    },
    person2:{
        name: "Imran khan",
    about: "Imran Ahmed Khan Niazi HI PP is a Pakistani politician and former cricketer who is the 22nd and current prime minister of Pakistan. He is also the chairman of the Pakistan Tehreek-e-Insaf."
    },
    person3:{
        name: "Liaquat Ali Khan",
    about: "Nawabzada Liaquat Ali Khan, widely known as Quaid-e-Millat and Shaheed-e-Millat, was a Pakistani statesman, lawyer, political theorist, and one of the leading founding fathers of Pakistan."
    }, 
    person4:{
        name: "Khawaja Nazimuddin",
    about: "Sir Khwaja Nazimuddin KCIE was a Pakistani conservative politician and one of the leading founding fathers of Pakistan. He is noted as being the first Bengali to have ruled Pakistan, first as a Governor-General, and later as a Prime minister"
    }, 
    person5:{
        name: "Ghulam Muhammad",
    about: "Sir Malik Ghulam Muhammad CIE, was a Pakistani politician and financier who served as the third governor-general of Pakistan, appointed in this capacity in 1951 until being dismissed in 1955 due to health conditions. He co-founded Mahindra & Muhammad in 1945 with Jagdish Chandra Mahindra and Kailash Chandra Mahindra"
    }, 
}]
   


     function myfun(choose){
         
        switch(choose){
            case 'qd':
                for(let i=0 ; i<data.length; i++){
                    document.querySelector('[data-heading]').innerHTML = data[i].person1.name;
                    document.querySelector('[data-about]').innerHTML = data[i].person1.about;
                    document.querySelector('[data-image]').setAttribute('src' , "./-images/quaidazam.jpg")

                }
                break;
            case 'ik':
                for(let i=0 ; i<data.length; i++){
                    document.querySelector('[data-heading]').innerHTML = data[i].person2.name;
                    document.querySelector('[data-about]').innerHTML = data[i].person2.about;
                    document.querySelector('[data-image]').setAttribute('src' , "./-images/imrankhan.jpg")

                }
                break;
            case 'kn':
                for(let i=0 ; i<data.length; i++){
                    document.querySelector('[data-heading]').innerHTML = data[i].person4.name;
                    document.querySelector('[data-about]').innerHTML = data[i].person4.about;
                    document.querySelector('[data-image]').setAttribute('src' , "./-images/khawaja_Nazimuddin.jpg")

                }
                break;
            case 'gm':
                for(let i=0 ; i<data.length; i++){
                    document.querySelector('[data-heading]').innerHTML = data[i].person5.name;
                    document.querySelector('[data-about]').innerHTML = data[i].person5.about;
                    document.querySelector('[data-image]').setAttribute('src' , "./-images/Malik_Muhammad.jpg")

                }
                break;
            case 'lk':
                for(let i=0 ; i<data.length; i++){
                    document.querySelector('[data-heading]').innerHTML = data[i].person3.name;
                    document.querySelector('[data-about]').innerHTML = data[i].person3.about;
                    document.querySelector('[data-image]').setAttribute('src' , "./-images/LiaquatAliKhan.jpg")

                }
                break;

        }
  
    }