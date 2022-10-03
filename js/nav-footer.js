let navLi = document.querySelectorAll('nav li')    
let navLinks = document.querySelectorAll('.nav__link')
let navLinks1Level = document.querySelectorAll('.nav__link_1level')
let topmenus = document.querySelectorAll('.topmenu')
let submenus = document.querySelectorAll('.submenu')
let navLiNotSub = document.querySelectorAll('li:not(.topmenu)') 
let bars = document.querySelectorAll('.bar') // nav-toggle
let articles = document.querySelectorAll('*[id^="el"]');  // выбираем id всех article, начинающегося с el
let wraps = document.querySelectorAll('.wrap') // контент секций
let borderTop = document.querySelectorAll('.borderTop')
let main = document.querySelector('.main') 
let submenu = document.querySelector('.submenu') 
let parent  // function activeSubmenu(elem)
//let navANotSub = document.querySelectorAll('.nav__link:not(.submenu a)')
let submenyFirstChild = document.querySelectorAll('.nav__link[href="#"')

//console.log(document.querySelectorAll('.nav__link_1level').length)

// мобильное меню - открываем/закрываем
//let nav = document.querySelector('.nav')
//let navToggle = document.querySelector('.nav-toggle')
let direc1 = 'translateX(' //меню открывается по горизонтали
//let direc1 = 'translateY(' //меню открывается по вертикали
let direc2 = '-300' // слева / сверху
//let direc2 = '300' // справа / снизу
let direc3 = '%)'

// прокрутка вверх 
let alertUp = document.createElement('div')
alertUp.className = 'alert-up'
let arrowUp = document.createElement('a')
arrowUp.className = 'arrow arrow_up alert-up__arrow'
arrowUp.href = '#el-1'
alertUp.append(arrowUp)
document.body.append(alertUp)

setBorderColor()
// для tablet устанавливаем светлый borderBottom
function setBorderColor() {
    mqFunctionMobMenuBorder(mql) // mql=max-width:1024px (header-nav.js)
    mql.addListener(mqFunctionMobMenuBorder) 
    function mqFunctionMobMenuBorder(mql) {
        if (mql.matches) {
            Object.keys(navLinks1Level).forEach(elem =>{
                if(elem < navLinks1Level.length-1) {
                   navLinks1Level[elem].style.borderBottom = '1px solid rgba(255,255,255,.6)'
                }
            })
        } else {
            Object.keys(navLinks1Level).forEach(elem =>{
                if(elem < navLinks1Level.length-1) {
                   navLinks1Level[elem].style.borderBottom = 'none'
                }
            })
        }
    }
}

/*************************************************************
  Scrolling - eсли координата top секции > половины длины видимой части окна (content+padding):
    (1) автоматически закр-ся моб.меню,
    (2) подсвечиваем пункты меню при прокрутке окна,
    (3) прокрутка вверх 
    (4) при скроллинге добавляем background-color для header и для laptop меняем цвет меню на темно-синий
**************************************************************/
showVisible()
main.addEventListener('scroll', showVisible) 

function showVisible() { 
    
    // (1), (2), (3)
    Object.keys(articles).forEach(elem => {  
        if (isVisible(articles[elem])) {  
            
            // выбираем все пункты меню <a>: когда className='nav__link' и href='# + id-секции'
            let toNavLink = document.querySelector('.nav__link[href="#' + articles[elem].id + '"]') 
                // <a data-brackets-id="25" class="nav__link nav__link_anim" href="#el-1">Ukraine-hilfe</a>
            
            // (1) 
            mqFunctionCloseMobMenu(mql) // mql=max-width:1024px (header-nav.js)
            mql.addListener(mqFunctionCloseMobMenu) 
            function mqFunctionCloseMobMenu(mql) {if (mql.matches) closeMobMenu()}    
            
            // (2)
            activeSubmenu(toNavLink)  
            activeNav(toNavLink) 
            
            // (3) 
            alertUp.style.display = (elem > 0 ? 'block' : 'none')
        } 
    })
    
    // (4) 
    if (main.scrollTop > 0) {
        // скролинг 
        
        // к header добавляем класс filter_background
        header.classList.add('filter_background')
        
        //        console.log(`1. ${document.querySelector('.lang').className}: ${document.querySelector('.lang').style.zIndex}`)
//        document.querySelector('.lang').style.zIndex = '-1'
        
        // laptop - пункты меню 1-го уровня: color - darkBlue
        Object.keys(navLinks1Level).forEach(elem => navLinks1Level[elem].classList.add('nav__link_scroll'))

    } else {
        // top страницы после скролинга
        
        // header удаляем класс filter_background
        if (header.classList.contains('filter_background')) {
            header.classList.remove('filter_background')
        }
        
        // laptop - пункты меню 1-го уровня: color - lightGray
        Object.keys(navLinks1Level).forEach(elem => {
           if (navLinks1Level[elem].classList.contains('nav__link_scroll')) {
               navLinks1Level[elem].classList.remove('nav__link_scroll')
           }
        })

    } 
}

