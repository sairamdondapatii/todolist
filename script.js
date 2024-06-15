let input=document.getElementById('input');
let orderlist=document.getElementById('orderlist');
let add=document.getElementById('add');
let demo=document.getElementsByClassName('demo');
add.addEventListener('click',show);

function show(){
    if(input.value.trim()==""){
        demo[0].innerHTML='please enter your task';
    }
    else{
        demo[0].innerHTML='';
        showitem()
    }
};


function showitem(){
    let li=document.createElement('li');
    orderlist.appendChild(li);
    li.innerHTML=input.value;
    let span = document.createElement('span');
    span.innerHTML="&#10008"
    li.appendChild(span);
    input.value="";



    span.addEventListener('click',del);
    function del(){
        span.parentElement.remove();
    }



    li.addEventListener('click',check);
    function check(l){
       li.classList.toggle('check');
    }
        
}

