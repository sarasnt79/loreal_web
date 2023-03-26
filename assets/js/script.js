
let  down=document.querySelector(".downPart");
let  up=document.querySelector(".upPart");

let num=0;

window.onscroll=function(){

   num=document.documentElement.scrollTop;
}


down.addEventListener('click' , () =>{
window.scrollTo(0,num+1250)
    
})

up.addEventListener('click' , () =>{
    window.scrollTo(0,0)
})


// // function fil(){
// //     window.onscroll=function(){
// //         num =document.documentElement.scrollTo;
// //    }
 
// //   alert(num)
// // }