let currentlang = (document.querySelector('html')).getAttribute('lang');  
let mql = window.matchMedia('(max-width: 900px)');
let hero = document.querySelector('.hero');
let white = '#fafafa'; 

let pathImg = setValues('img/', '../img/', '../img/'); 

let styleArray = ['css/style2-20230210.css','css/style2-min901.css','css/style2-max900.css'];
/*let styleArray = ['css-real/style2.css','css-real/style2-min901.css','css-real/style2-max900.css']; */ 

let headerNav = 'js/header-nav-20230305.js';  
/*let headerNav = 'js-real/header-nav.js';*/    

let navFooter = 'js/nav-footer-20230304.js';  
/*let headerNav = 'js-real/nav-footer.js';*/  

let jsHeaderNav = setValues(headerNav, '../'+headerNav, '../'+headerNav);  
let jsNavFooter = setValues(navFooter, '../'+navFooter, '../'+navFooter);  

/* header-nav.js: <button> или <a> - установить навигацию по страницам */ 

function setValues(valueDe, valueUkr, valueRu) {
    let item; 
    if (currentlang == "de") {item = valueDe;}
    else if (currentlang == "uk") {item = valueUkr;}
    else if (currentlang == "ru") {item = valueRu;}
    return item;
}  

function onloadBgimg(elem, srcsetN, sizesN, srcN, elemVar) {
    let bgImg = document.createElement('img'); 
    if(srcsetN) bgImg.srcset = srcsetN;
    if(sizesN) bgImg.sizes = sizesN;
    if(srcN) bgImg.src = srcN;

    bgImg.onload = function() { 
        let bgUrl = bgImg.currentSrc;  
        /*elemVar: background: var(--img, auto); для ::before в JS*/
        if(elemVar) {
            elem.style.setProperty(elemVar, "url("+bgUrl+") top center no-repeat");
        }
        else {
            elem.style.background = "url("+bgUrl+") no-repeat center";
            elem.style.backgroundSize = '100% 100%';
        }
    }
}

function asyncLoad(elem, file, media = '') {
    let item = document.createElement(elem);
    if (item.tagName == 'SCRIPT') {
        item.src = file;
        if(item.src.includes('header')) {document.querySelector('.hero').append(item);}
        else if(file.includes('footer')) {document.body.append(item);}
    } else if (item.tagName == 'LINK') {
        item.rel = 'stylesheet';
        item.href = file;
        item.media = media;
        document.head.appendChild(item); 
    }
}