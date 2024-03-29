'use strict'      

// -----------------------------------------------------
function createElem(elemE, classN, innerH, hrefE, srcE, altE, srcsetE, sizesE) { 
    let elem = document.createElement(elemE)
    
    if(classN) elem.className = classN 
    if(innerH) elem.innerHTML = innerH
    if(hrefE)  elem.href = hrefE
    if(srcE) {
        elem.src = srcE
        elem.alt = altE
    }
    if(srcsetE) {
        elem.srcset = srcsetE
        elem.sizes = sizesE
    }
    
    return elem
}

/*function setValues(valueDe, valueUkr, valueRu) {
    let item 
    if (currentlang == "de") item = valueDe
    else if (currentlang == "uk") item = valueUkr
    else if (currentlang == "ru") item = valueRu
    return item
}*/

/*************************************************************
  HERO - load async - загрузить aсинхронно иображение, 
  картинка уже загружена, она возьмется из кэша и повторного запроса не будет
**************************************************************/
/* 
let mql = window.matchMedia('(max-width: 900px)') 
let sectionHero = createElem('section', 'el hero padding-bottom')
sectionHero.id = 'el-1'
main.prepend(sectionHero)
    
mqFunctionHero(mql) 
mql.addListener(mqFunctionHero) 
function mqFunctionHero(mql) { 
    if (mql.matches) {
        onloadBgimg(
            sectionHero, 
            pathImg + 'flags-360.jpg 360w, ' + pathImg + 'flags-768.jpg 768w',
            '(max-width: 500px) 360px, 768px',
            pathImg + 'flags-768.jpg',
            '--img'
        )
    } 
    else {
        onloadBgimg(
            sectionHero, 
            pathImg + 'flags-1024.jpg 1024w, ' + pathImg + 'flags-1440.jpg 1440w, ' + pathImg + 'flags-1920.jpg 1920w',
            '(max-width: 1150px) 1024px, (min-width: 1600px) 1920px, 1440px',
            pathImg + 'flags-1440.jpg',
            '--img'
        )
    }
} */
                
/*function onloadBgimg(elem, srcsetN, sizesN, srcN, elemVar) {
    let bgImg = document.createElement('img'); 
    if(srcsetN) bgImg.srcset = srcsetN;
    if(sizesN) bgImg.sizes = sizesN;
    if(srcN) bgImg.src = srcN;

    bgImg.onload = function() { 
        let bgUrl = bgImg.currentSrc;  
        // elemVar: background: var(--img, auto); // для ::before в JS 
        if(elemVar) {
            elem.style.setProperty(elemVar, "url("+bgUrl+") top center no-repeat");
        }
        else {
            elem.style.background = "url("+bgUrl+") no-repeat center";
            elem.style.backgroundSize = '100% 100%'
        }
    }
}*/

let sectionHero = document.querySelector('.hero') 
let wrapHero = document.querySelector('.wrap') 

let titlesHero = createElem('div', 'hero__titles')
wrapHero.append(titlesHero)

let heroTitlesArray = [ 
    {tag: 'h1', name: 'hero__h1', txt: 'Ukraine &#45; Hilfe'},
    {tag: 'h2', name: 'hero__h2', txt: '', href: '', img: '',
        lang: {de: 'Achtung! Neue Telefonnummer', 
               ukr: 'Увага! Новий номер телефону', 
               ru: 'Внимание! Новий номер телефона'}
    },
    {tag: 'a', name: 'linkIcon hero__linkIcon', txt: '03521&#45;72806&#45;700', href: 'tel:0352172806700',
        img: {tag: 'img', name: 'icon hero__icon', 
              srcset: pathImg + 'icon-phone-white-48.png 48w, ' + pathImg + 'icon-phone-white-64.png 64w',
              sizes: '(max-width: 800px) 48px, 64px',
              src: pathImg + 'icon-phone-white-48.png',
              alt: 'icon phone'
             }
    },
    {tag: 'p', name: 'hero__txt', txt: '', href: '', img: '',
        lang: {de: 'Solidarität mit den Opfern des<br>verbrecherischen russischen Angriffskriegs', 
               ukr: 'Солідарність із постраждалими<br> злочинна російсько-загарбницька війна', 
               ru: 'Солидарность с жертвами<br> преступная российская агрессивная война'}
    }
]

titlesHero.append(...getHeroTitlesArray(heroTitlesArray))

function getHeroTitlesArray(array) {
    let result = []
    array.forEach(elem => {
        let item = createElem(elem.tag, elem.name, elem.txt, elem.href)
        if(elem.img) {
            let img = createElem(elem.img.tag, elem.img.name, '', '', elem.img.src, elem.img.alt, elem.img.srcset, elem.img.sizes)
            item.prepend(img)
        }
        if(elem.lang) item.innerHTML = setValues(elem.lang.de, elem.lang.ukr, elem.lang.ru)
        result.push(item)
    })
    return result
} 