function isVisible(elem) {  
    let coordsElem = elem.getBoundingClientRect()
    let elemVisible = coordsElem.top < document.documentElement.clientHeight/2
    
    return elemVisible
}

// для активного пункта меню borderBottom - красный, для не активеного - возвращаем светлый borderBottom (tablet) и transporant (laptop), также класс activeTopmenu содержит cursor: no-drop;
function activeSubmenu(elem) {
    let parentHref = elem.parentElement.parentElement.parentElement.firstElementChild.getAttribute('href')
    if (parentHref) {  
        parent = elem.parentElement.parentElement.parentElement.firstElementChild
        parent.classList.add('activeTopmenu') 
        parent.style.borderBottom = myBorderStyle + white
//        parent.style.borderBottom = '2px solid' + red
    } else {
        if(parent) {
            parent.classList.remove('activeTopmenu')
            mqFunctionMobMenuBorder(mql) // mql=max-width:1024px (header-nav.js)
            mql.addListener(mqFunctionMobMenuBorder) 
            function mqFunctionMobMenuBorder(mql) {
                if (mql.matches) parent.style.borderBottom = '1px solid rgba(255,255,255,.6)' 
                else parent.style.borderBottom = 'none' 
            }
        }
    }
}

// тоже, что и для activeSubmenu
function activeNav(elem) {  
    let currentlyActive = document.querySelector('.nav__link.activeNav')
    let shouldBeActive = elem
    
    if (currentlyActive) {
        currentlyActive.classList.remove('activeNav')
        
        if(currentlyActive.classList.contains('nav__link_1level')) {
            mqFunctionMobMenuBorder(mql) // mql=max-width:1024px (header-nav.js)
            mql.addListener(mqFunctionMobMenuBorder) 
            function mqFunctionMobMenuBorder(mql) {
                if (mql.matches) currentlyActive.style.borderBottom = '1px solid rgba(255,255,255,.6)' 
                else currentlyActive.style.borderBottom = 'none' 
            }
        } 
        else { currentlyActive.style.borderBottom = 'none' }
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('activeNav')
        shouldBeActive.style.borderBottom = myBorderStyle + white
//        shouldBeActive.style.borderBottom = '2px solid' + red
    }
}

/*************************************************************
  Определяем высоту секций 
  при изменении (resize) размеров окна (window) для каждой секции el:
  el.height = высоте окна
  el.minHeight = высоте контента в блоке wrap
**************************************************************/
setHeight(articles, wraps)
window.addEventListener('resize', function() {setHeight(articles, wraps)})
// без function() 'resize' не работает

function setHeight(section, item) {
    Object.keys(section).forEach(elem => {
        if (elem > 0) {
            section[elem].style.height = window.outerHeight + 'px'
            section[elem].style.minHeight = determineHeight(item[elem]) + 'px'
            
//            большее значение присваиваем minHeight
            /*if (window.outerHeight > determineHeight(item[elem])) {
                section[elem].style.minHeight = window.outerHeight + 'px'
                section[elem].style.height = determineHeight(item[elem]) + 'px'
            } else {
                section[elem].style.minHeight = determineHeight(item[elem]) + 'px'
                section[elem].style.height = window.outerHeight + 'px'
            } */
            
// console.log(`1. ${section[elem].id}, ${section[elem].style.minHeight}, ${section[elem].style.height}`)
        }
    })
}

