
let button = document.getElementById('btn1')
let cont = document.getElementById('cont')
let box1 =document.getElementById('box1')


button.addEventListener('click',listener);

cont.addEventListener('click',listener);

box1.addEventListener('click',listener);

function listener() {console.log(event.currentTarget)} 




let button2 = document.getElementById('btn2')
let cont2 = document.getElementById('cont2')
let box2 =document.getElementById('box2')


button2.addEventListener('click',listener,{capture:true});

cont2.addEventListener('click',listener,{capture:true});

box2.addEventListener('click',listener,{capture:true});

function listener() {console.log(event.currentTarget)} 
