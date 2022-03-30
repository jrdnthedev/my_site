(function(){

    function sticky () {
        let bar = document.getElementById('sticky_nav');

        if(window.scrollY >= 95 ) {
            bar.classList.add('active')
        } else {
            bar.classList.remove('active');
        }
    }
    window.addEventListener('scroll',sticky);
}());