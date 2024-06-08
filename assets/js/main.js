/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== Copy Icon ===============*/
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const copiedIcon = document.getElementById('copied-icon');
        copiedIcon.classList.add('show');

        setTimeout(() => {
            copiedIcon.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

/*=============== Data Counter ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/,/g, '').replace(/[^0-9]/g, '');

            const increment = target / 200; // Adjust this for speed

            if (count < target) {
                const newCount = Math.ceil(count + increment);
                if (counter.classList.contains('tokenomics__percentage')) {
                    counter.innerText = newCount.toLocaleString() + '%';
                } else if (counter.classList.contains('tokenomics__subheader-currency')) {
                    counter.innerText = newCount.toLocaleString() + ' tokens';
                } else {
                    counter.innerText = newCount.toLocaleString();
                }
                setTimeout(updateCounter, 10); // Adjust this for speed
            } else {
                if (counter.classList.contains('tokenomics__percentage')) {
                    counter.innerText = target.toLocaleString() + '%';
                } else if (counter.classList.contains('tokenomics__subheader-currency')) {
                    counter.innerText = target.toLocaleString() + ' tokens';
                } else {
                    counter.innerText = target.toLocaleString();
                }
            }
        };
        updateCounter();
    });
});




