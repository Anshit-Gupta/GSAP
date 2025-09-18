const main=document.querySelector("#main");
const cursor=document.querySelector("#cursor");
const imgdiv=document.querySelector("#image");

main.addEventListener("mousemove",function(e){
   gsap.to(cursor,{
       x:e.x,
       y:e.y,
       
   })
});

imgdiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="click";
    gsap.to(cursor,{
        scale:5,
        backgroundColor:"#ffffff8a",
    })
})
imgdiv.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff",
    })
})