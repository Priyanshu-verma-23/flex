const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var mmove = document.querySelector(".mmover");
var main = document.querySelector(".main");
main.addEventListener("mousemove",function(dets){
    gsap.to(mmove,{
        left: dets.x,
        top: dets.y,
    })
})


gsap.from("#linktext",{
    stagger: .1,
    y : 10,
    duration: 1,
    opacity: 0,
})
gsap.from(".ftext",{
    stagger: .1,
    x : -100,
    duration: 2,
    opacity: 0,
})
gsap.from(".stext",{
    stagger: .1,
    y : 100,
    duration: 2,
    opacity: 0,
    delay:3
})
gsap.to(".loader1",{
    top:"-100%",
    duration: 2,
    opacity : 1,
    delay:2.5
})


let opennav = document.querySelector('#nav2');

function openEl(){
  
    opennav.style.display = 'block';
}

function closeEl(){
    opennav.style.display = 'none';
}
