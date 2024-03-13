const inputTag=document.querySelector(".input");
const buttonTag=document.querySelector(".btn");
const extraTag=document.querySelector(".extra");

let mynumber=Math.floor(Math.random()*10+6);
console.log(mynumber)

let number;
inputTag.addEventListener("keyup",(event)=>{
    number=event.target.value; 
});

// inputTag.addEventListener("click",()=>{
//     extraTag.innerHTML="";
// })



let left=5;
buttonTag.addEventListener("click",()=>{
    inputTag.disabled=true;
    buttonTag.disabled=true;
    if(number===mynumber.toString()){
        left=5;
        const inner=document.createElement("div");
        inner.classList.add("inner");
        inner.append(`Your answer is correct!! my fav number is ${mynumber}`);

        const next=document.createElement("button");
        next.classList.add("try");
        next.innerText="Next Level";

        next.addEventListener("click",()=>{
            inputTag.disabled=false;
            buttonTag.disabled=false;
            extraTag.innerHTML="";
            inputTag.value="";

            mynumber=Math.floor(Math.random()*10+6);
            console.log(mynumber)
        })

        extraTag.append(inner,next);
    }else{
        if(left===1){
            extraTag.innerHTML="";
            const over=document.createElement("div");
            over.classList.add("inner");
            over.append("Your game is over");

            const time=document.createElement("button");
            time.classList.add("try");
            time.innerText="try one more time";

            time.addEventListener("click",()=>{
                inputTag.disabled=false;
                buttonTag.disabled=false;
                extraTag.innerHTML="";
                inputTag.value="";
                left=5;
            })

            extraTag.append(over,time);
            return;
        }
        left-=1;
        
        const inner=document.createElement("div");
        inner.classList.add("inner");


        const forleft=document.createElement("div");
        forleft.classList.add("forleft");
        forleft.append(`  ${left} guess left`)
        

        inner.append(`No!!My fav number is not ${number}  .  `);


        const finaldiv=document.createElement("div");
        finaldiv.classList.add("finaldiv");
        finaldiv.append(inner,forleft)



        const tryagain=document.createElement("button");
        tryagain.classList.add("try");
        tryagain.innerText="Try Again";


        tryagain.addEventListener("click",()=>{
            inputTag.disabled=false;
            buttonTag.disabled=false;
            extraTag.innerHTML="";
            inputTag.value="";
        })

        extraTag.append(finaldiv,tryagain);
    }
})