function determineHeight(elem) {
    return Math.max(
        elem.scrollHeight,  // content+padding - невидимая часть
        elem.offsetHeight,  // content+padding+border+scrollbar - видимая часть
        elem.clientHeight   // content+padding - видимая часть	
    )
}
/* --------------------------------------------------------------------- */
/*
moveSection()
function moveSection() {
    console.log(`${determineHeight(header)}`)
    
    Object.keys(articles).forEach(elem => {
        if (elem > 0) {
            console.log(`${articles[elem].scrollTop}`)
            
            main.addEventListener('scroll', function() { 
                console.log(`1. Текущая прокрутка элемента: ${main.scrollTop}`)
            })
            
            main.scrollBy(0, 515)
            
            articles[elem].addEventListener('scroll', function() { 
                console.log(`2. Текущая прокрутка элемента: ${articles[elem].scrollTop}`)
            })
        }
    })
}
*/

/*Object.keys(navLinks).forEach(elem => {
    let heightHeader = determineHeight(header)
    let aa
    navLinks[elem].addEventListener('click', {
        handleEvent(event) {
            console.log(event.type + " на " + event.currentTarget)
            main.scrollBy(0, -heightHeader)
            
//            main - надо два раза кликнуть 
            event.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.scrollBy(0, 515) 
             console.log(aa.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling)
        }  
    })
    
})*/

// надо два раза кликнуть
/*Object.keys(navLinks).forEach(elem => {
    navLinks[elem].addEventListener('click', function() {
        main.scrollBy(0, 515) 
    })
})*/

/*************************************************************
  Lazyload
**************************************************************/
let lazyloadImages = document.querySelectorAll('.lazy')
//console.log(lazyloadImages.length)

lazyload()
main.addEventListener('scroll', lazyload)

function lazyload() {
    if (lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload)
        return
    }

    lazyloadImages.forEach(img => {
        if (isVisibleImg(img)) {   
//            console.log(img)
            const src = img.getAttribute('data-src')
            const srcset = img.getAttribute('data-srcset')
            if (src) img.src = src
            if (srcset) img.srcset = srcset
            img.classList.remove('lazy') 
        }
    })
}

function isVisibleImg(elem) {

    let coords = elem.getBoundingClientRect()
    let windowHeight = document.documentElement.clientHeight
//    let windowHeight = main.clientHeight

    // clientHeight – content+padding - размеры видимой части элемента

    // видны верхний ИЛИ нижний край элемента
    let topVisible = coords.top > 0 && coords.top < windowHeight
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0
    
//    console.log(`${elem} = ${topVisible}: ${coords.top}>0 and ${coords.top}<${windowHeight}; ${bottomVisible}: ${coords.bottom}<${windowHeight} and ${coords.bottom}>0`)

    return topVisible || bottomVisible;
}

