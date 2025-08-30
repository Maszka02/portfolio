// Menu mobilne
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Filtrowanie galerii
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Usuń aktywną klasę z wszystkich przycisków
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Dodaj aktywną klasę do klikniętego przycisku
        button.classList.add("active");
        
        const filter = button.getAttribute("data-filter");
        
        galleryItems.forEach(item => {
            if (filter === "all" || item.getAttribute("data-category") === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Obsługa formularza kontaktowego
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Dziękujemy za wiadomość! Odpowiemy tak szybko, jak to możliwe.");
        contactForm.reset();
    });
}
