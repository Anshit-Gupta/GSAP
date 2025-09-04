var Path=`M 10 100 Q 500 100 990 100`; //we need to remember the initial position

var finalPath=`M 10 100 Q 500 100 990 100`

const svg=document.querySelector("#svg");

svg.addEventListener("mousemove", function(e){
 path=`M 10 100 Q ${e.x} ${e.y} 990 100`

 gsap.to("svg path", {
    attr:{ d:path},
    duration:0.3,
    ease:"power3.out",                // go to GSAP easing
 })
})

svg.addEventListener("mouseleave",function(e){
  gsap.to("svg path", {
    attr:{d:finalPath},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
  })
})