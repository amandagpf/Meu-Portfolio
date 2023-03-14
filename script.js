const btnMobile = document.getElementById('mobile-btn');

function toggleMenu(){
    if(Event.type === 'touchstart') Event.preventDefault();
    const navegar = document.getElementById('navegar');
    navegar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const meusDiferenciais = document.getElementById('meus-diferenciais');

    function openDiferenciais(){
        const open = document.getElementsByClassName('diferenciais');
        open.classList.add('active')
    }

meusDiferenciais.addEventListener('click', openDiferenciais);