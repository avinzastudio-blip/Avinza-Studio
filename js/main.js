const hero = document.querySelector(".hero");

const browser = document.querySelector(".browser");

const cards = document.querySelectorAll(".floating-card");

hero.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

browser.style.transform=
`translateX(-50%) rotate(${-2+x*.15}deg)
translate(${x*.6}px,${y*.6}px)`;

cards.forEach((card,index)=>{

const speed=(index+1)*0.35;

card.style.transform=
`translate(${x*speed}px,${y*speed}px)`;

});

});

hero.addEventListener("mouseleave",()=>{

browser.style.transform=
"translateX(-50%) rotate(-2deg)";

cards.forEach(card=>{

card.style.transform="translate(0,0)";

});

});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;

            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + id
                );
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));
/* ==========================================
   AVINZA STUDIO
   MAIN JS
   PART 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       REMOVE LOADER
    ===================================== */

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

        const loader = document.querySelector(".loader");

        if (loader) {

            setTimeout(() => {

                loader.style.opacity = "0";

                loader.style.visibility = "hidden";

            }, 600);

        }

    });


    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);


    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            const offset = 100;

            const top =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            window.scrollTo({

                top,

                behavior:"smooth"

            });

        });

    });


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

    function activeNav(){

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 180;
            const height = section.offsetHeight;

            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    }

    activeNav();

    window.addEventListener("scroll",activeNav);


    /* =====================================
       MOBILE MENU
    ===================================== */

    const hamburger = document.querySelector(".hamburger");

    const nav = document.querySelector(".nav-links");

    if(hamburger && nav){

        hamburger.addEventListener("click",()=>{

            hamburger.classList.toggle("open");

            nav.classList.toggle("show");

        });

        nav.querySelectorAll("a").forEach(link=>{

            link.addEventListener("click",()=>{

                hamburger.classList.remove("open");

                nav.classList.remove("show");

            });

        });

    }

});
/* ==========================================
   PART 2
   PREMIUM ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealItems = document.querySelectorAll(
        ".service-card, \
         .about-card, \
         .floating-card, \
         .project-showcase, \
         .project-info, \
         .contact-card, \
         .contact-form, \
         .projects-ending"
    );

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("reveal");

                revealObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:0.15

    });

    revealItems.forEach(item=>{

        revealObserver.observe(item);

    });


    /* =====================================
       HERO ENTRANCE
    ===================================== */

    const heroContent = document.querySelector(".hero-content");
    const browser = document.querySelector(".browser");

    if(heroContent){

        heroContent.classList.add("hero-show");

    }

    if(browser){

        setTimeout(()=>{

            browser.classList.add("browser-show");

        },350);

    }


    /* =====================================
       FLOATING HERO BROWSER
    ===================================== */

    if(browser){

        let angle = 0;

        function floatBrowser(){

            angle += 0.015;

            browser.style.transform =
            `
            translateY(${Math.sin(angle)*8}px)
            rotate(${Math.sin(angle)*1.2}deg)
            `;

            requestAnimationFrame(floatBrowser);

        }

        floatBrowser();

    }


    /* =====================================
       FLOATING GLASS CARDS
    ===================================== */

    document.querySelectorAll(".floating-card").forEach((card,index)=>{

        let offset = index*1.8;

        function animate(){

            offset += 0.015;

            card.style.transform =
            `translateY(${Math.sin(offset)*8}px)`;

            requestAnimationFrame(animate);

        }

        animate();

    });


    /* =====================================
       PROJECT PHONE FLOAT
    ===================================== */

    const phone = document.querySelector(".project-mobile");

    if(phone){

        let a = 0;

        function phoneFloat(){

            a += 0.018;

            phone.style.transform =
            `translateY(${Math.sin(a)*10}px)`;

            requestAnimationFrame(phoneFloat);

        }

        phoneFloat();

    }


    /* =====================================
       BUTTON HOVER LIFT
    ===================================== */

    document.querySelectorAll(
        ".primary-btn,.project-btn,.project-contact-btn,.contact-form button"
    ).forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-4px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0)";

        });

    });

});
/* ==========================================
   PART 3
   PREMIUM INTERACTIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       CURSOR GLOW
    ===================================== */

    const glow = document.querySelector(".cursor-glow");

    if(glow && window.innerWidth > 992){

        document.addEventListener("mousemove",(e)=>{

            glow.style.opacity = "1";

            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";

        });

    }


    /* =====================================
       SCROLL PROGRESS BAR
    ===================================== */

    const progress = document.createElement("div");

    progress.className = "scroll-progress";

    document.body.appendChild(progress);

    function updateProgress(){

        const scrollTop = window.pageYOffset;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollTop / height) * 100;

        progress.style.width = percent + "%";

    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);


    /* =====================================
       BUTTON RIPPLE
    ===================================== */

    document.querySelectorAll("button,a.primary-btn,.project-btn,.project-contact-btn")
    .forEach(btn=>{

        btn.style.position="relative";
        btn.style.overflow="hidden";

        btn.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            const size=Math.max(this.clientWidth,this.clientHeight);

            ripple.style.width=size+"px";
            ripple.style.height=size+"px";

            ripple.style.left=e.offsetX-size/2+"px";
            ripple.style.top=e.offsetY-size/2+"px";

            ripple.className="ripple";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });


    /* =====================================
       PARALLAX HERO
    ===================================== */

    const hero = document.querySelector(".hero");

    const browser = document.querySelector(".browser");

    window.addEventListener("scroll",()=>{

        if(!hero || !browser) return;

        const y = window.pageYOffset;

        if(y < hero.offsetHeight){

            browser.style.transform +=
                ` translateY(${y*0.05}px)`;

        }

    });


    /* =====================================
       PARALLAX ABOUT
    ===================================== */

    const about = document.querySelector(".about-studio");

    window.addEventListener("scroll",()=>{

        if(!about) return;

        const y = window.pageYOffset;

        about.style.backgroundPosition =
            `center ${y*0.08}px`;

    });

});