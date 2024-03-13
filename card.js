const taskButton=document.getElementById("addtask")
//const forlist=document.querySelectorAll(".list-group-item")
// console.log(forlist)
//const fordelete=document.querySelectorAll(".delete-item")
// console.log(fordelete)
//const forul=document.querySelector(".list-group")

const forclear=document.querySelector(".btn2")

let number=6
taskButton.addEventListener("click",()=>{
    const extralist=document.createElement("li")
    extralist.classList.add("list-group-item")

    const extraanchor=document.createElement("a")
    extraanchor.classList.add("delete-item")

    const extratrash=document.createElement("i")
    extratrash.classList.add("fa-solid","fa-trash")

    extraanchor.append(extratrash);

    extralist.append(`List Item ${number}`,extraanchor)

    forul.append(extralist)

    extraanchor.addEventListener("click",()=>{
        extralist.style.display="none"
    })

    number+=1
})



const forlist=document.querySelectorAll(".list-group-item")
console.log(forlist)
const fordelete=document.querySelectorAll(".delete-item")
console.log(fordelete)
const forul=document.querySelector(".list-group")




for(let i=0;i<forlist.length;i++){
    fordelete[i].addEventListener("click",()=>{
        forlist[i].style.display="none"
    })
}

forclear.addEventListener("click",()=>{
    forul.innerHTML="";
    number=1
})


