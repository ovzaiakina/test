"use strict";function createElem(e,t,l,n,r,a,i,s){let o=document.createElement(e);return t&&(o.className=t),l&&(o.innerHTML=l),n&&(o.href=n),r&&(o.src=r,o.alt=a),i&&(o.srcset=i,o.sizes=s),o}let sectionHero=document.querySelector(".hero"),wrapHero=document.querySelector(".wrap"),titlesHero=createElem("div","hero__titles");wrapHero.append(titlesHero);let heroTitlesArray=[{tag:"h1",name:"hero__h1",txt:"Ukraine &#45; Hilfe"},{tag:"h2",name:"hero__h2",txt:"",href:"",img:"",lang:{de:"Achtung! Neue Telefonnummer",ukr:"Увага! Новий номер телефону",ru:"Внимание! Новий номер телефона"}},{tag:"a",name:"linkIcon hero__linkIcon",txt:"03521&#45;72806&#45;700",href:"tel:0352172806700",img:{tag:"img",name:"icon hero__icon",srcset:pathImg+"icon-phone-white-48.png 48w, "+pathImg+"icon-phone-white-64.png 64w",sizes:"(max-width: 800px) 48px, 64px",src:pathImg+"icon-phone-white-48.png",alt:"icon phone"}},{tag:"p",name:"hero__txt",txt:"",href:"",img:"",lang:{de:"Solidarit\xe4t mit den Opfern des<br>verbrecherischen russischen Angriffskriegs",ukr:"Солідарність із постраждалими<br> злочинна російсько-загарбницька війна",ru:"Солидарность с жертвами<br> преступная российская агрессивная война"}}];function getHeroTitlesArray(e){let t=[];return e.forEach(e=>{let l=createElem(e.tag,e.name,e.txt,e.href);if(e.img){let n=createElem(e.img.tag,e.img.name,"","",e.img.src,e.img.alt,e.img.srcset,e.img.sizes);l.prepend(n)}e.lang&&(l.innerHTML=setValues(e.lang.de,e.lang.ukr,e.lang.ru)),t.push(l)}),t}titlesHero.append(...getHeroTitlesArray(heroTitlesArray));let topLinks=[];topLinks[0]="#el-1",topLinks[1]="#el-2",topLinks[2]="#",topLinks[3]="#el-4",topLinks[4]="#el-5",topLinks[5]="#el-6";let topTitles=[];topTitles[0]="Ukraine-hilfe",topTitles[1]="Ukraine jetzt",topTitles[2]="So k\xf6nnen Sie helfen",topTitles[3]="Kontakt f\xfcr Mithilfe",topTitles[4]="Desinformation erkennen",topTitles[5]="Kooperationen";let topTitlesUkr=[];topTitlesUkr[0]="Ukraine-hilfe",topTitlesUkr[1]="Україна зараз",topTitlesUkr[2]="Допомога",topTitlesUkr[3]="Контакт для допомоги",topTitlesUkr[4]="Розпізнавати дезінформацію",topTitlesUkr[5]="Контакти для співпраці";let topTitlesRu=[];topTitlesRu[0]="Ukraine-hilfe",topTitlesRu[1]="Украина сейчас",topTitlesRu[2]="Помощь",topTitlesRu[3]="Контакт для помощи",topTitlesRu[4]="Распознавать дезинформацию",topTitlesRu[5]="Контакты для сотрудничества";let subLinks1=[];subLinks1[0]="#el-31",subLinks1[1]="#el-32",subLinks1[2]="#el-33",subLinks1[3]="#el-34";let subTitles1=[];subTitles1[0]="Etwas abgeben",subTitles1[1]="Hilfstransporte",subTitles1[2]="Wohnungen",subTitles1[3]="Betreuung der ukrainischen G\xe4ste";let subTitles1Ukr=[];subTitles1Ukr[0]="Надати щось",subTitles1Ukr[1]="Транспортна допомога",subTitles1Ukr[2]="Житло",subTitles1Ukr[3]="Турбота про українських гостей";let subTitles1Ru=[];subTitles1Ru[0]="Предоставить что-то",subTitles1Ru[1]="Транспортная помощь",subTitles1Ru[2]="Жилье",subTitles1Ru[3]="Забота об украинских гостях";let wrapper=document.querySelector(".wrapper"),header=createElem("header","header");wrapper.prepend(header);let navToggle=createElem("div","nav-toggle");header.append(navToggle);let barsToggle=["bar bar1","bar bar2","bar bar3","bar bar4","bar bar5"];barsToggle.forEach(e=>{let t=createElem("span",e);navToggle.append(t)});let nav=createElem("nav","nav close");header.append(nav);let navUl=createElem("ul","nav__ul");nav.append(navUl);let menuLevel;function getMenu(e,t){let l=[];for(let n=0;n<e.length;n++){let r=document.createElement("li");if("#"==e[n]&&(r.className="topmenu"),menuLevel=1,r.append(getNavLinks(e,t,n,menuLevel)),"#"==e[n]){let a=document.createElement("div");a.className="arrow arrow_down nav__arrow",r.append(a);let i=document.createElement("ul");i.className="submenu filter_background",r.append(i),menuLevel=2,2===n&&i.append(...getSubMenu(subLinks1,setValues(subTitles1,subTitles1Ukr,subTitles1Ru),i,menuLevel))}l.push(r)}return l}function getSubMenu(e,t,l){let n=[];for(let r=0;r<e.length;r++){let a=document.createElement("li");l.append(a),a.append(getNavLinks(e,t,r)),n.push(a)}return n}function getNavLinks(e,t,l){let n=new DocumentFragment,r=document.createElement("a");return 1===menuLevel&&("#"==e[l]?r.className="nav__link nav__link_1level nav__link_paddingRight":r.className="nav__link nav__link_1level"),2===menuLevel&&(r.className="nav__link"),r.textContent=t[l],r.href=e[l],n.append(r),n}navUl.append(...getMenu(topLinks,setValues(topTitles,topTitlesUkr,topTitlesRu)));let langButtonsDiv=createElem("div","lang");header.append(langButtonsDiv);let myBtn="a",langArray=[{lg:"de",lb:["Deutsch","Ukrainisch","Russisch"],fl:pathImg+"icon-germany.png"},{lg:"uk",lb:["німецька","українська","російська"],fl:pathImg+"icon-ukraine.png"},{lg:"ru",lb:["немецкий","украинский","русский"],fl:pathImg+"icon-russia.png"}];langArray.forEach(e=>{let t=createElem(myBtn,"btn");langButtonsDiv.append(t)});let langBtns=document.querySelectorAll(".btn");if(Object.keys(langBtns).forEach(e=>{onloadBgimg(langBtns[e],"","",langArray[e].fl),"button"==myBtn&&(langBtns[e].type="button"),currentlang==langArray[e].lg&&(Object.keys(langBtns).forEach(t=>langBtns[t].ariaLabel=langArray[e].lb[t]),langBtns[e].style.boxShadow="0 0 0 4px"+white)}),"button"==myBtn){let e=window.location.protocol,t=window.location.host;if(window.location.pathname,pathJs.includes("real"))var l=["/index-real.html","/uk/index-real-uk.html","/ru/index-real-ru.html"];else var l=["/index.html","/uk/index.html","/ru/index.html"];Object.keys(langBtns).forEach(n=>langBtns[n].addEventListener("click",()=>location.assign(e+"//"+t+l[n])))}else{if(myBtn="a",navigPath)var l=[["index-real.html","uk/index-real-uk.html","ru/index-real-ru.html"],["../index-real.html","index-real-uk.html","../ru/index-real-ru.html"],["../index-real.html","../uk/index-real-uk.html","index-real-ru.html"]];else var l=[["index.html","uk/index.html","ru/index.html"],["../index.html","index.html","../ru/index.html"],["../index.html","../uk/index.html","index.html"]];Object.keys(langBtns).forEach(e=>{currentlang==langArray[e].lg&&Object.keys(langBtns).forEach(t=>langBtns[t].href=l[e][t])})}