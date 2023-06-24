// ========================DARK THEME=======================
const themeButton = document.getElementById('theme-button')
const darkTheme= 'dark-theme'
const iconTheme ='uil-sun'

// previously selected topic 

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtaining the current theme 

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// validating if the user has previously choosing a topic

if (selectedTheme) {
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// activate/deactivate the theme

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})

//=========MENU SHOW/HiDDEN==========

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ========MENU SHOW =============

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
//==============MENU CLOSE==============
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ===================REMOVE MENU ========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when clicked on nav links , the menu will be removed

    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click',linkAction))

//====================Typewriter effects=========================

new Typewriter('#typewriter', {
  strings: ['Aziz Elbelaychy'],
  autoStart: true,
  loop:true,
  cursor:"|"
});
