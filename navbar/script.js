const menu = document.querySelector("#menu");
const close = document.querySelector("#close");


var tl = gsap.timeline({paused:true});




menu.addEventListener("click",function(){
    tl.play();
})

close.addEventListener("click",function(){
    tl.reverse();
})




tl.to("#full", {
        right: "0",
    })

tl.from("#full h4", {
        x: 150,
        duration: 0.2,
        stagger: 0.2,
        opacity: 0,
    })
tl.from("#full i ", {
        opacity: 0,
        
    })



















// #normal method 
// menu.addEventListener("click", function () {
//     tl.to("#full", {
//         right: "0",
//     })

//     tl.from("#full h4", {
//         x: 150,
//         duration: 0.3,
//         stagger: 0.2,
//         opacity: 0,
//     })
//     tl.from("#full i ", {
//         opacity: 0,
        
//     })
// });

// close.addEventListener("click", function () {
//      tl.to("#full", {
//         right: "-40%",
//     })

// })

