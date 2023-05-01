(function(){
    let btn = document.getElementById('hamburger_menu');

    const items = [{
        "title": "Serious Road Trips: The Most Epic Drives on Earth",
        "author": "esther trattner",
        "pub_date": "14.02.2008",
        "headline":"They'll make you wonder: What were the designers thinking???",
        "background_img": "img/coastal-image.jpg"
    },{
        "title": "Repulsive Rides: The Ugliest Cars of 2018",
        "author": "esther trattner",
        "pub_date": "07.18.2018",
        "headline":"They'll make you wonder: What were the designers thinking???",
        "background_img": "img/audi.jpg"
    },{
        "title": "The Money Tips You Wish You Could Give to Your Younger Self",
        "author": "doug whiteman",
        "pub_date": "07.16.2018",
        "headline":"These should look familiar from all those times you've said, ''If I'd only known!''",
        "background_img": "img/mountainface.jpg"
    }];
    // ,{
    //     "title": "Keep Out! The Countries That Are Hardest to Visit",
    //     "author": "graham hughes",
    //     "pub_date": "07.05.2018",
    //     "headline":"These forbidding places put out the un-welcome mat. They prefer that you stay home.",
    //     "background_img": "img/coastal-image.jpg"
    // }

    let next = document.getElementById("next");
    let previous = document.getElementById("previous");

    const itemLength = items.length -1;
    let slide = 0;

    function sticky () {
        let bar = document.getElementById('sticky_nav');
        let pm = document.getElementById('header');

        if(window.innerWidth >= 767) {
            if(window.scrollY >= 95) {
                bar.classList.add('active')
            } else {
                bar.classList.remove('active');
            }
        } else {
            if(window.scrollY >= 10) {
                pm.classList.add('active')
            } else {
                pm.classList.remove('active');
            }
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
    next.addEventListener('click', function (){
        console.log('next clicked!');
        if (slide === itemLength) {
            slide = 0;
        } else {
            slide++;
        }
        showItem(slide);
    });

    previous.addEventListener('click', function (){
        console.log('previous clicked!');
        if (slide === 0) {
            slide = itemLength;
        } else {
            slide--;
        }
        showItem(slide);
    });

    function showItem(index){
        const number = document.getElementById("number");
        const header = document.getElementById("slide_header");
        const author = document.getElementById("slide_author");
        const date = document.getElementById("slide_date");
        const headline = document.getElementById("slide_content-healdine");
        const background = document.getElementById("main-image");
        let test = index + 1;
        setTimeout(() => {
            number.innerHTML = '0'+ test;
            header.innerHTML = items[index].title;
            author.innerHTML = items[index].author;
            date.innerHTML = items[index].pub_date;
            headline.innerHTML = items[index].headline;
            background.style.backgroundImage = "url("+items[index].background_img+")";
        }, 500);
    }
    showItem(0);
    btn.addEventListener('click',toggleMenu);
    window.addEventListener('scroll',sticky);
}());