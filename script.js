const btnMobile = document.getElementById('mobile-btn');

function toggleMenu(){
    const navegar = document.getElementById('navegar');
    navegar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);