
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth: 500,
        modifer: 1,
        slidesShadows: true,
        rotate: 0,
        stretch: 0
    }
});

function App() {}

window.onload = function(event) {
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector("#track");
    const carrusel = track.querySelectorAll(".carrusel");

    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left);

    if (btn.dataset.button === "button-prev") {
        prevAction(leftPosition, carruselWidth, track);
    } else {
        nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
}

let prevAction = (leftPosition, carruselWidth, track) => {
    if (leftPosition < 0) {
        track.style.left = `${leftPosition + carruselWidth}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
    if (leftPosition > (listWidth - trackWidth)) {
        track.style.left = `${leftPosition - carruselWidth}px`;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('.interactive-image area');

    areas.forEach(area => {
        area.addEventListener('mouseover', function() {
            const info = this.getAttribute('data-info');
            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');
            infoBox.textContent = info;
            document.body.appendChild(infoBox);
        });

        area.addEventListener('mouseout', function() {
            const infoBox = document.querySelector('.info-box');
            if (infoBox) {
                infoBox.remove();
            }
        });
    });
});
