let pathIcons = 'img/icons/' 
let body = document.querySelector('body')
let header = document.querySelector('.header') 
let logo = document.querySelector('.logo')
let nav = document.querySelector('nav')
let navLi = document.querySelectorAll('nav li') 
let navLinks = document.querySelectorAll('.nav__link')
let contactInfoColor = document.querySelector('.contact__info')
let heroLink = document.querySelector('.hero__link')
let articles = document.querySelectorAll('*[id^="nav"]');  // выбираем id всех article, начинающегося с nav
let onlyArticles = document.querySelectorAll('article')
//console.log(onlyArticles.length)

let navToggle = document.querySelector('.nav-toggle') 
let toggleImg = document.createElement('img')
toggleImg.className = 'img'
toggleImg.alt = 'Menu'
toggleImg.src = pathIcons + 'icon-menu-1-red.png'
navToggle.append(toggleImg) 

// ------------------------------------------
logo.classList.add('nav__filter')  

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        header.classList.add('nav__filter')
        
        logo.style.willChange = 'auto';
        logo.classList.remove('nav__filter')
        
        Object.keys(navLinks).forEach(link => navLinks[link].classList.add('nav__link_coror_js'))
        
    } else {
        header.classList.remove('nav__filter')
        
        // Свойство will-change позволяет заранее проинформировать браузер об изменениях, которые возможно будут применены к элементу
        logo.style.willChange = 'padding, backgroundColor';
        logo.classList.add('nav__filter')
        
        Object.keys(navLinks).forEach(link => navLinks[link].classList.remove('nav__link_coror_js'))
    }
})


// ----------------------------------------------
let direc1 = 'translateX(' //меню открывается по горизонтали
//let direc1 = 'translateY(' //меню открывается по вертикали

let direc2 = '-300' // слева / сверху
//let direc2 = '300' // справа / снизу

let direc3 = '%)'
let direction = direc1 + direc2 + direc3 
let directionValue = 0

let mql = window.matchMedia('(max-width: 1024px)')
mqFunction(mql) 
mql.addListener(mqFunction) 

function mqFunction(mql) { 
    if (mql.matches) {      
        Object.keys(navLi).forEach(elem => navLi[elem].style.transform = direction) 
        
        h = header.offsetHeight
        //console.log(`1. offsetHeight: ${h}`) 
        showAfterHeader(h)
        
    } else {    
        Object.keys(navLi).forEach(elem => navLi[elem].style.transform = direc1 + '0%)')
        
        h = header.clientHeight - 10
        //console.log(`2. clientHeight: ${h}`) 
        showAfterHeader(h)
    }
}

// переход по ссылке со смещением на длину fixed header
function showAfterHeader(height) {
    let h1 = height + 'px'
    let h2 = height*(-1) + 'px'
    //console.log(`2.1 ${h1}, ${h2}`)  
    Object.keys(onlyArticles).forEach(elem => {
    onlyArticles[elem].style.borderTopWidth = h1
    onlyArticles[elem].style.borderTopStyle = 'solid'
    onlyArticles[elem].style.borderTopColor = 'transparent'
    onlyArticles[elem].style.marginTop = h2
    onlyArticles[elem].style.backgroundClip = 'padding-box'
})
}

// меню - открываем/закрываем
navToggle.addEventListener('click', fNavToggle);

function fNavToggle(e) {  
    if (nav.classList.contains('close')) {
        /* меню закрыто и мы его открываем */
        nav.classList.remove('close')
        nav.classList.add('open') 
        toggleImg.src = pathIcons + 'icon-menu-2-red.png'
        
        Object.keys(navLi).forEach( elem => {           
            navLi[elem].style.transform = direc1 + '0%)'         
//            console.log(`2. ${navLi[elem].style.transform}`)
        }) 
        
        direc2 = direc2*(-1) /* меню появляеся и исчезает в одном направлении */
        
    } else {
        /* меню открыто и мы его закрываем */ 
        nav.classList.remove('open')
        nav.classList.add('close')
        toggleImg.src = pathIcons + 'icon-menu-1-red.png'
        
        Object.keys(navLi).forEach(elem => {   
            navLi[elem].style.transform = direc1 + direc2 + direc3
//            console.log(`3. ${navLi[elem].style.transform}`) 
        })
    }
}


// ----------------------------------------------
// подсвечиваем пункты меню при прокрутке окна - если координата top секции > половины длины видимой части окна (content+padding)

showVisible()
window.addEventListener('scroll', showVisible) 

function showVisible() {
    Object.keys(articles).forEach(elem => {
        if (isVisible(articles[elem])) {          
            let toNavLink = document.querySelector('.nav__link[href="#' + articles[elem].id + '"]') 
            activeNav(toNavLink)
            activeArticle(articles[elem])
        }
    })
}

function isVisible(elem) {
    let coordsElem = elem.getBoundingClientRect();
    let elemVisible = coordsElem.top < document.documentElement.clientHeight/2
    return elemVisible
}

function activeNav(elem) {  
    let currentlyActive = document.querySelector('.nav__link.activeNav'); 
    let shouldBeActive = elem
    
    if (currentlyActive) { 
        currentlyActive.classList.remove('activeNav')
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('activeNav')
    }
}

// .activeArticle in the <head> of HTML
function activeArticle(elem) {  
    let currentlyActive = document.querySelector('article.activeArticle'); 
    let shouldBeActive = elem
    
    if (currentlyActive) { 
    currentlyActive.classList.remove('activeArticle')
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('activeArticle')
    }
}

// ---------------------------------
let alertUp = document.createElement('a'); 
alertUp.className = 'alert_up';  
window.onscroll = function () {
    body.append(alertUp);
    alertUp.style.display = (window.pageYOffset > '300' ? 'block' : 'none');
}

alertUp.addEventListener('click', scrollUp, false);
function scrollUp(){
    var t, s;
    s = document.body.scrollTop || window.pageYOffset;
    t = setInterval (function() {
        if(s > 0) window.scroll(0, s -= 15);
        else clearInterval(t)
    },5);
}

