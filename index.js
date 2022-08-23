let c=1
document.querySelector("#push").onclick=function(){
    if (document.querySelector('#newtask input').value.length==0)
    {
        alert("Please enter a task")
    }
    else{
        if(c>7){
            alert("Purane ho nahi rahe aur add kar rhaa hai!")
        }
        else{
        document.querySelector("#tasks").innerHTML=`<div class="adway" ><div class="task">
        <span id="taskname">${document.querySelector("#newtask input").value}</span></div>
        <button class="pop" id="${c}"><i class="far fa-trash-alt"></i></button></div>`+document.querySelector("#tasks").innerHTML
        document.querySelector("#newtask input").value=""
        c+=1
    }
    }


var current_tasks = document.querySelectorAll(".pop");

for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove();
        c=c-1
    }
}
var tasks = document.querySelectorAll(".task");
for(var i=0; i<tasks.length; i++){
    tasks[i].onclick = function(){
        this.classList.toggle('completed');
    }
}

}