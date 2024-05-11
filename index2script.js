function loading(){

    var tl = gsap.timeline()
    
    tl.to(".crimson",{
        top: "-100%",
        delay:0.5,
        duration: 0.7,
        ease: "expo.out"
    })
    
    tl.from(".crimson2", {
        top: "100%",
        delay:0.5,
        duration: 0.7,
        ease: "expo.out"
    })
    
    tl.to(".loader h1", {
        delay: 0.5,
        duration: 0.7,
        color: "black",
    }, "anim")
    
    tl.to(".loader", {
        opacity: 0
    })
    
    tl.to(".loader", {
        display: "none"
    })
    
    }
    
    loading()
    
    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector(".page2")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter", function(){
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })
    
    document.querySelector(".footer h2").addEventListener("click", () => {
        scroll.scrollTo(0);
    })
    
    document.querySelector(".left-h3").addEventListener("click", () => {
        scroll.scrollTo(0);
    })
    
    function insta(){
        window.location.href = "https://www.instagram.com/jaya_surya_js/";
    }

    function linkedin(){
        window.location.href = "https://www.linkedin.com/in/viyyapujayasurya/";
    }

    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
        lerp: 0.02
    });
    