// ---------------------------------- 
let topLinks = new Array()     
topLinks[0]='#el-1' 
topLinks[1]='#el-2'
topLinks[2]='#' /*submenu*/ 
topLinks[3]='#el-4'
topLinks[4]='#el-5'
topLinks[5]='#el-6' 

let topTitles = new Array()
topTitles[0]='Ukraine-hilfe' 
topTitles[1]='Ukraine jetzt'  
topTitles[2]='So können Sie helfen'  
topTitles[3]='Kontakt für Mithilfe'  
topTitles[4]='Desinformation erkennen'  
topTitles[5]='Kooperationen' 

let topTitlesUkr = new Array()
topTitlesUkr[0]='Ukraine-hilfe' 
topTitlesUkr[1]='Україна зараз' 
topTitlesUkr[2]='Допомога'  
topTitlesUkr[3]='Контакт для допомоги'  
topTitlesUkr[4]='Розпізнавати дезінформацію'  
topTitlesUkr[5]='Контакти для співпраці' 

let topTitlesRu = new Array()
topTitlesRu[0]='Ukraine-hilfe' 
topTitlesRu[1]='Украина сейчас'  
topTitlesRu[2]='Помощь'
topTitlesRu[3]='Контакт для помощи'
topTitlesRu[4]='Распознавать дезинформацию' 
topTitlesRu[5]='Контакты для сотрудничества'

let subLinks1 = new Array()     
subLinks1[0]='#el-31'  
subLinks1[1]='#el-32' 
subLinks1[2]='#el-33' 
subLinks1[3]='#el-34'

let subTitles1 = new Array()  
subTitles1[0]='Etwas abgeben'  
subTitles1[1]='Hilfstransporte'  
subTitles1[2]='Wohnungen'     
subTitles1[3]='Betreuung der ukrainischen Gäste' 

let subTitles1Ukr = new Array()  
subTitles1Ukr[0]='Надати щось'  
subTitles1Ukr[1]='Транспортна допомога'  
subTitles1Ukr[2]='Житло'  
subTitles1Ukr[3]='Турбота про українських гостей'  

let subTitles1Ru = new Array()  
subTitles1Ru[0]='Предоставить что-то' 
subTitles1Ru[1]='Транспортная помощь'  
subTitles1Ru[2]='Жилье'   
subTitles1Ru[3]='Забота об украинских гостях'

/*************************************************************
  HEADER - NAV
**************************************************************/
let wrapper = document.querySelector('.wrapper')
let header = createElem('header', 'header')
wrapper.prepend(header)

let navToggle = createElem('div', 'nav-toggle') 
header.append(navToggle)
let barsToggle = ['bar bar1', 'bar bar2', 'bar bar3', 'bar bar4', 'bar bar5']
barsToggle.forEach(elem => {
    let barNavToggle = createElem('span', elem)
    navToggle.append(barNavToggle)
})

let nav = createElem('nav', 'nav close')
header.append(nav)
//header.prepend(nav)
let navUl = createElem('ul', 'nav__ul')
nav.append(navUl)

let menuLevel 

// устанавливаем меню на разных языках для разных страниц 
navUl.append(...getMenu(topLinks, setValues(topTitles, topTitlesUkr, topTitlesRu)))

// меню 1-го уровня
function getMenu(arrayLinks, arrayTitles) {
    let result = []
    for (let i = 0; i < arrayLinks.length; i++) {
        let li = document.createElement('li')
        if (arrayLinks[i] == '#') li.className = 'topmenu'
        
        menuLevel = 1
        li.append(getNavLinks(arrayLinks, arrayTitles, i, menuLevel))
        
        if (arrayLinks[i] == '#') {
            let arrowTopmenu = document.createElement('div')
            arrowTopmenu.className = 'arrow arrow_down nav__arrow'
            li.append(arrowTopmenu)
            let subUl = document.createElement('ul')
            subUl.className = 'submenu filter_background'
            li.append(subUl)
            menuLevel = 2
            if (i === 2) subUl.append(...getSubMenu(subLinks1, setValues(subTitles1, subTitles1Ukr, subTitles1Ru), subUl, menuLevel))
//          else if (i === 4) subUl.append(...getSubMenu(subLinks4, subTitles4, subUl, menuLevel))
        }
        result.push(li) 
    }
//    console.log(`1. ${result.length}`)
    return result 
}

