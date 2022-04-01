(function(){
    let btn = document.getElementById('hamburger_menu');

    function sticky () {
        let bar = document.getElementById('sticky_nav');

        if(window.scrollY >= 95 ) {
            bar.classList.add('active')
        } else {
            bar.classList.remove('active');
        }
    }

    function toggleMenu() {
        
        let menu =  document.getElementById('main_menu');

        if(!menu.classList.contains('active')){
            menu.classList.add('active');
            btn.setAttribute('aria-expanded','true');
        } else {
            menu.classList.remove('active');
            btn.setAttribute('aria-expanded','false');
        }
    }
    btn.addEventListener('click',toggleMenu);
    window.addEventListener('scroll',sticky);
}());