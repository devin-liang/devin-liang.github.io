let menu = document.getElementById('menu');
let exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
})

exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
})

