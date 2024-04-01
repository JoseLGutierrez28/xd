document.addEventListener('DOMContentLoaded', function () {

    // // ------------------------------- Muestra el loader -------------------------------
    // const loader = document.querySelector(".first-container");
    // const loaderHamster = document.querySelector(".container-loader");

    // // ------------------------------- Oculta el loader después de 2 segundos -------------------------------
    // setTimeout(function () {
    //     loaderHamster.style.display = "none";
    //     loader.style.display = "block";
    // }, 2000);


    // ------------------------------- Menu hamburguesa ------------------------------- 
    var menuMobile = document.querySelector('.links-mobile');
    document.getElementById('menu').addEventListener('click', function () {
        menuMobile.style.display = (menuMobile.style.display === 'none' || menuMobile.style.display === '') ? 'block' : 'none';
    });


    // ------------------------------- Seccion de mis servicios ------------------------------- 
    const carousel = document.querySelector(".carousel");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    nextBtn.addEventListener("click", () => {
        const clone = carousel.firstElementChild.cloneNode(true);
        carousel.firstElementChild.remove();
        carousel.append(clone);
    });

    prevBtn.addEventListener("click", () => {
        const clone = carousel.lastElementChild.cloneNode(true);
        carousel.lastElementChild.remove();
        carousel.prepend(clone);
    });

    // ------------------------------- Carrousel de proyectos -------------------------------
    let carouselProyectos = document.querySelector(".carousel-proyectos");
    let back = document.querySelector(".back");
    let next = document.querySelector(".next-proyectos");
    let current = 0;
    let cellCount = 8;

    const rotateCarousel = () => {
        const angle = current / cellCount * -360;
        if (window.innerWidth <= 480) {
            carouselProyectos.style.transform = 'translateZ(-460px) rotateY(' + angle + 'deg)';
            carouselProyectos.style.transition = 'all 0.75s ease-in-out';
        }
        else {
            carouselProyectos.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
            carouselProyectos.style.transition = 'all 0.75s ease-in-out';
        }
    }

    back.addEventListener("click", () => {
        current--;
        rotateCarousel();
    })

    next.addEventListener("click", () => {
        current++;
        rotateCarousel();
    })


    // ------------------------------- Mostrar mas certificados -------------------------------
    const button = document.querySelector('.skills__more');
    let isExpanded = false;

    function toggleVerMas() {
        isExpanded = !isExpanded; // Cambiar el estado del botón

        const elemento = document.querySelector(`.last-certificates`);

        if (isExpanded) {
            elemento.style.display = 'block'; // Mostrar el elemento
            elemento.style.display = 'contents'; // Organizarlos
        } else {
            elemento.style.display = 'none'; // Ocultar el elemento
        }

        // Cambiar el texto del botón según el estado
        button.textContent = isExpanded ? 'Ver menos' : 'Ver mas';
    }

    button.onclick = toggleVerMas;

});
