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

// Ładowanie danych projektu na stronie project.html
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadProject() {
    const id = getProjectId();
    if (!id || !projectsData[id]) return;

    const project = projectsData[id];

    // Nagłówek
    document.querySelector(".project-header h1").textContent = project.title;
    document.querySelector(".project-header p").textContent = project.description;

    // Główny obraz
    const mainImage = document.querySelector(".project-details img");
    if (mainImage) {
        mainImage.src = project.image;
        mainImage.alt = project.title;
    }

    // Specyfikacja
    const specs = `
        <ul>
            <li><strong>Data:</strong> ${project.date}</li>
            <li><strong>Kategoria:</strong> ${project.category}</li>
            <li><strong>Klient:</strong> ${project.client}</li>
            <li><strong>Narzędzia:</strong> ${project.tools}</li>
        </ul>`;
    document.querySelector(".project-specs").innerHTML = "<h3>Specyfikacja</h3>" + specs;

    // Galeria
    const galleryContainer = document.querySelector(".project-gallery .gallery");
    if (galleryContainer) {
        galleryContainer.innerHTML = "";
        if (project.gallery && project.gallery.length > 0) {
            project.gallery.forEach(img => {
                const image = document.createElement("img");
                image.src = img;
                image.alt = project.title;
                galleryContainer.appendChild(image);
            });
        } else {
            galleryContainer.innerHTML = "<p>Brak dodatkowych obrazów.</p>";
        }
    }
}

// Uruchom ładowanie tylko jeśli jesteśmy na project.html
if (document.querySelector(".project-header")) {
    loadProject();
}

