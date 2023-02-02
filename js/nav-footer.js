/*************************************************************
  CSS - асинхронная загрузка стилей
**************************************************************/
/*let pathCss = setValues('css/', '../css/', '../css/')  

asyncCSS(pathCss + 'style2.css')
asyncCSS(pathCss + 'style2-min901.css', '(min-width: 901px)')
asyncCSS(pathCss + 'style2-max900.css', '(max-width: 900px)')

function asyncCSS(href, media = '') {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = href;
    css.media = media;
    document.head.appendChild(css); 
}*/

// --------------------------------
let myBorderActive = '3px solid' + white 
let myBorder = '1px solid rgba(255,255,255,.6)'

let navLi = document.querySelectorAll('nav li')    
let navLinks = document.querySelectorAll('.nav__link')
let navLinks1Level = document.querySelectorAll('.nav__link_1level')
let navLinksSubmenu = document.querySelectorAll('.submenu li .nav__link')
let topmenus = document.querySelectorAll('.topmenu')
let navLiNotSub = document.querySelectorAll('li:not(.topmenu)') 
//let main = document.querySelector('.main') 
//let path = '../'

let articles = document.querySelectorAll('*[id^="el"]') // выбираем id всех article, начинающегося с el
//let articless = document.querySelectorAll('*[id^="el"]:not(:first-child)')

let wraps = document.querySelectorAll('.wrap') // контент секций
let borderTop = document.querySelectorAll('.borderTop')  

let submenyFirstChild = document.querySelectorAll('.nav__link[href="#"')
//let navANotSub = document.querySelectorAll('.nav__link:not(.submenu a)')

//console.log(navLinksSubmenu.length)

/*************************************************************
  HEADER - NAV:
    при mql=900px для всех '.nav__link'(nav__ul, .submenu) устанавливаем светлый borderBottom,
    иначе - только для для '.nav__link' из '.submenu' светлый borderBottom 
**************************************************************/
mqFunctionMobMenuBorder(mql) // mql=900px 
mql.addListener(mqFunctionMobMenuBorder) 

function mqFunctionMobMenuBorder(mql) {
    if (mql.matches) setBorder(navLinks, myBorder)
    else {
        setBorder(navLinks, 'none')
        setBorder(navLinksSubmenu, myBorder)
    }
}

function setBorder(item, style) {
    Object.keys(item).forEach(elem =>{
        if(elem < item.length-1) {
           item[elem].style.borderBottom = style
        }
    })
}

/*************************************************************
    !!! адреса before icons
**************************************************************/
let one11 = ['ukr', 'hil', 'nfo', 'ma',  'ne-', 'lwp', 'ilto:', 'fe@','ai',  '.i']
let one22 = ['in', 'tes', 'mai', 'n.de', 'lto:', 'bun', 'isse', '-me', 'fo@']

let lmArray1 = [
    [one11[3] + one11[6] + one11[0] + one11[8] + one11[4] + one11[1] + one11[7] + one11[5] + one11[9] + one11[2]],
    [one22[2] + one22[4] + one22[0] + one22[8] + one22[5] + one22[1] + one22[7] + one22[6] + one22[3]]
]

let lmArray2 = [
    [one11[0] + one11[8] + one11[4] + one11[1] + one11[7] + one11[5] + one11[9] + one11[2]],
    [one22[0] + one22[8] + one22[5] + one22[1] + one22[7] + one22[6] + one22[3]]
]
            
let lm = document.querySelectorAll('.ml')

lmArray1.forEach((elem, ind, array) => {
    lm[ind].href = array[ind]
    lm[ind].textContent = lmArray2[ind]
})

/*************************************************************
  ICONS - HERO, EL
  при наведении мышкой меняем цвет иконок телефона, адреса
    важно, чтобы сначала определили адреса, а затем уже описываем img
**************************************************************/// ---------------
// иконка на hiro имеет два размера в зависимости от размеров экрана, поэтому при :hover выбираем соответствующую иконку - если загружена (currentSrc) иконка, у которой в конце (endsWith) имени '32.png', то и показываем соотв-щую икнку
let herolinkIcon = document.querySelector('.linkIcon') 
let heroIcon = document.querySelector('.hero__icon')
//heroIcon.currentSrc.endsWith("32.png") ? console.log(heroIcon.currentSrc) : console.log(heroIcon.className)

herolinkIcon.addEventListener('mouseenter', () => setMediaImg(heroIcon, '48.png', pathImg + 'icon-phone-blue-48.png', pathImg + 'icon-phone-blue-64.png'))
herolinkIcon.addEventListener('mouseleave', () => setMediaImg(heroIcon, '48.png', pathImg + 'icon-phone-white-48.png', pathImg + 'icon-phone-white-64.png'))

