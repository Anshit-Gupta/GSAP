const main=document.querySelector("#main");
const cursor=document.querySelector("#cursor");

main.addEventListener("mousemove",function(e){
   gsap.to(cursor,{
       x:e.x,
       y:e.y,
       ease:"back.out" 
   })
});