/*************************************************************
  SUBMENU открываем/закрываем - mouseenter/mouseleave - и меняем направление стрелок
**************************************************************/
Object.keys(topmenus).forEach((elem,index) => {
    topmenus[elem].addEventListener('mouseenter', function(){
        topmenus[elem].children[1].classList.remove('arrow_down')
        topmenus[elem].children[1].classList.add('arrow_up')
        topmenus[elem].children[2].classList.add('submenu-open')   
        topmenus[elem].children[2].style.transition = 'transform .7s linear'
//        console.log(topmenus[elem].children[2].className)
//        hero.style.zIndex = '-1'   transition: .5s linear; 
        
        mqFunctionMouseenter(mql) // mql=max-width:1024px (header-nav.js)
        mql.addListener(mqFunctionMouseenter) 
        
        function mqFunctionMouseenter(mql) { 
            if (mql.matches) {
                // submenu arrow - опускаем/поднимаем стрелку относительно названия submenu
                topmenus[elem].children[1].style.top = '10%' 
                Object.keys(submenyFirstChild).forEach(elem => submenyFirstChild[elem].style.justifyContent = 'flex-start')
            } else {
                // submenu arrow
//                topmenus[elem].children[1].style.top = '70%' 
                topmenus[elem].children[1].style.top = '45%'
                
                // desktop: when submenu is opened, its (его слой) layer is above the topmenu layer
                Object.keys(navLiNotSub).forEach(elem => navLiNotSub[elem].style.zIndex = '0')
                topmenus[elem].style.zIndex = '1'
            }
        }    
    })
    topmenus[elem].addEventListener('mouseleave', function(){
        topmenus[elem].children[1].classList.remove('arrow_up')
        topmenus[elem].children[1].classList.add('arrow_down')
        topmenus[elem].children[2].classList.remove('submenu-open')
//        setTimeout(function(){ topmenus[elem].children[2].classList.remove('submenu-open') }, 300);
        
        
        mqFunctionMouseleave(mql) 
        mql.addListener(mqFunctionMouseleave) 
        
        function mqFunctionMouseleave(mql) { 
            if (mql.matches) {
                // submenu arrow - опускаем/поднимаем стрелку относительно названия submenu
                topmenus[elem].children[1].style.top = '40%'
                Object.keys(submenyFirstChild).forEach(elem => submenyFirstChild[elem].style.justifyContent = 'center')
            } 
            else {
                // submenu arrow 
//                topmenus[elem].children[1].style.top = '65%'
                topmenus[elem].children[1].style.top = '30%'
//                hero.style.zIndex = 'auto'
            }
        }    
    })
})

/*************************************************************
  Мобильное меню 
**************************************************************/
// анимация 
mqFunctionMobMenu(mql) // mql=max-width:1024px (header-nav.js)
mql.addListener(mqFunctionMobMenu) 

function mqFunctionMobMenu(mql) { 
    if (mql.matches) {      
        navToggle.addEventListener('click', fNavToggle)

        let direction = direc1 + direc2 + direc3 
        let directionValue = 0

        Object.keys(navLi).forEach(elem => navLi[elem].style.transform = direction) 
    } else {    
        Object.keys(navLi).forEach(elem => navLi[elem].style.transform = direc1 + '0%)')
    }
}

// открываем мобильное меню
function fNavToggle(e) {  
    if (nav.classList.contains('close')) {
        nav.classList.remove('close')
        nav.classList.add('open')  
        
        /* Hamburger - крестик */
        Object.keys(bars).forEach(elem => {          
            if (bars[elem].classList.contains('bar2')) {bars[elem].classList.add('bar2_open')}
            if (bars[elem].classList.contains('bar3')) {bars[elem].classList.add('bar3_open')}
            if (bars[elem].classList.contains('bar1')) {bars[elem].classList.add('bar1_open')}
            if (bars[elem].classList.contains('bar4')) {bars[elem].classList.add('bar4_open')}
            if (bars[elem].classList.contains('bar5')) {bars[elem].classList.add('bar5_open')}
        })
        
        Object.keys(navLi).forEach(elem => navLi[elem].style.transform = direc1 + '0%)') 
        direc2 = direc2*(-1) /* меню появляеся и исчезает в одном направлении */  
    } else { closeMobMenu() }
}

// закрываем мобильное меню
function closeMobMenu() {
    nav.classList.remove('open')
    nav.classList.add('close')

    /* Hamburger - полоски */
    Object.keys(bars).forEach(elem => {           
        if (bars[elem].classList.contains('bar2')) {bars[elem].classList.remove('bar2_open')}
        if (bars[elem].classList.contains('bar3')) {bars[elem].classList.remove('bar3_open')}
        if (bars[elem].classList.contains('bar1')) {bars[elem].classList.remove('bar1_open')}
        if (bars[elem].classList.contains('bar4')) {bars[elem].classList.remove('bar4_open')}
        if (bars[elem].classList.contains('bar5')) {bars[elem].classList.remove('bar5_open')}
    })

    Object.keys(navLi).forEach(elem => navLi[elem].style.transform = direc1 + direc2 + direc3)
    
//    console.log(`2. ${document.querySelector('.lang').style.zIndex}`)
//    document.querySelector('.lang').style.zIndex = '1'
}

