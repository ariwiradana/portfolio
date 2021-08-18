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
   $(".dark-mode-toggle").click(function () {
      // body
      $("body").toggleClass("light-mode dark-mode");

      // left nav
      $(".left-nav-light").toggleClass("left-nav-dark");
      $(".left-darkmode-icon").toggleClass("uil-moon uil-sun");
      $(".left-nav-icon").toggleClass("left-nav-icon-dark");

      // bottom nav
      $(".bottom-nav-title").toggleClass("text-light");
      $(".bottom-nav-content").toggleClass("bottom-nav-light bottom-nav-dark");
      $(".bottom-nav-icon").toggleClass("bottom-nav-icon-dark");
      $(".botttom-nav-darkmode-icon").toggleClass("uil-moon uil-sun");

      // mobile nav
      $(".light-icon").toggleClass("icon-hide");
      $(".dark-icon").toggleClass("icon-hide");
      $(".nav-toggle-dark-mode-icon").toggleClass("uil-moon uil-sun");
      $(".nav-bars-icon").toggleClass("nav-bars-icon-dark");

      // bottom menu
      $(".bottom-menu-content").toggleClass(
         "bottom-menu-light bottom-menu-dark"
      );
      $(".bottom-menu-title").toggleClass("bottom-menu-title-dark");

      // text
      $(".heading-1").toggleClass("text-light");
      $(".heading-2").toggleClass("text-light");
      $(".heading-3").toggleClass("text-light");
      $(".heading-4").toggleClass("text-light");

      // nav
      $(".nav-content").toggleClass("nav-light nav-dark");
      $(".nav-link div").toggleClass("nav-link-light nav-link-dark");
      $(".nav-bars").toggleClass("nav-bars-icon nav-bars-icon-dark");

      // card
      $(".card").toggleClass("card-dark");
      $(".card-img-top").toggleClass("card-img-top-dark");
      $(".card-title").toggleClass("card-title-dark");

      // alert
      $(".alert-content").toggleClass("alert-light alert-dark");
      $(".alert-title").toggleClass("alert-title-dark");

      // about
      $(".about-title").toggleClass("about-title-dark");

      // form
      $(".form-input").toggleClass("form-input-dark");

      // skills
      $(".progress-bar").toggleClass("progress-bar-dark");
      $(".skills-title").toggleClass("skills-title-dark");

      // contact
      $(".contact-title").toggleClass("contact-title-dark");

      // footer
      $(".footer-container").toggleClass("footer-container-dark");
   });
};

const bottomMenu = () => {
   $(".btn-bars").click(function () {
      $(".bottom-menu-container").toggleClass("bottom-menu-active");
   });

   $(".bottom-menu-container, .bottom-menu-close, body").click(function () {
      $(this).removeClass("bottom-menu-active");
   });
};

const navScroll = () => {
   let lastScrollTop = 0;
   $(window).scroll(function (event) {
      let st = $(this).scrollTop();
      if (st > lastScrollTop) {
         $(".nav-container").css({
            top: "-200px",
            transition: ".4s ease",
         });

         $(".bottom-nav-container").css({
            bottom: "0",
            transition: ".4s ease",
         });

         setTimeout(function () {
            $(".alert-container").removeClass("alert-active");
            $(".bottom-menu-container").removeClass("bottom-menu-active");
            $(".left-nav-container").addClass("left-nav-active");
         }, 500);
      } else {
         $(".nav-container").css({
            top: "0",
            transition: ".4s ease",
         });

         $(".bottom-nav-container").css({
            bottom: "-100px",
            transition: ".4s ease",
         });

         setTimeout(function () {
            $(".alert-container").removeClass("alert-active");
            $(".bottom-menu-container").removeClass("bottom-menu-active");
            $(".left-nav-container").removeClass("left-nav-active");
         }, 500);
      }
      lastScrollTop = st;
   });
};

const Alert = () => {
   $(".alert-close-icon, .alert-container").click(function () {
      $(".alert-container").removeClass("alert-active");
   });
};

const leftNav = () => {
   const tooltipToggle = (e) => {
      $(`#left-${e}`).hover(() => {
         $(`#left-${e} .tooltip`).text(`${e}`);
         $(`#left-${e} .tooltip`).toggleClass("tooltip-active");
      });
   };

   tooltipToggle("home");
   tooltipToggle("about");
   tooltipToggle("projects");
   tooltipToggle("skills");
   tooltipToggle("contact");
};

