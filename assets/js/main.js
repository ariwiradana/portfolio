$(document).ready(function () {
    AOS.init();
    darkModeToggle();
    navScroll();
    bottomNav();
    project();
    Alert();
    leftNav();
    bottomMenu();
});

function darkModeToggle() {
    $('.dark-mode-toggle').click(function () {
        // body
        $('body').toggleClass('light-mode dark-mode');

        // left nav
        $('.left-nav-light').toggleClass('left-nav-dark');
        $('.left-nav-separator').toggleClass('left-nav-separator-dark');
        $('.left-nav-icon').toggleClass('uil-sun uil-moon')

        // bottom nav
        $('.bottom-nav-title').toggleClass('text-light');
        $('.bottom-nav-content').toggleClass('bottom-nav-light bottom-nav-dark');
        $('.bottom-nav-icon').toggleClass('bottom-nav-icon-dark');
        $('.botttom-nav-darkmode-icon').toggleClass('uil-sun uil-moon')

        // mobile nav
        $('.light-icon').toggleClass('icon-hide');
        $('.dark-icon').toggleClass('icon-hide');
        $('.nav-toggle-dark-mode-icon').toggleClass('uil-sun uil-moon');
        $('.nav-bars-icon').toggleClass('nav-bars-icon-dark')

        // bottom menu
        $('.bottom-menu-content').toggleClass('bottom-menu-light bottom-menu-dark');
        $('.bottom-menu-title').toggleClass('bottom-menu-title-dark');

        // text
        $('.heading-1').toggleClass('text-light');
        $('.heading-2').toggleClass('text-light');
        $('.heading-3').toggleClass('text-light');
        $('.heading-4').toggleClass('text-light');

        // nav
        $('.nav-content').toggleClass('nav-light nav-dark');
        $('.nav-link div').toggleClass('nav-link-light nav-link-dark');
        $('.nav-bars').toggleClass('nav-bars-icon nav-bars-icon-dark');

        // card
        $('.card').toggleClass('card-dark');
        $('.card-img-top').toggleClass('card-img-top-dark');
        $('.card-title').toggleClass('card-title-dark');

        // alert
        $('.alert-content').toggleClass('alert-light alert-dark');
        $('.alert-title').toggleClass('alert-title-dark');

        // form
        $('.form-input').toggleClass('form-input-dark');
    });
}

function bottomMenu() {
    $('.btn-bars').click(function () {
        $('.bottom-menu-container').toggleClass('bottom-menu-active');
    });

    $('.bottom-menu-container, .bottom-menu-close, body').click(function () {
        $(this).removeClass('bottom-menu-active');
    });
}

function navScroll() {
    let lastScrollTop = 0;
    $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.nav-container').css({
                'top': '-200px',
                'transition': '.4s ease'
            });

            $('.bottom-nav-container').css({
                'bottom': '0',
                'transition': '.4s ease'
            });

            setTimeout(function () {
                $('.alert-container').removeClass('alert-active');
                $('.left-nav-container').removeClass('left-nav-active');
                $('.bottom-menu-container').removeClass('bottom-menu-active');
            }, 500);

        } else {
            $('.nav-container').css({
                'top': '0',
                'transition': '.4s ease'
            });

            $('.bottom-nav-container').css({
                'bottom': '-100px',
                'transition': '.4s ease'
            });

            setTimeout(function () {
                $('.alert-container').removeClass('alert-active');
                $('.left-nav-container').removeClass('left-nav-active');
                $('.bottom-menu-container').removeClass('bottom-menu-active');
            }, 500);
        }
        lastScrollTop = st;
    });
}

function Alert() {
    $('.alert-close-icon').click(function () {
        $('.alert-container').removeClass('alert-active');
    })
}

function leftNav() {
    $('.left-nav-separator').click(function () {
        $('.left-nav-container').toggleClass('left-nav-active')
    })
}

function bottomNav() {
    let projects = $("#projects").offset().top;
    let about = $('#about').offset().top;
    let contact = $('#contact').offset().top;

    let $window = $(window).scroll(function () {
        if ($window.scrollTop() > projects) {
            $('.bottom-nav-title').text('projects');
        } else if ($window.scrollTop() > about) {
            $('.bottom-nav-title').text('About')
        } else if ($window.scrollTop() > contact) {
            $('.bottom-nav-title').text('Contact')
        }
    });
}

function project() {
    let data = [
        ['Karens House', 'Web Development', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.', 'https://ariwiradana.github.io/karenshouseubud/'],
        ['Sipandu Beradat', 'UI/UX', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
        ['Engine Room Club', 'Graphic Design', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
    ];

    $.each(data, function (i, obj) {
        $('.project-content').append(`
            <div class="card project-item" data-aos="fade-right" data-aos-duration="1000">
                <div class="card-img-top">
                    <div class="card-img-overlay mr-1 mb-1">
                        <button class="btn-circle btn-primary btn-project" id="btn-project-${i}" data-title="${obj[0]}" data-link="${obj[3]}" data-subtitle="${obj[1]}"><i class="uil uil-angle-right"></i></button>
                    </div>
                    <img class="card-img" src="https://source.unsplash.com/random?sig=${i + 1}&${obj[0].toLowerCase()}" alt="">
                </div>
                <div class="card-body" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <div class="card-title">${obj[0]}</div>
                    <p class="body-text">${obj[2]}</p>
                    <div class="badge badge-outline-primary mt-1 text-right">${obj[1]}</div>
                </div>
            </div>
        `);

        $('.btn-project').click(function () {
            let title = $(this).data("title");
            let link = $(this).data("link");
            let subtitle = $(this).data("subtitle");

            if (link == 'undefined') {
                $('.btn-alert-visit').hide();
            } else {
                $('.btn-alert-visit').show();
            }

            $('.alert-container').addClass('alert-active');
            $('.alert-link').attr('href', link);
            $('.alert-title').text(title);
            $('.alert-subtitle').text(subtitle);
        });
    })



}