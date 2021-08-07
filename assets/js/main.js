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

const darkModeToggle = () => {
    $('.dark-mode-toggle').click(function () {
        // body
        $('body').toggleClass('light-mode dark-mode');

        // left nav
        $('.left-nav-light').toggleClass('left-nav-dark');
        $('.left-darkmode-icon').toggleClass('uil-moon uil-sun');
        $('.left-nav-icon').toggleClass('left-nav-icon-dark');

        // bottom nav
        $('.bottom-nav-title').toggleClass('text-light');
        $('.bottom-nav-content').toggleClass('bottom-nav-light bottom-nav-dark');
        $('.bottom-nav-icon').toggleClass('bottom-nav-icon-dark');
        $('.botttom-nav-darkmode-icon').toggleClass('uil-moon uil-sun')

        // mobile nav
        $('.light-icon').toggleClass('icon-hide');
        $('.dark-icon').toggleClass('icon-hide');
        $('.nav-toggle-dark-mode-icon').toggleClass('uil-moon uil-sun');
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

        // about
        $('.about-title').toggleClass('about-title-dark');

        // form
        $('.form-input').toggleClass('form-input-dark');

        // contact
        $('.contact-title').toggleClass('contact-title-dark');

        // footer
        $('.footer-container').toggleClass('footer-container-dark');

    });
}

const bottomMenu = () => {
    $('.btn-bars').click(function () {
        $('.bottom-menu-container').toggleClass('bottom-menu-active');
    });

    $('.bottom-menu-container, .bottom-menu-close, body').click(function () {
        $(this).removeClass('bottom-menu-active');
    });

}

const navScroll = () => {
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
                $('.bottom-menu-container').removeClass('bottom-menu-active');
                $('.left-nav-container').addClass('left-nav-active');
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
                $('.bottom-menu-container').removeClass('bottom-menu-active');
                $('.left-nav-container').removeClass('left-nav-active');
            }, 500);
        }
        lastScrollTop = st;
    });
}

const Alert = () => {
    $('.alert-close-icon, .alert-container').click(function () {
        $('.alert-container').removeClass('alert-active');
    });
}

const leftNav = () => {
    const tooltipToggle = (e) => {
        $(`#left-${e}`).hover(() => {
            $(`#left-${e} .tooltip`).text(`${e}`);
            $(`#left-${e} .tooltip`).toggleClass('tooltip-active');
        });
    }

    tooltipToggle('home');
    tooltipToggle('about');
    tooltipToggle('projects');
    tooltipToggle('contact');

}

const bottomNav = () => {

    $(window).scroll(() => {
        let scrollTop = Math.round($(window).scrollTop() + $(window).height());
        let about = Math.round($('#about').offset().top) + 250;
        let projects = Math.round($('#projects').offset().top) + 250;
        let contact = Math.round($('#contact').offset().top) + 250;
        const leftNav = document.querySelectorAll('.left-nav-item a i');
        const navLink = document.querySelectorAll('.nav-link');

        if (scrollTop < about) {
            $('.bottom-nav-title').text('Home');
            $('#bottom-nav-link').attr('href', '#home');

            for (let nav of navLink) {
                nav.classList.remove('nav-active');
            }
            navLink[0].classList.add('nav-active');

            for (let i of leftNav) {
                i.classList.remove('left-nav-icon-active');
            }
            leftNav[0].classList.add('left-nav-icon-active');
        } else if (scrollTop > about && scrollTop < projects) {
            $('.bottom-nav-title').text('About');
            $('#bottom-nav-link').attr('href', '#about');

            for (let nav of navLink) {
                nav.classList.remove('nav-active');
            }
            navLink[1].classList.add('nav-active');

            for (let i of leftNav) {
                i.classList.remove('left-nav-icon-active');
            }
            leftNav[1].classList.add('left-nav-icon-active');
        } else if (scrollTop > projects && scrollTop < contact) {
            $('.bottom-nav-title').text('Projects');
            $('#bottom-nav-link').attr('href', '#projects');

            for (let nav of navLink) {
                nav.classList.remove('nav-active');
            }
            navLink[2].classList.add('nav-active');

            for (let i of leftNav) {
                i.classList.remove('left-nav-icon-active');
            }
            leftNav[2].classList.add('left-nav-icon-active');
        } else if (scrollTop > contact) {
            $('.bottom-nav-title').text('Contact');
            $('#bottom-nav-link').attr('href', '#contact');

            for (let nav of navLink) {
                nav.classList.remove('nav-active');
            }
            navLink[3].classList.add('nav-active');

            for (let i of leftNav) {
                i.classList.remove('left-nav-icon-active');
            }
            leftNav[3].classList.add('left-nav-icon-active');
        }
    })
}

const project = () => {
    let data = [
        ['Karéns House', 'Web Development', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.', 'https://ariwiradana.github.io/karenshouseubud/'],
        ['Sipandu Beradat', 'UI/UX', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
        ['Engine Room Club', 'Graphic Design', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
    ];
    const projectContent = document.querySelector('.project-content');

    data.forEach((obj, i) => {
        const row = `
            <div class="card project-item" data-aos="fade-right" data-aos-duration="1000">
                <div class="card-img-top">
                    <div class="card-img-overlay mr-1 mb-1">
                        <button class="btn-circle btn-primary btn-project" id="btn-project-${i}" data-title="${obj[0]}" data-link="${obj[3]}" data-subtitle="${obj[1]}"><i class="uil uil-ellipsis-h"></i></button>
                    </div>
                    <img class="card-img" src="https://source.unsplash.com/random?sig=${i + 1}&tech" alt="">
                </div>
                <div class="card-body" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <div class="card-title">${obj[0]}</div>
                    <p class="body-text">${obj[2]}</p>
                    <div class="badge badge-outline-primary mt-1 text-right">${obj[1]}</div>
                </div>
            </div>
        `;

        projectContent.insertAdjacentHTML('beforeend', row);

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
    });

    const projectItem = document.querySelectorAll('.project-item');
    for (let item of projectItem) {
        item.addEventListener('mousedown', (e) => {
            e.preventDefault()
            console.log('clicked');
            item.classList.add('project-grabbing');
        })
    }

    for (let item of projectItem) {
        item.addEventListener('mouseup', () => {
            console.log('not clicked');
            item.classList.remove('project-grabbing');
        })
    }

    for (let item of projectItem) {
        item.addEventListener('mouseleave', () => {
            console.log('not clicked');
            item.classList.remove('project-grabbing');
        })
    }
}