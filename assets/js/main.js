/* ==================SHOW MENU ==========*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate that variables exist

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            //add show-menu class to the div tag with nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* ==================REMOVE MENU MOBILE==========*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    // when click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach( n => n.addEventListener('click', linkAction))

/* ========= Scroll sections active link======= */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-lick')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-lick')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/* ========== show scroll top ==== */

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    // when the scroll is higher than 200 viewport height, add th show-scroll class
    if(this.scrollY >= 200) 
        scrollTop.classList.add('show-scroll');
     else 
        scrollTop.classList.remove('show-scroll');
    
}

window.addEventListener('scroll', scrollTop)

/* ========== REDUCE THE SIZE AND PRINT ON AN A4 SHEET============ */ 
function scaleCv() {
    document.body.classList.add('scale-cv')
}

// ================ REMOVE THE SIZE WHen the CV IS DOWNLOADED

function removeScale() {
    document.body.classList.remove('scale-cv')
}

// ============== GENERATE PDF ===========

// PDF generated area 
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Html2pdf options
let opt = {
    margin:       0,
    filename:     'QuiCV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };

// function to call areaCv and html2Pdf options
    function generateResume() {
        html2pdf(areaCv, opt)
    }

//  when the button is clicked, it executes the 3 functions

resumeButton.addEventListener('click', () => {

    //1. the class .scale-cv is added to the body, where it reduces the size
    scaleCv()

    // 2. the PDF is generated
    generateResume()

    // 3. the .scale-cv class is removed from the body after 4s to return normal size
    setTimeout(removeScale, 4000)
})
