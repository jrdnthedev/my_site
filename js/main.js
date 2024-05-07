(function () {
  const items = [
    {
      title: "Serious Road Trips: The Most Epic Drives on Earth",
      author: "esther trattner",
      pub_date: "14.02.2008",
      headline: "They'll make you wonder: What were the designers thinking???",
      background_img: "img/coastal-image.jpg",
    },
    {
      title: "Repulsive Rides: The Ugliest Cars of 2018",
      author: "esther trattner",
      pub_date: "07.18.2018",
      headline: "They'll make you wonder: What were the designers thinking???",
      background_img: "img/audi.jpg",
    },
    {
      title: "The Money Tips You Wish You Could Give to Your Younger Self",
      author: "doug whiteman",
      pub_date: "07.16.2018",
      headline:
        "These should look familiar from all those times you've said, ''If I'd only known!''",
      background_img: "img/mountainface.jpg",
    },
  ];

  function preloadImages(items) {
    const images = [];
    items.forEach((item) => {
      const img = new Image();
      img.src = item.background_img;
      images.push(img);
    });
    return images;
  }

  function initializeCarousel() {
    let next = document.getElementById("next");
    let previous = document.getElementById("previous");

    const itemLength = items.length - 1;
    let slide = 0;

    next.addEventListener("click", function () {
      if (slide === itemLength) {
        slide = 0;
      } else {
        slide++;
      }
      showItem(slide);
    });

    previous.addEventListener("click", function () {
      if (slide === 0) {
        slide = itemLength;
      } else {
        slide--;
      }
      showItem(slide);
    });

    showItem(slide); // Show initial item
  }

  function showItem(index) {
    const number = document.getElementById("number");
    const header = document.getElementById("slide_header");
    const author = document.getElementById("slide_author");
    const date = document.getElementById("slide_date");
    const headline = document.getElementById("slide_content-healdine");
    const background = document.getElementById("main-image");
    let test = index + 1;
    setTimeout(() => {
      number.innerHTML = "0" + test;
      header.innerHTML = items[index].title;
      author.innerHTML = items[index].author;
      date.innerHTML = items[index].pub_date;
      headline.innerHTML = items[index].headline;
      background.style.backgroundImage =
        "url(" + items[index].background_img + ")";
    }, 500);
  }

  const preloadedImages = preloadImages(items);
  preloadedImages[preloadedImages.length - 1].addEventListener(
    "load",
    initializeCarousel
  );
})();
