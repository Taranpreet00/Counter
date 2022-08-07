var curr = document.querySelectorAll('.curr');
var next = document.querySelectorAll('.next');
var submitbutton = document.querySelector('#input-container button');
var inputnumber = document.querySelector('#input-container input');
var totalnumber = 0;
var upcomingnumber = [0,0,0,0,0];
var currnos = [0,0,0,0,0];
var currnumber = 0;

function animate(){
    for(let i=0; i<5; i++){
        if(upcomingnumber[i] != currnos[i]){
            next[i].innerText = upcomingnumber[i].toString();
            next[i].classList.add('animate');
        }
    }
    setTimeout(function(){
        for(let i=0; i<5; i++){
            next[i].classList.remove('animate');
            curr[i].innerText = upcomingnumber[i];
        }
    },500);
};

function starttimer(){
    for(let i=0; i<5; i++){
        curr[i].innerText = '0';
    }
    totalnumber = parseInt(inputnumber.value);
    if(inputnumber.value == '')
        totalnumber = 0;
        currnumber = 0;
    var interval = setInterval(function(){
        currnumber++;
        if(currnumber > totalnumber){
            clearInterval(interval);
            return;
        }
        let temp = currnumber;
        for(let i=0; i<5 && temp>0; i++){
            currnos[i] = upcomingnumber[i];
            upcomingnumber[i] = parseInt(temp%10);
            temp = temp/10;
        }
        animate();
        if(currnumber == totalnumber){
            setTimeout(function(){
                window.alert('Counter has stopped');
            }, 500);
        }
    }, 1000);
} 

submitbutton.addEventListener('click', starttimer);
document.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        starttimer();
    }
})
