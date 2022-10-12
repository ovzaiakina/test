'use strict'      
 
//const pathImg = 'img/' 
let mql = window.matchMedia('(max-width: 900px)') 
let currentlang = (document.querySelector('html')).getAttribute('lang');

let myWhite = '#fafafa'
let myWhiteOpacity = 'rgba(255,255,255,.6)' 
let myBorderActive = '3px solid' + myWhite
let myBorder = '1px solid rgba(255,255,255,.6)'

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
topTitles[5]='Datakabelmanagement' 

let topTitlesUkr = new Array()
topTitlesUkr[0]='Україна-Допомога' 
topTitlesUkr[1]='Україна зараз' 
topTitlesUkr[2]='Як ви можете допомогти'  
topTitlesUkr[3]='Контакт для допомоги'  
topTitlesUkr[4]='Розпізнавати дезінформацію'  
topTitlesUkr[5]='Контакти для співпраці' 

let topTitlesRu = new Array()
topTitlesRu[0]='Украина-Помощь' 
topTitlesRu[1]='Украина сейчас'  
topTitlesRu[2]='Как вы можете помочь'
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

/*************************************************************
  NAV
**************************************************************/
let header = document.querySelector('.header') 

let navToggle = createElem('div', 'nav-toggle') 
header.append(navToggle)
let barsToggle = ['bar bar1', 'bar bar2', 'bar bar3', 'bar bar4', 'bar bar5']
barsToggle.forEach(elem => {
    let barNavToggle = createElem('span', elem)
    navToggle.append(barNavToggle)
})

let nav = createElem('nav', 'nav close')
header.append(nav)
let navUl = createElem('ul', 'nav__ul')
nav.append(navUl)

let menuLevel // для класса navLink: 'nav__link nav__link_anim'/'nav__link'

if (currentlang === 'de') navUl.append(...getMenu(topLinks, topTitles))
else if (currentlang === 'uk') navUl.append(...getMenu(topLinks, topTitlesUkr))
else if (currentlang === 'ru') navUl.append(...getMenu(topLinks, topTitlesRu))

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
            if (i === 2) {
                if (currentlang === 'de') subUl.append(...getSubMenu(subLinks1, subTitles1, subUl, menuLevel))
                else if (currentlang === 'uk') subUl.append(...getSubMenu(subLinks1, subTitles1Ukr, subUl, menuLevel))
                else if (currentlang === 'ru') subUl.append(...getSubMenu(subLinks1, subTitles1Ru, subUl, menuLevel))
            }
//            else if (i === 4) subUl.append(...getSubMenu(subLinks4, subTitles4, subUl, menuLevel))
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
  Lang buttons
**************************************************************/
let langButtonsDiv = createElem('div', 'lang') 
header.append(langButtonsDiv)
let langButtons = ['de', 'uk', 'ru']
//let flags = ['icon-germany.png', 'icon-ukraine.png', 'icon-russia.png'] 

langButtons.forEach((elem, ind) => {
    let btn = document.createElement('button')
    langButtonsDiv.append(btn)
    btn.id = elem
    btn.className = 'btn'
    btn.type = 'button'
//    btn.style.background = 'url(../img/' + flags[ind] + ') no-repeat center'
//    console.log(`buttons: ${btn.style.background}`)
//    btn.style.backgroundSize = '100% 100%'
})

//console.log(`1.btn ${document.querySelectorAll('.btn').length}`);