/*************************************************************
  Multilang
**************************************************************/
let currentprotocol = window.location.protocol
let currenthost = window.location.host
let currentpath = window.location.pathname

let btnDe = document.getElementById('de')
let btnUk = document.getElementById('uk')
let btnRu = document.getElementById('ru')

let langBtns = document.querySelectorAll('.btn')

btnDe.addEventListener('click', function(){ location.assign(currentprotocol + '//' + currenthost + '/' + 'index.html') })
btnUk.addEventListener('click', function(){ location.assign(currentprotocol + '//' + currenthost + '/uk/' + 'index.html') })
btnRu.addEventListener('click', function(){ location.assign(currentprotocol + '//' + currenthost + '/ru/' + 'index.html') })

let arrayAriaLabel = [
    {lg: 'de', ariaL: {de: 'Deutsch', uk: 'Ukrainisch', ru: 'Russisch'} },
    {lg: 'uk', ariaL: {de: 'Німецька', uk: 'Українська', ru: 'Російська'}},
    {lg: 'ru', ariaL: {de: 'Немецкий', uk: 'Украинский', ru: 'Русский'}}
]

// в зависимости от языка страниц - изменение цвета и значений атрибутов кнопок 
if (currentlang == "de") selectBtn(btnDe, currentlang) 
else if (currentlang == "uk") selectBtn(btnUk, currentlang)
else if (currentlang == "ru") selectBtn(btnRu, currentlang)

function selectBtn(btn, currentlg) {
    btn.disabled = true
    btn.style.outline = 'none'
    btn.style.boxShadow = '0 0 0 4px' + white
//    btn.style.transform = 'translateZ(-1px) scale(.9)'
//    btn.style.transform = 'scale(.9)'
    /*btn.style.zIndex = '-1' */// == btn.style.cursor = 'no-drop'
    let arr = arrayAriaLabel.filter(item => item.lg == currentlg)
    langBtns[0].areaLabel = arr[0].ariaL.de
    langBtns[1].areaLabel = arr[0].ariaL.uk
    langBtns[2].areaLabel = arr[0].ariaL.ru
}

/*
let arrayAriaLabel = [
    {lg:    'de', 
     ariaL: {de: 'Deutsch', uk: 'Ukrainisch', ru: 'Russisch'},
     txt:   {de: 'de', uk: 'uk', ru: 'ru'}},
    {lg:    'uk', 
     ariaL: {de: 'Німецька', uk: 'Українська', ru: 'Російська'},
     txt:   {de: 'нім', uk: 'укр', ru: 'рос'}},
    {lg:    'ru', 
     ariaL: {de: 'Немецкий', uk: 'Украинский', ru: 'Русский'},
     txt:   {de: 'нем', uk: 'укр', ru: 'рус'}}
]

// изменение цвета и значений атрибутов кнопок в зависимости от языка страниц
if (currentlang == "de") selectBtn(btnDe, currentlang) 
else if (currentlang == "uk") selectBtn(btnUk, currentlang)
else if (currentlang == "ru") selectBtn(btnRu, currentlang)

function selectBtn(btn, currentlg) {
    btn.style.color = "#FA4F05"
    btn.style.background = '#fff'
    btn.disabled = true
    
    // меняем значения атрибутов у кнопок в зависимости от языка
    let arr = arrayAriaLabel.filter(item => item.lg == currentlg)
    langBtns[0].areaLabel = arr[0].ariaL.de
    langBtns[0].innerHTML = arr[0].txt.de
    
    langBtns[1].areaLabel = arr[0].ariaL.uk
    langBtns[1].innerHTML = arr[0].txt.uk
    
    langBtns[2].areaLabel = arr[0].ariaL.ru
    langBtns[2].innerHTML = arr[0].txt.ru
}

*/
