gsap.registerPlugin(ScrollTrigger);


// video automatisk start
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {
    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');
        for (var i = 0; i < videoEl.length; i++) {
            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;
            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }
        }
    }
}


// header skygge ved scroll
document.addEventListener('scroll', function () {

    var scrollTop = window.scrollY;
    var header = document.getElementById('header');
    if (scrollTop >= 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});

// shape-text 1 "mulighedernes efterskole"
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".s2",
        start: "top bottom",
        end: "top 50%",
        scrub: 0.5,
    }
});

tl.to(".shape1", 2, {
    left: "-10%",
    top: "200%",
    rotation: 90
});


// shape-text 2 "vores heste"
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".s3",
        start: "top bottom",
        end: "top 50%",
        scrub: 0.5,
    }
});

tl2.to(".shape2", 2, {
    left: "-10%",
    top: "200%",
    rotation: 90
});


// shape-text 3 "din lærer"
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".s4",
        start: "top bottom",
        end: "top 50%",
        scrub: 0.5,
    }
});

tl3.to(".shape3", 2, {
    left: "-10%",
    top: "200%",
    rotation: 90
});


// shape-text 4 "kontakt os"
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-5",
        start: "top bottom",
        end: "top 50%",
        scrub: 0.5,
    }
});

tl4.to(".shape4", 2, {
    left: "-10%",
    top: "200%",
    rotation: 90
});


// heste galleri fade in og out on scroll
var heste = document.querySelectorAll('.hest');

gsap.fromTo(
    heste, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1,
        duration: 1,
        stagger: 0.5,
        ease: Power4.easeOut,
        scrollTrigger: {
            trigger: ".s3",
            start: 'top 50%',
            scrub: true,
        },
    }
);



// social medier i header
gsap.from(".medier", {
    x: 0,
    y: 0,
});


// til over '.adr'
gsap.to(".medier", {
    scrollTrigger: {
        trigger: '.adr',
        start: 'top center',
        pin: '.section-5',
        scrub: 0.2,
    },
    x: 800,
    y: 200,
    scale: 5,
    rotation: 360,
    duration: 1
});


// tidslinje
var wrapper = document.querySelector('.wrapper');

gsap.to(".timeline", {
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: wrapper.offsetHeight,
        scrub: 0.5,
        id: 'timeline'
    },
    x: wrapper.offsetWidth + 150,
    ease: 'none',
    duration: 1
});

gsap.set('.s2', {
    x: -500
});