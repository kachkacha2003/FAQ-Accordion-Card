let b=document.querySelectorAll(".change");
console.log(b)
let question=document.querySelectorAll(".e")



for(let i=0;i<b.length;i++){

  b[i].addEventListener("click",(e)=>{
    if(e.currentTarget.children[1].style.display=="block"){
      e.currentTarget.children[1].style.display="none"
      e.currentTarget.children[0].children[1].style.transform="none"
      e.currentTarget.children[0].children[0].style.color="";
      e.currentTarget.children[0].children[0].style.fontWeight="400"
      e.currentTarget.children[0].children[0].style.fontSize="12px"

    }else{
      e.currentTarget.children[1].style.display="block"
      console.log(e.currentTarget.children[0].children[0])
      e.currentTarget.children[0].children[0].style.color="rgba(30, 31, 54, 1)";
      e.currentTarget.children[0].children[0].style.fontWeight="700"
      e.currentTarget.children[0].children[0].style.fontSize="13px"
      e.currentTarget.children[0].children[1].style.transform="rotate(180deg)"
      
    }
    
  })
}
