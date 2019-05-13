   // Ex1 
 
let a= document.getElementById('demo-a');
let button= document.getElementById('btn-demo');
let input= document.getElementById('demo-input');
let link= a.href
button.addEventListener('click', ()=>{ 
   input.value=link;
})

