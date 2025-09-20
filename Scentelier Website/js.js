document.addEventListener('DOMContentLoaded', ()=>{
    const hero = document.getElementById("hero");
    const subtitle = document.getElementById("hero-subtitle");
    const title = document.getElementById("hero-title");
    const btn = document.getElementById("hero-btn");
    const prevbtn = document.getElementById("prev-btn");
    const nextbtn = document.getElementById("next-btn");
    const dots = document.getElementById("slider-dots");

// Slides Data
   const slides=[
    {
        img:"images/herobg.png",
        subtitle:"a fragrances for every mood, a scent for every season",
        title:"handpicked luxury <br> fragrances for <br> <span>every occasion </span>",
        btnText:"shop now",
        btnLink:"#"
    },
    {
        img:"images/hero-left-bg.png",
        subtitle:"your signature scent awaits",
        title:"discover <br> timeless perfume <br> <span>collection.</span>",
        btnText:"explore now",
        btnLink:"#"
    },
    {
        img:"images/hero-right-bg.png",
        subtitle:"scents that tells a story",
        title:"luxury  <br> perfume for  <br> <span> every mood. </span>",
        btnText:"browse collections",
        btnLink:"#"
    },
    ];

    let currentslide = 0;
    let autoSlideInterval;

    //Functionality for Dots showing
    slides.forEach((_,index) =>{
    const dot = document.createElement("span");
    dot.addEventListener("click",()=> goToSlide(index));
    dotsContainer.appendChild(dot);
    });

    const updateDots = () => {
    dotsContainer.querySelectorAll("span").forEach((dot,idx) =>{
    dot.classList.toggle("active", idx===currentSlide);
    });
}
});