const bottomNav = () => {
   $(window).scroll(() => {
      let scrollTop = Math.round($(window).scrollTop() + $(window).height());
      let about = Math.round($("#about").offset().top) + 250;
      let projects = Math.round($("#projects").offset().top) + 250;
      let skills = Math.round($("#skills").offset().top) + 250;
      let contact = Math.round($("#contact").offset().top) + 250;
      const leftNav = document.querySelectorAll(".left-nav-item a i");
      const navLink = document.querySelectorAll(".nav-link");

      if (scrollTop < about) {
         $(".bottom-nav-title").text("Home");
         $("#bottom-nav-link").attr("href", "#home");

         for (let nav of navLink) {
            nav.classList.remove("nav-active");
         }
         navLink[0].classList.add("nav-active");

         for (let i of leftNav) {
            i.classList.remove("left-nav-icon-active");
         }
         leftNav[0].classList.add("left-nav-icon-active");
      } else if (scrollTop > about && scrollTop < projects) {
         $(".bottom-nav-title").text("About");
         $("#bottom-nav-link").attr("href", "#about");

         for (let nav of navLink) {
            nav.classList.remove("nav-active");
         }
         navLink[1].classList.add("nav-active");

         for (let i of leftNav) {
            i.classList.remove("left-nav-icon-active");
         }
         leftNav[1].classList.add("left-nav-icon-active");
      } else if (scrollTop > projects && scrollTop < skills) {
         $(".bottom-nav-title").text("Projects");
         $("#bottom-nav-link").attr("href", "#projects");

         for (let nav of navLink) {
            nav.classList.remove("nav-active");
         }
         navLink[2].classList.add("nav-active");

         for (let i of leftNav) {
            i.classList.remove("left-nav-icon-active");
         }
         leftNav[2].classList.add("left-nav-icon-active");
      } else if (scrollTop > skills && scrollTop < contact) {
         $(".bottom-nav-title").text("Skills");
         $("#bottom-nav-link").attr("href", "#skills");

         for (let nav of navLink) {
            nav.classList.remove("nav-active");
         }
         navLink[2].classList.add("nav-active");

         for (let i of leftNav) {
            i.classList.remove("left-nav-icon-active");
         }
         leftNav[2].classList.add("left-nav-icon-active");
      } else if (scrollTop > contact) {
         $(".bottom-nav-title").text("Contact");
         $("#bottom-nav-link").attr("href", "#contact");

         for (let nav of navLink) {
            nav.classList.remove("nav-active");
         }
         navLink[3].classList.add("nav-active");

         for (let i of leftNav) {
            i.classList.remove("left-nav-icon-active");
         }
         leftNav[3].classList.add("left-nav-icon-active");
      }
   });
};

const project = () => {
   let data = [
      {
         name: "Karéns House",
         category: "Web Development",
         thumb: "Karens House.png",
         link: "https://ariwiradana.github.io/karenshouseubud/",
      },
      {
         name: "Sipandu Beradat",
         category: "Web Front End Development",
         thumb: "Sipandu Beradat Web.png",
         link: "",
      },
      {
         name: "Sipandu Beradat",
         category: "Mobile UI/UX Design",
         thumb: "Sipandu Beradat Mobile.png",
         link: "",
      },
   ];
   const projectContent = document.querySelector(".project-content");

   data.map((obj, i) => {
      const row = `
            <div class="card project-item" data-aos="fade-right" data-aos-duration="1000">
                <div class="card-img-top">
                    <div class="card-img-overlay mr-1 mb-1">
                        <button class="btn-circle btn-primary btn-project link" id="btn-project-${i}" data-title="${obj.name}" data-link="${obj.link}" data-subtitle="${obj.category}">
                            <i class="uil uil-ellipsis-h link" data-title="${obj.name}" data-link="${obj.link}" data-subtitle="${obj.category}"></i>
                        </button>
                    </div>
                    <img class="card-img" src="assets/img/${obj.thumb}" alt="">
                </div>
                <div class="card-body" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <div class="card-title">${obj.name}</div>
                    <div class="badge badge-outline-primary text-right">${obj.category}</div>
                </div>

            </div>
        `;
      projectContent.insertAdjacentHTML("beforeend", row);
   });

   document.addEventListener("click", (e) => {
      if (e.target.classList.contains("link")) {
         const title = e.target.dataset.title;
         const subtitle = e.target.dataset.subtitle;
         const link = e.target.dataset.link;

         if (!link) {
            document
               .querySelector(".btn-alert-visit")
               .classList.add("alert-btn-hide");
         } else {
            document
               .querySelector(".btn-alert-visit")
               .classList.remove("alert-btn-hide");
         }

         document
            .querySelector(".alert-container")
            .classList.remove("alert-active");

         setTimeout(() => {
            document
               .querySelector(".alert-container")
               .classList.add("alert-active");
            document.querySelector(".alert-link").setAttribute("href", link);
            document.querySelector(".alert-title").innerHTML = title;
            document.querySelector(".alert-subtitle").innerHTML = subtitle;
         }, 400);
      }
   });

   const slider = document.querySelector(".project-content");
   let isDown = false;
   let startX;
   let scrollLeft;

   slider.addEventListener("mousedown", (e) => {
      isDown = true;
      if (
         e.target.classList.contains("card-img") ||
         e.target.classList.contains("card-body") ||
         e.target.classList.contains("card-title") ||
         e.target.classList.contains("card-text") ||
         e.target.classList.contains("badge")
      ) {
         slider.classList.add("project-grabbing");
      }
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
   });

   slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("project-grabbing");
   });

   slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("project-grabbing");
   });

   slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
   });
};

// skills
const skillContent = document.querySelector(".skills-content");
let skills = [
   {
      skill: "HTML - CSS",
      percent: 85,
   },
   {
      skill: "Adobe XD",
      percent: 85,
   },
   {
      skill: "Adobe Illustrator",
      percent: 80,
   },
   {
      skill: "Adobe Photoshop",
      percent: 75,
   },
   {
      skill: "Javascript",
      percent: 70,
   },
   {
      skill: "PHP",
      percent: 60,
   },
];

skills.map((item) => {
   const content = `
        <div class="skills-item">
            <div class="skills-header" data-aos="fade-right" data-aos-duration="1000">
                <div class="skills-title">${item.skill}</div>
                <div class="skills-percent">${item.percent}%</div>
            </div>
            <div class="progress-bar progress-bar-light" data-aos="fade-left" data-aos-duration="1000">
                <div class="progress" style="width:${item.percent}%"></div>
            </div>
        </div>`;
   skillContent.insertAdjacentHTML("beforeend", content);
});
