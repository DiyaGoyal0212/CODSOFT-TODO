var inpu = document.getElementById("listcontainer");
var buttons = document.querySelector('button');
var inpub = document.querySelector('input');
// var li = document.querySelector('li');
function addtask(){
    if(inpub.value === ' '){
        alert("you must write");
    }
    else{
        let li = document.createElement('li');
        li.innerText = inpub.value;
        inpu.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
           
    }
    inpub.value = " ";
    savedata();

}
inpu.addEventListener("click", myFunction);
function myFunction(e){
    e.target.classList.toggle("cone");
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    savedata();

}
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();


