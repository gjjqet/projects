const firstnumber=document.getElementById("firstnumber");
const secondnumber=document.getElementById("secondnumber");
const option=document.getElementById("option");
const register=document.getElementById("btn");
const result=document.getElementsByClassName("result")[0];
const firsterror=document.getElementById("firsterror");
const seconderror=document.getElementById("seconderror");
const thirderror=document.getElementById("thirderror");

firsterror.style.display="none";
seconderror.style.display="none";
thirderror.style.display="none";

let result2;
register.addEventListener("click",()=>{
    
    if(firstnumber.value===""){
        firsterror.style.display="block";
        result.innerHTML=0;
        return;

     }else if(secondnumber.value===""){
        seconderror.style.display="block";
        result.innerHTML=0;
        return
     }else if(option.value==="choose"){
        thirderror.style.display="block";
        result.innerHTML=0;
        return;
     }else{
        firsterror.style.display="none";
        seconderror.style.display="none";
        thirderror.style.display="none";

        switch(option.value){
            case "addition":
                result2=Number(firstnumber.value)+Number(secondnumber.value);
                break;
            case "subtraction":
                result2=firstnumber.value-secondnumber.value;
                break;
            case "multiply":
                result2=firstnumber.value*secondnumber.value;
                break;
            case "division":
                result2=firstnumber.value/secondnumber.value;
                break;      
        };
         
     }

    

    result.innerHTML=result2;
    console.log(option.value)
});



