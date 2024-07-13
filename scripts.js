document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('fade-in');
            }
        });
    };
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    // Image Modal
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const profileImg = document.getElementById('profile-img');
    const close = document.querySelector('.close');

    profileImg.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = profileImg.src;
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Modal script
var modal = document.getElementById("modal");
var img = document.getElementById("profile-img");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    // Image Modal
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const profileImg = document.getElementById('profile-img');
    const close = document.querySelector('.close');

    profileImg.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = profileImg.src;
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;
        if (!validateEmail(email) || message.trim() === '') {
            event.preventDefault();
            alert('Please enter a valid email and message.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Modal Popup
    const images = document.querySelectorAll('#portfolio .project img');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');

    for (const image of images) {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalContent.src = this.src;
        });
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling with Spacing
    const links = document.querySelectorAll('nav ul li a');
    const headerHeight = document.querySelector('header').offsetHeight;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('fade-in');
            }
        });
    };
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    // Image Modal
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const profileImg = document.getElementById('profile-img');
    const close = document.querySelector('.close');

    profileImg.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = profileImg.src;
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});