function setMediaImg(elem, nameEnd, srcset1, srcset2) {
    elem.currentSrc.endsWith(nameEnd) ? elem.srcset = srcset1 : elem.srcset = srcset2
//    console.log(`${elem.currentSrc}, ${elem.srcset}`)
}

/*class ElemHover {
    handleEvent(event) {
        switch(event.type) {
            case 'mouseenter':
                setMediaImg(heroIcon, '32.png', path+'icon-phone-blue-32.png', path+'icon-phone-blue.png')
                break
            case 'mouseleave':
                setMediaImg(heroIcon, '32.png', path+'icon-phone-white-32.png', path+'icon-phone-white.png')
                break
        }
    }
}
let heroIconHover = new ElemHover()
herolinkIcon.addEventListener('mouseenter', heroIconHover)
herolinkIcon.addEventListener('mouseleave', heroIconHover)
*/


// обходим 1-ую hero-icon
let linkIcons = document.querySelectorAll('.linkIcon:not(.hero__linkIcon)') 
// - исключаем с конкретным className OR
//let linkIcons = document.querySelectorAll('.linkIcon:not(:nth-child(n+2))')
//console.log(`${linkIcons.length}, ${linkIcons[0].className}`)

let iconArray = [
    /*{imgName: 'icon hero__icon',
    imgSrc: path + 'icon-phone-white.png',
    imgAlt: 'icon-phone',
    imgSrcHover: path + 'icon-phone-blue.png'},*/
    
    {imgName: 'icon',
    imgSrc: pathImg + 'icon-location-blue.png',
    imgAlt: 'icon-location',
    imgSrcHover: pathImg + 'icon-location-white.png'},
    
    {imgName: 'icon',
    imgSrc: pathImg + 'icon-ml-blue.png',
    imgAlt: 'icon-ml',
    imgSrcHover: pathImg + 'icon-ml-white.png'},
    
    {imgName: 'icon',
    imgSrc: pathImg + 'icon-phone2-blue.png',
    imgAlt: 'icon-phone',
    imgSrcHover: pathImg + 'icon-phone2-white.png'},
    
    {imgName: 'icon',
    imgSrc: pathImg + 'icon-location-blue.png',
    imgAlt: 'icon-location',
    imgSrcHover: pathImg + 'icon-location-white.png'}, 
    
    {imgName: 'icon',
    imgSrc: pathImg + 'icon-ml-blue.png',
    imgAlt: 'icon-ml',
    imgSrcHover: pathImg + 'icon-ml-white.png'}
]

iconArray.forEach((elem, ind, array) => {
    let img = document.createElement('img')
    img.className = array[ind].imgName
    img.src = array[ind].imgSrc
    img.alt = array[ind].imgAlt
    linkIcons[ind].prepend(img)
//    console.log(`${array[ind].imgSrc}`)

    linkIcons[ind].addEventListener('mouseenter', () => img.src = array[ind].imgSrcHover)
    linkIcons[ind].addEventListener('mouseleave', () => img.src = array[ind].imgSrc)
})

/*************************************************************
  Scrolling - eсли координата top секции > половины длины видимой части окна (content+padding):
    (1) HEADER - NAV: автоматически закр-ся моб.меню после выбора пункта меню,
    (2) HEADER - NAV: подсвечиваем пункты меню при прокрутке окна,
    (3) EL: прокрутка вверх - блок показывается, когда видна 2-ая страница 
    (4) HEADER - NAV: добавляем background-color для header и для laptop меняем цвет меню на темно-синий
**************************************************************/
activeNav(navLinks[0]) // по умолчанию - подчеркиваем 1-ый линк меню, как активный