// меню 2-го уровня
function getSubMenu(arrayLinks, arrayTitles, subMenu) {
    let result = []
    for(let i = 0; i < arrayLinks.length; i++) {
        let li = document.createElement('li')
        subMenu.append(li)
        li.append(getNavLinks(arrayLinks, arrayTitles, i)) 
        result.push(li) 
    }    
//    console.log(`2. ${result.length}`)
    return result
}

// тэг <a>.navLink 
function getNavLinks(arrayLinks, arrayTitles, i) {  
    let fragment = new DocumentFragment()
    
    let navLink = document.createElement('a')
    if (menuLevel === 1) {
                                // стрелку сдвинуть вправо - submenu
        if(arrayLinks[i] == '#') navLink.className = 'nav__link nav__link_1level nav__link_paddingRight'
        else navLink.className = 'nav__link nav__link_1level'
    } 
        /*nav__link_1level - для цвета в мобильном меню */
    if (menuLevel === 2) navLink.className = 'nav__link'
    
    navLink.textContent = arrayTitles[i]
   
    navLink.href = arrayLinks[i]
    fragment.append(navLink)

    /*if (document.title == arrayTitles[i]) {
        navLink.style.color = red
        navLink.style.backgroundColor = beige
    } else {
        navLink.href = arrayLinks[i]
    }*/

    /*let spansNav = ['span', 'span', 'span', 'span']
    spansNav.forEach(elem => {
        let span = createElem(elem, '', '')
        navLink.append(span)
    })*/
    return fragment
}

/*************************************************************
  HEADER - Multilang - buttons
**************************************************************/
let langButtonsDiv = createElem('div', 'lang') 
header.append(langButtonsDiv)

// ---------------------------------------
// create buttons with tag <button> or <a>

//let myBtn = 'button'; // !!! также добавить style для <button> и header: <link rel="alternate"...>
let myBtn = 'a';
 
let langArray = [
    {lg: 'de', 
     lb: ['Deutsch', 'Ukrainisch', 'Russisch'],
     fl: pathImg + 'icon-germany.png'
    },
    {lg: 'uk', 
     lb: ['німецька', 'українська', 'російська'],
     fl: pathImg + 'icon-ukraine.png'
    },
    {lg: 'ru', 
     lb: ['немецкий', 'украинский', 'русский'],
     fl: pathImg + 'icon-russia.png'
    }
] 

langArray.forEach(elem => {   
    let btn = createElem(myBtn, 'btn')
    langButtonsDiv.append(btn) 
})

let langBtns = document.querySelectorAll('.btn')

// ---------------------------------------
// set attributes for buttons 

Object.keys(langBtns).forEach(elem => {
    onloadBgimg(langBtns[elem], '', '', langArray[elem].fl) // асинхронная загрузка background-image для всех кнопок - картинкa флага
    
    if(myBtn == 'button') langBtns[elem].type = 'button'
    
    if(currentlang == langArray[elem].lg) {
        Object.keys(langBtns).forEach(el => langBtns[el].ariaLabel = langArray[elem].lb[el]) // устанавливаем значения ariaLabel для всех 3-х кнопок на языке активной страницы  
        langBtns[elem].style.boxShadow = '0 0 0 4px' + white // устанавливаем border для этой активной кнопки
    }
})

// ---------------------------------------
// навигация по страницам

if(myBtn == 'button') {
    
    let currentprotocol = window.location.protocol
    let currenthost = window.location.host
    let currentpath = window.location.pathname
    
    if (pathJs.includes('real')) {var navigationPath = ['/index-real.html', '/uk/index-real-uk.html', '/ru/index-real-ru.html']}
    else {var navigationPath = ['/index.html', '/uk/index.html', '/ru/index.html']}
    
    Object.keys(langBtns).forEach(elem => langBtns[elem].addEventListener('click', () => location.assign(currentprotocol + '//' + currenthost + navigationPath[elem])))
    
} else if(myBtn = 'a') {
    
    if (navigPath) {
        var navigationPath = [
             ['index-real.html', 'uk/index-real-uk.html', 'ru/index-real-ru.html'],
             ['../index-real.html', 'index-real-uk.html', '../ru/index-real-ru.html'],
             ['../index-real.html', '../uk/index-real-uk.html', 'index-real-ru.html']
        ]
    } else {
        var navigationPath = [
            ['index.html', 'uk/index.html', 'ru/index.html'],
            ['../index.html', 'index.html', '../ru/index.html'],
            ['../index.html', '../uk/index.html', 'index.html']
        ]
    }
     
    Object.keys(langBtns).forEach(elem => {
        if(currentlang == langArray[elem].lg) Object.keys(langBtns).forEach(el => langBtns[el].href = navigationPath[elem][el])
    })
}












