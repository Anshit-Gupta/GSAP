const h1 = document.querySelector("h1");
var h1text = h1.textContent;

 
//animation center to left-right 
function breakThetext() {
   
    var splittedText = h1text.split("");
    var halfvalue=Math.floor(splittedText.length/2);
    var clutter="";
    splittedText.forEach(function (e,idx) {
        if(idx<halfvalue)
        {
            clutter+=`<span class="a" >${e}</span>`
        }
        else{
           clutter+=`<span class="b" >${e}</span>`
        }

    })

    h1.innerHTML=clutter;
  
}
breakThetext()
gsap.from(".a",{
    y:80,
    duration:0.5,
    opacity:0,
    delay:0.3,
    stagger:0.15 //positive stagger for l->r
})
gsap.from(".b",{
    y:80,
    duration:0.5,
    opacity:0,
    delay:0.3,
    stagger:-0.15  //negative stagger for r->l
})





















//animation left-right(stagger+ ) or right to left(stagger-) 
//spliting the text using .split() and into <span></span>
// function breakThetext() {
   
//     var clutter = ""
//     var splittedText = h1text.split("");
//     splittedText.forEach(function (e) {
//         clutter += `<span>${e}</span>`;

//     })
//     h1.innerHTML = clutter;
// }
// breakThetext()
// gsap.from("h1 span",{
//     y:50,
//     duration:0.5,
//     opacity:0,
//     delay:0.3,
//     stagger:0.15
// })