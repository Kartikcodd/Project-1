var curs = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function (dets) {
     curs.style.left = dets.x + "px";
     curs.style.top = dets.y + "px";
     blur.style.left = dets.x - 150 + "px";
     blur.style.top = dets.y - 150 +  "px";
    // // console.log(dets.y)
})


var h5all = document.querySelectorAll("#nav h5")
    h5all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            curs.style.scale = 2
            curs.style.border = "1px solid #fff"
            curs.style.backgroundColor = "transparent"
        })
        elem.addEventListener("mouseleave",function(){
            curs.style.scale = 1
            curs.style.border = "0px solid #95C11E"
            curs.style.backgroundColor = "#95C11E"
        })

        
    })

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:true,
        start:"top  -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    // duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        // markers: true,
        start:"top -10%",
         End:"top -65%",
         scrub:2
    }
})

gsap.to("#about img,#about-us-in",{
   
    y:-50,
    opacity:3,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }

    
})

gsap.from("#card-container",{
    scale:0.5,
    opacity:1,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroll:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
        // markers:true
    }
})

gsap.from("#colon1",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

//  gsap.from("#page-4",{
//      scale:0.4,
//      opacity:0,
//      duration:0.5,
//      scrollTrigger:{
//          trigger:".box",
        //  scroll:"body",
//          top:"top 60%",
//          end:"top 55%",
//          scrub:2,
//      }
//  })