main.addEventListener('scroll', showVisible) 
function showVisible() {  
    // (1), (2), (3)
    Object.keys(articles).forEach(elem => {  
        if (isVisible(articles[elem])) {  
            
            // выбираем все пункты меню <a>: когда className='nav__link' и href='# + id-секции'
            let toNavLink = document.querySelector('.nav__link[href="#' + articles[elem].id + '"]') 
                // <a data-brackets-id="25" class="nav__link nav__link_anim" href="#el-1">Ukraine-hilfe</a>
            
            // (1) 
            mqFunctionCloseMobMenu(mql) // mql=max-width:900px (header-nav.js)
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
        
        // laptop - пункты меню 1-го уровня: color - blue
        Object.keys(navLinks1Level).forEach(elem => navLinks1Level[elem].classList.add('nav__link_scroll'))

    } 
    else { 
        // top страницы после скролинга
        
        // header удаляем класс filter_background
        if (header.classList.contains('filter_background')) {
            header.classList.remove('filter_background')
        }
        
        // laptop - пункты меню 1-го уровня: color - белый
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

/*************************************************************
  HEADER - NAV
  topmenu будет активным (жирная белая полоса), если активен хоть один пункт из submenu:
    1. передаем <a>
    2. определяем в topmenu, для его 1-го ребенка <a> - href:
    
   parentElement      <li class="topmenu">
   firstElementChild    <a class="nav__link nav__link_1level nav__link_paddingRight" href="#">...</a>
                        <div class="arrow arrow_down nav__arrow"></div>
   parentElement        <ul class="submenu"> 
   parentElement           <li> 
                              <a class="nav__link" href="#el-31">Предоставить что-то</a>
                              
    3. если href = "#", то сохраняем его в переменной topMenuLink и делаем его активным - жирная borderBottom
    4. если у переданного линка нет topmenu, то удаляем активность через переменную topMenuLink:
        - для tablet восстанавливаем тонкую полоску borderBottom,
        - для laptop - вообще убираем borderBottom
        
    также класс activeTopmenu содержит cursor: no-drop
**************************************************************/
let topMenuLink 

function activeSubmenu(elem) {
    let parentHref = elem.parentElement.parentElement.parentElement.firstElementChild.getAttribute('href')
    
    if (parentHref) {  
        topMenuLink = elem.parentElement.parentElement.parentElement.firstElementChild
        topMenuLink.classList.add('activeTopmenu') 
        topMenuLink.style.borderBottom = myBorderActive
    } else {
        if(topMenuLink) {
            topMenuLink.classList.remove('activeTopmenu')
            mqFunctionMobMenuBorder(mql) // mql=max-width:1024px (header-nav.js)
            mql.addListener(mqFunctionMobMenuBorder) 
            function mqFunctionMobMenuBorder(mql) {
                if (mql.matches) topMenuLink.style.borderBottom = myBorder
                else topMenuLink.style.borderBottom = 'none' 
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
        
        mqFunctionMobMenuBorder(mql) // mql=1024px
        mql.addListener(mqFunctionMobMenuBorder) 
        
        function mqFunctionMobMenuBorder(mql) {
            if (mql.matches) {currentlyActive.style.borderBottom = myBorder}
            else {
                // laptop: если href для submenu-link совпадает с currentlyActive.href, то возвращаем borderBottom, для главных пунктов меню - нет borderBottom
                if (Array.from(navLinksSubmenu).find(function(el) {return el.href == currentlyActive.href})) currentlyActive.style.borderBottom = myBorder
                else currentlyActive.style.borderBottom = 'none'
            } 
        }
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('activeNav')
        shouldBeActive.style.borderBottom = myBorderActive
    }
}

/*************************************************************
  EL - Lazyload img
  нельзя применить к предыдущему scroll, так как там функция запускается без scroll, а здесь только при scroll
**************************************************************/
let lazyloadImages = document.querySelectorAll('.lazy')
main.addEventListener('scroll', lazyload)

function lazyload() {
    
    if (lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload)
        return
    }

    lazyloadImages.forEach( img => {
        if (isVisibleImg(img)) {   
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

    // видны верхний ИЛИ нижний край элемента
    let topVisible = coords.top > 0 && coords.top < windowHeight
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0
    
    return topVisible || bottomVisible
}

/*************************************************************
  HEADER - NAV
  SUBMENU открываем/закрываем - mouseenter/mouseleave - и меняем направление стрелок
**************************************************************/
Object.keys(topmenus).forEach((elem,index) => {
    topmenus[elem].addEventListener('mouseenter', function(){
        topmenus[elem].children[1].classList.remove('arrow_down')
        topmenus[elem].children[1].classList.add('arrow_up')
        topmenus[elem].children[2].classList.add('submenu-open')   
        topmenus[elem].children[2].style.transition = 'transform .7s linear' 
        
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
                topmenus[elem].children[1].style.top = '30%'
            }
        }    
    })
})

/*************************************************************
  HEADER - NAV
  Мобильное меню - открываем/закрываем
**************************************************************/
let bars = document.querySelectorAll('.bar') // nav-toggle
let direc1 = 'translateX(' //меню открывается по горизонтали
//let direc1 = 'translateY(' //меню открывается по вертикали
let direc2 = '-300' // слева / сверху
//let direc2 = '300' // справа / снизу
let direc3 = '%)'

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
  Определяем высоту секций: 
    при изменении (resize) размеров окна (window) для каждой секции el:
    el.height = высоте окна
    el.minHeight = высоте контента в блоке wrap
**************************************************************/
// при scroll пересчитывается реальная высота контента для el-секции (особенно для 1-ой секции после hero), 
// удаляем scroll, чтобы не было лишних вычислений
main.addEventListener('scroll', setHeight(articles, wraps))
//main.addEventListener('scroll', setHeight(articless, wraps))
main.removeEventListener('scroll', setHeight)

// без function() 'resize' не работает
window.addEventListener('resize', function() {setHeight(articles, wraps)})
//window.addEventListener('resize', function() {setHeight(articless, wraps)})

function setHeight(section, item) {
    Object.keys(section).forEach(elem => {
        if(elem === '0') {
            section[elem].style.height = '100vh'
            section[elem].style.maxHeight = '1080px'
        } else {
            section[elem].style.height = calculateHeight(item[elem]) + 'px'
            section[elem].style.minHeight = calculateHeight(item[elem]) + 'px'
        }
        
//        console.log(`2. ${section[elem].id}, ${item[elem].classList[1]}: ${calculateHeight(item[elem])}`)
        
        /*let sss = item[elem].children
        Object.keys(sss).forEach(ch => {
            console.log(`2. ${section[elem].id}: ${calculateHeight(item[elem])}, ${sss[ch].className}: ${calculateHeight(sss[ch])}`)
        })*/
    })   
}

/*function calculateHeight(elem) { 
    return Math.max(
        elem.scrollHeight,  // content+padding - невидимая часть
        elem.offsetHeight,  // content+padding+border+scrollbar - видимая часть
        elem.clientHeight   // content+padding - видимая часть	
    )
}*/

function calculateHeight(elem){
    let curStyle = window.getComputedStyle(elem)
    let offsetHeight = elem.offsetHeight
    let a = parseInt(offsetHeight)
    let c = parseInt(curStyle.marginTop.replace("px", ""))
    let d = parseInt(curStyle.marginBottom.replace("px", ""))
    let e1 = parseInt(curStyle.paddingTop)
    let e = parseInt(curStyle.paddingTop.replace("px", ""))
    let f = parseInt(curStyle.paddingBottom.replace("px", ""))
    let height1 = a + c + d + e1 + f
    
    let height2 = Math.max(
  		elem.scrollHeight, // content+padding - невидимая часть
  		elem.offsetHeight, // content+padding+border+scrollbar - видимая часть
  		elem.clientHeight  // content+padding - видимая часть
	)
    
    return Math.max(height1, height2)
}

/*************************************************************
  Прокрутка вверх 
**************************************************************/
let alertUp = document.createElement('div')
alertUp.className = 'alert-up'
let arrowUp = document.createElement('a')
arrowUp.className = 'arrow arrow_up alert-up__arrow'
arrowUp.href = '#el-1'
alertUp.append(arrowUp)
document.body.append(alertUp)
alertUp.style.display = 'none' // по умолчанию alertUp не виден, далее видимость регулируется функцией при скроллинге

/*************************************************************
  переход по пунктам меню: 
  запрещаем переход по дефолту линка <a> и переходим по событию клик
  scrollBy - подвинуть страницу после клика на высоту header
**************************************************************/
/*let currentSectionIndex = 0

Object.keys(navLinks).forEach(elem => {
    navLinks[elem].addEventListener('click', function(event) {
        event.preventDefault()
        currentSectionIndex = elem // [0] - куда идем, по умолчанию 1-ая секция 
        
        let navHref = navLinks[elem].getAttribute('href') // #el-2
        let toSection = document.querySelector(navHref)   // id == el-2
        
        if (toSection) {
            main.scrollBy(0, 50)
            toSection.scrollIntoView({ behavior: 'smooth' })
            
            console.log(`2. Текущая прокрутка элемента: ${`${toSection.id}: ${toSection.scrollTop}`}`)

        }
 
    })
})*/

// scrollBy - подвинуть страницу после клика на высоту header
/*
Object.keys(navLinks).forEach(elem => {
    navLinks[elem].addEventListener('click', function(event) {
        event.preventDefault()
        moveToSection(navLinks[elem], elem)
    })
    navLinks[elem].addEventListener('click', moveMain)
})

function moveToSection(item, ind) {
    currentSectionIndex = ind // [0] - куда идем, по умолчанию 1-ая секция 

    let navHref = item.getAttribute('href') // #el-2
    let toSection = document.querySelector(navHref)   // id == el-2

    if (toSection) toSection.scrollIntoView({ behavior: 'smooth' })
}

function moveMain() {
    main.scrollBy(0, 50)
}
*/

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

