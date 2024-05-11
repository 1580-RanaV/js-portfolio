function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(entry.target);
        }
    });
}
function startCounter() {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    const projectsPara = document.getElementById('projectsPara');
    const intervalId = setInterval(() => {
        counter ++;
        if (counter < 150) {
            counterElement.textContent = counter;
        } else if (counter === 150) {
            counterElement.textContent = counter + "+";
            projectsPara.innerHTML = projectsPara.innerHTML.replace('150 projects');
            clearInterval(intervalId);
        }
    }, 110);
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(document.getElementById('projectsPara'));

document.querySelector(".top").addEventListener("click", () => {
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