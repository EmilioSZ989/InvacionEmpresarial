// Datos de los productos
const products = [
    {
        name: "BoostShell",
        price: "$60",
        description: "Descubre la última tecnología lista para proteger tu teléfono mientras le brindas batería y memoria adicionales, disfrutando de un cómodo soporte",
        image: "img/Funda.jpeg"
    },
    {
        name: "SpyBlocker",
        price: "$5",
        description: "Brinda la mayor seguridad a tus datos, protegiéndolos de posibles espías.",
        image: "img/Spyblocker.jpeg"
    },
    {
        name: "Touch Writer",
        price: "$10",
        description: "Lleva tus apuntes a otro nivel con ayuda de nuestra poderosa herramienta de trabajo.",
        image: "img/Touchwriter.png"
    },
    {
        name: "AppleWatch",
        price: "$410",
        description: "Sube de nivel tu look y mejora tu experiencia logrando tener todo a tu alcance desde tu mano.",
        image: "img/Applewatch.jpeg"
    },
    {
        name: "CamSafe",
        price: "$10",
        description: "Protege el área de tu teléfono más delicada, con materiales resistentes de alta calidad.",
        image: "img/Camsafe.jpeg"
    }
];


// Función para generar el HTML de cada producto
function generateProductHTML(product) {
    return `
        <div class="swiper-slide">
            <div class="icons">
                <i class="fa-solid fa-circle-arrow-left"></i>
                <img src="img/logo.png" alt="">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="product-content">
                <div class="product-txt">
                    <span>${product.price}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
                <div class="product-img">
                    <img src="${product.image}" alt="">
                </div>
            </div>
            <a href="#" class="btn-1">¡COMPRAR AHORA!</a>
        </div>
    `;
}

// Generar el HTML para cada producto y agregarlo al contenedor
const swiperWrapper = document.getElementById("swiper-wrapper");
products.forEach(product => {
    const productHTML = generateProductHTML(product);
    swiperWrapper.innerHTML += productHTML;
});

// Inicializar el Swiper
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
    const track = event.currentTarget.parentNode.querySelector(".carrusel-track");
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


document.addEventListener('DOMContentLoaded', function () {
    const areas = document.querySelectorAll('area');
    const infoBox = document.querySelector('.info-box');

    areas.forEach(area => {
        area.addEventListener('mouseenter', function () {
            const info = this.getAttribute('data-info');
            infoBox.innerHTML = `<h3>Encontraste...</h3><p>${info}</p>`;
            infoBox.classList.remove('hidden');
            this.style.filter = 'brightness(70%)'; // Cambiar el brillo al pasar el cursor
        });

        area.addEventListener('mouseleave', function () {
            infoBox.classList.add('hidden');
            this.style.filter = 'brightness(100%)'; // Restaurar el brillo al salir del área
        });
    });
});
