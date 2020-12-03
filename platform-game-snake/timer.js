var time=0;
setInterval(function(){
    time+=0.1;
},100);



var button=document.createElement("input");
button.type="button";
button.innerText="STOP";
button.style.position="absolute";

document.body.appendChild(button);
button.addEventListener("click",function(){
    ShowTime(time);
});



function ShowTime(time){
    var p=document.createElement("p");
    document.body.appendChild(p);
    p.innerText=time+" s";
}
