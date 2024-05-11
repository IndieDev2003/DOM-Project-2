let addbtn=document.querySelector("#addbtn")
let frndstatus=document.querySelector("#frndstatus")

var addrmv
if(frndstatus.innerHTML=="Stranger"){
    addrmv=true
}else{
    addrmv=false
}
addbtn.addEventListener("click",function(){
    console.log(addrmv);
    if(addrmv){
        addbtn.innerHTML="Remove Friend"
        addbtn.style.backgroundColor="#dadada"
        frndstatus.innerHTML="Friend"
        frndstatus.style.color="green"
        addrmv=false
    }else{
        addbtn.innerHTML="Add Friend"
        addbtn.style.backgroundColor="#42428f"
        frndstatus.style.color="Red"
        frndstatus.innerHTML="Stranger"
        addrmv=true
    }
})