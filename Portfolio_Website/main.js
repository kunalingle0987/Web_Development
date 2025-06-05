// Smooth scrolling for navbar and footer links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Download CV button functionality
document.querySelector('.btn1').addEventListener('click', () => {
    alert("CV download feature coming soon!");
    // You can replace this with actual download:
    // window.open('path/to/your-cv.pdf', '_blank');
});

// Scroll to "About" section on 'Explore More' click
document.querySelector('.btn2').addEventListener('click', () => {
    document.querySelector('#jumpabout').scrollIntoView({ behavior: 'smooth' });
});

// Highlight navbar items as per current scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Optional: Make external links open in new tab
document.querySelectorAll('.contactDt a').forEach(link => {
    if (link.href && !link.href.startsWith(window.location.origin)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});
