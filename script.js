document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('purchaseModal');
    const span = document.getElementsByClassName('close')[0];

    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalProductImage = document.getElementById('modalProductImage');

    function openModal(productName, productDescription, productPrice, productImageSrc) {
        modalProductName.innerText = productName;
        modalProductDescription.innerText = productDescription;
        modalProductPrice.innerText = productPrice;
        modalProductImage.src = productImageSrc;

        modal.style.display = 'block';
    }

    function initSwiperSection() {
        const buyNowButtons = document.querySelectorAll('.swiper .buy-now');
        
        buyNowButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const product = event.target.closest('.product');
                const productName = product.querySelector('.product-name').innerText;
                const productDescription = product.querySelector('.product-description').innerText;
                const productPrice = product.querySelector('.product-price').innerText;
                const productImageSrc = product.querySelector('.product-img img').src;

                openModal(productName, productDescription, productPrice, productImageSrc);
            });
        });

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
    }

    function initPricingSection() {
        const buyNowButtons = document.querySelectorAll('#pricing-section .buy-now');
        
        buyNowButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const product = event.target.closest('.product');
                const productName = product.querySelector('.product-name').innerText;
                const productDescription = product.querySelector('.product-description').innerText;
                const productPrice = product.querySelector('.product-price').innerText;
                const productImageSrc = product.querySelector('.product-img').src;

                openModal(productName, productDescription, productPrice, productImageSrc);
            });
        });
    }

    span.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    initSwiperSection();
    initPricingSection();

    const purchaseButton = document.querySelector('.btn-submit');
    purchaseButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(addressInput.value);
    console.log(nameInput.value !== '' && emailInput.value.trim() !== '' && addressInput.value.trim() !== '');

    if (nameInput.value !== '' && emailInput.value !== '' && addressInput.value !== '') {
    alert('¡Compra Exitosa!');
    modal.style.display = 'none';
    } else {
    alert('Por favor, complete todos los campos antes de realizar la compra.');
    }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name-contact');
    const emailInput = document.getElementById('email-contact');
    const messageInput = document.getElementById('message-contact');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name !== '' && email !== '' && message !== '') {
            alert('¡Mensaje enviado correctamente! Te contactaremos lo antes posible.');
            // Limpiar los campos después de enviar el mensaje
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        } else {
            alert('Por favor, complete todos los campos antes de enviar el mensaje.');
        }
    });
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




document.addEventListener('DOMContentLoaded', function () {
    const areas = document.querySelectorAll('area');
    const infoBox = document.querySelector('.info-box');

    areas.forEach(area => {
        area.addEventListener('mouseenter', function () {
            const info = this.getAttribute('data-info');
            infoBox.innerHTML = `<h3>¡Encontraste algo interesante!</h3><p>${info}</p>`;
            infoBox.classList.remove('hidden');
            infoBox.classList.add('visible');
            this.style.filter = 'brightness(70%)'; // Cambiar el brillo al pasar el cursor
        });

        area.addEventListener('mouseleave', function () {
            infoBox.classList.add('hidden');
            infoBox.classList.remove('visible');
            this.style.filter = 'brightness(100%)'; // Restaurar el brillo al salir del área
        });
    });
});