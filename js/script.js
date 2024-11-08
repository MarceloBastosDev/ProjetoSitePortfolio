// DROPDOWN EM TELAS PEQUENAS
const toggleDropdown = (menuButtonId, menuDropdownId) => {
    const menuButton = document.getElementById(menuButtonId);
    const menuDropdown = document.getElementById(menuDropdownId);

    menuButton.addEventListener('click', () => {
        menuDropdown.classList.toggle('hidden');
    });
};

toggleDropdown('menuButton1', 'menuDropdown1');


// CAIXA DE TEXTO PORTFOLIO
function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle("hidden");
}

// CARROSEL DA PÁGINA CARROSEL

let currentIndex = 0;

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const itemWidth = carousel.children[0].offsetWidth;
    const visibleItems = 3; // Quantidade de itens visíveis por vez
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function prevSlide() {
    const totalItems = document.getElementById('carousel').children.length;
    const visibleItems = 3;
    currentIndex = (currentIndex - visibleItems >= 0) ? currentIndex - visibleItems : totalItems - visibleItems;
    updateCarousel();
}

function nextSlide() {
    const totalItems = document.getElementById('carousel').children.length;
    const visibleItems = 3;
    currentIndex = (currentIndex + visibleItems < totalItems) ? currentIndex + visibleItems : 0;
    updateCarousel();
}
