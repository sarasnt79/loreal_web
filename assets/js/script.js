const backbtn=document.querySelectorAll('.back');
const ProductArray=document.querySelectorAll('.Product');
const containerArray=document.querySelectorAll('.container');
const bg=document.querySelector('.first');
const upFirst=document.querySelector('.index');
let index=0;

var counter=1;





ProductArray.forEach((e ,index) =>{
    e.addEventListener('click' , ()=>{

         containerArray[index].classList.add('show');
         
    })
})

backbtn.forEach((e ,index)=>{
   e.addEventListener('click' , ()=>{
      containerArray[index].classList.remove('show');
   })
})

window.addEventListener('scroll' , ()=>{
   bg.style.opacity=1-window.pageYOffset/600;
})

window.onscroll=function(){
   if(document.documentElement.scrollTop>200){
      upFirst.style.display='inline-block';
   }
   else{
      upFirst.style.display='none';
   }
}

upFirst.addEventListener('click' , ()=>{
  window.scrollTo(0 ,0);
})



setInterval(()=>{
   document.querySelector('#radio'+counter).checked=true;
   counter++;
   if(counter>4){
      counter=1;
   }

} ,3000)