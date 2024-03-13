const friendlist=document.querySelector(".friendlist");
const sort=document.querySelectorAll(".sort");
const input=document.querySelector(".input");



const list=["Khaing Khaing","Tun Ko","Khin Khin","Oo Oo","Aung Aung","Maung Maung","Mya Mya","Hla Hla","Nu Nu","Lu Lu","Su Su","That Zin","Tun Tun","Aye Aye","Min Min",
"Zaw Zaw"

]



 let listdiv1;
 for(let i=0;i<list.length;i++){
     listdiv1=document.createElement("div");
     listdiv1.classList.add("listdiv");
     listdiv1.append(list[i]);

     friendlist.append(listdiv1)
 }
 
 let filterarr;
input.addEventListener("keyup",(event)=>{
    friendlist.innerHTML="";
    const searchtext=event.target.value.toLowerCase();
    if(searchtext.length===0){
            for(let i=0;i<list.length;i++){
                listdiv1=document.createElement("div");
                listdiv1.classList.add("listdiv");
                listdiv1.append(list[i]);
           
                friendlist.append(listdiv1)
            }  listdiv1.classList.add("listdiv");
        
        return
    };

    filterarr=list.filter((friend)=>{
      return friend.toLowerCase().includes(searchtext);
    })


    if(filterarr.length>0){
        for(let i=0;i<filterarr.length;i++){
            
            const listdiv=document.createElement("div");
            listdiv.classList.add("listdiv");
            listdiv.append(filterarr[i]);

            friendlist.append(listdiv);


        }



        sort.forEach((each)=>{
            each.addEventListener("click",(event)=>{
                const idvalue=event.target.id;
                console.log(idvalue);

                if(idvalue==="atoz"){
                   const forfilter1=filterarr.sort();
                   final(forfilter1);
                }else{
                    const forreverse=filterarr.reverse();
                    console.log(forreverse)
                    final(forreverse)
                }
            })
        })


    }
})


sort.forEach((each)=>{
    each.addEventListener("click",(event)=>{
       const idvalue=event.target.id;

       if(idvalue==="atoz"){
         friendlist.innerHTML="";
          const forsortatoz=list.sort();
       
        final(forsortatoz);
        

       }else{
         friendlist.innerHTML="";
         const forsortztoa=list.reverse();
        final(forsortztoa);
    }

       
    })
})


const final=(apple)=>{
    friendlist.innerHTML="";
    for(let i=0;i<apple.length;i++){
             const forztoa=document.createElement("div");
             forztoa.classList.add("listdiv");
             forztoa.append(apple[i]);
             friendlist.append(forztoa);
          }
}





