
const modal = document.getElementById('signupModal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
   
    const bars = hamburger.querySelectorAll('.bar');
    bars[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    bars[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
// for scrolling tas me line sa baba
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // adjust spacing
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});