
//Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#topnavmain',
            offset: 50
        });



//Funcion Change color of navbar on scroll transparent to black to transparent

  window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.topnav');

        if (window.scrollY > 0) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-black');
        } else {
            navbar.classList.remove('bg-black');
            navbar.classList.add('bg-transparent');
        }
    });