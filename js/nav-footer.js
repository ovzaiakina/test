let myBorderActive="3px solid"+white,myBorder="1px solid rgba(255,255,255,.6)",navLi=document.querySelectorAll("nav li"),navLinks=document.querySelectorAll(".nav__link"),navLinks1Level=document.querySelectorAll(".nav__link_1level"),navLinksSubmenu=document.querySelectorAll(".submenu li .nav__link"),topmenus=document.querySelectorAll(".topmenu"),navLiNotSub=document.querySelectorAll("li:not(.topmenu)"),articles=document.querySelectorAll('*[id^="el"]'),wraps=document.querySelectorAll(".wrap"),borderTop=document.querySelectorAll(".borderTop"),submenyFirstChild=document.querySelectorAll('.nav__link[href="#"');function setHeight(e,n){Object.keys(e).forEach(t=>{"0"===t?(e[t].style.height="100vh",e[t].style.maxHeight="1080px"):(e[t].style.height=calculateHeight(n[t])+"px",e[t].style.minHeight=calculateHeight(n[t])+"px")})}function calculateHeight(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)}function mqFunctionMobMenuBorder(e){e.matches?setBorder(navLinks,myBorder):(setBorder(navLinks,"none"),setBorder(navLinksSubmenu,myBorder))}function setBorder(e,n){Object.keys(e).forEach(t=>{t<e.length-1&&(e[t].style.borderBottom=n)})}main.addEventListener("scroll",setHeight(articles,wraps)),main.removeEventListener("scroll",setHeight),window.addEventListener("resize",function(){setHeight(articles,wraps)}),mqFunctionMobMenuBorder(mql),mql.addListener(mqFunctionMobMenuBorder);let one11=["ukr","hil","nfo","ma","ne-","lwp","ilto:","fe@","ai",".i"],one22=["in","tes","mai","n.de","lto:","bun","isse","-me","fo@"],lmArray1=[[one11[3]+one11[6]+one11[0]+one11[8]+one11[4]+one11[1]+one11[7]+one11[5]+one11[9]+one11[2]],[one22[2]+one22[4]+one22[0]+one22[8]+one22[5]+one22[1]+one22[7]+one22[6]+one22[3]]],lmArray2=[[one11[0]+one11[8]+one11[4]+one11[1]+one11[7]+one11[5]+one11[9]+one11[2]],[one22[0]+one22[8]+one22[5]+one22[1]+one22[7]+one22[6]+one22[3]]],lm=document.querySelectorAll(".ml");lmArray1.forEach((e,n,t)=>{lm[n].href=t[n],lm[n].textContent=lmArray2[n]});let herolinkIcon=document.querySelector(".linkIcon"),heroIcon=document.querySelector(".hero__icon");function setMediaImg(e,n,t,o){e.currentSrc.endsWith(n)?e.srcset=t:e.srcset=o}herolinkIcon.addEventListener("mouseenter",()=>setMediaImg(heroIcon,"48.png",pathImg+"icon-phone-blue-48.png",pathImg+"icon-phone-blue-64.png")),herolinkIcon.addEventListener("mouseleave",()=>setMediaImg(heroIcon,"48.png",pathImg+"icon-phone-white-48.png",pathImg+"icon-phone-white-64.png"));let linkIcons=document.querySelectorAll(".linkIcon:not(.hero__linkIcon)"),iconArray=[{imgName:"icon",imgSrc:pathImg+"icon-location-blue.png",imgAlt:"icon-location",imgSrcHover:pathImg+"icon-location-white.png"},{imgName:"icon",imgSrc:pathImg+"icon-ml-blue.png",imgAlt:"icon-ml",imgSrcHover:pathImg+"icon-ml-white.png"},{imgName:"icon",imgSrc:pathImg+"icon-phone2-blue.png",imgAlt:"icon-phone",imgSrcHover:pathImg+"icon-phone2-white.png"},{imgName:"icon",imgSrc:pathImg+"icon-location-blue.png",imgAlt:"icon-location",imgSrcHover:pathImg+"icon-location-white.png"},{imgName:"icon",imgSrc:pathImg+"icon-ml-blue.png",imgAlt:"icon-ml",imgSrcHover:pathImg+"icon-ml-white.png"}];function showVisible(){Object.keys(articles).forEach(e=>{if(isVisible(articles[e])){let n=document.querySelector('.nav__link[href="#'+articles[e].id+'"]');function t(e){e.matches&&closeMobMenu()}t(mql),mql.addListener(t),activeSubmenu(n),activeNav(n),alertUp.style.display=e>0?"block":"none"}}),main.scrollTop>0?(header.classList.add("filter_background"),Object.keys(navLinks1Level).forEach(e=>navLinks1Level[e].classList.add("nav__link_scroll"))):(header.classList.contains("filter_background")&&header.classList.remove("filter_background"),Object.keys(navLinks1Level).forEach(e=>{navLinks1Level[e].classList.contains("nav__link_scroll")&&navLinks1Level[e].classList.remove("nav__link_scroll")}))}function isVisible(e){return e.getBoundingClientRect().top<document.documentElement.clientHeight/2}iconArray.forEach((e,n,t)=>{let o=document.createElement("img");o.className=t[n].imgName,o.src=t[n].imgSrc,o.alt=t[n].imgAlt,linkIcons[n].prepend(o),linkIcons[n].addEventListener("mouseenter",()=>o.src=t[n].imgSrcHover),linkIcons[n].addEventListener("mouseleave",()=>o.src=t[n].imgSrc)}),activeNav(navLinks[0]),main.addEventListener("scroll",showVisible);let topMenuLink;function activeSubmenu(e){if(e.parentElement.parentElement.parentElement.firstElementChild.getAttribute("href"))(topMenuLink=e.parentElement.parentElement.parentElement.firstElementChild).classList.add("activeTopmenu"),topMenuLink.style.borderBottom=myBorderActive;else if(topMenuLink){function n(e){e.matches?topMenuLink.style.borderBottom=myBorder:topMenuLink.style.borderBottom="none"}topMenuLink.classList.remove("activeTopmenu"),n(mql),mql.addListener(n)}}function activeNav(e){let n=document.querySelector(".nav__link.activeNav"),t=e;if(n){function o(e){e.matches?n.style.borderBottom=myBorder:Array.from(navLinksSubmenu).find(function(e){return e.href==n.href})?n.style.borderBottom=myBorder:n.style.borderBottom="none"}n.classList.remove("activeNav"),o(mql),mql.addListener(o)}t&&(t.classList.add("activeNav"),t.style.borderBottom=myBorderActive)}let lazyloadImages=document.querySelectorAll(".lazy");function lazyload(){if(0==lazyloadImages.length){document.removeEventListener("scroll",lazyload);return}lazyloadImages.forEach(e=>{if(isVisibleImg(e)){let n=e.getAttribute("data-src"),t=e.getAttribute("data-srcset");n&&(e.src=n),t&&(e.srcset=t),e.classList.remove("lazy")}})}function isVisibleImg(e){let n=e.getBoundingClientRect(),t=document.documentElement.clientHeight,o=n.top>0&&n.top<t,s=n.bottom<t&&n.bottom>0;return o||s}main.addEventListener("scroll",lazyload),Object.keys(topmenus).forEach((e,n)=>{topmenus[e].addEventListener("mouseenter",function(){function n(n){n.matches?(topmenus[e].children[1].style.top="10%",Object.keys(submenyFirstChild).forEach(e=>submenyFirstChild[e].style.justifyContent="flex-start")):(topmenus[e].children[1].style.top="45%",Object.keys(navLiNotSub).forEach(e=>navLiNotSub[e].style.zIndex="0"),topmenus[e].style.zIndex="1")}topmenus[e].children[1].classList.remove("arrow_down"),topmenus[e].children[1].classList.add("arrow_up"),topmenus[e].children[2].classList.add("submenu-open"),topmenus[e].children[2].style.transition="transform .7s linear",n(mql),mql.addListener(n)}),topmenus[e].addEventListener("mouseleave",function(){function n(n){n.matches?(topmenus[e].children[1].style.top="40%",Object.keys(submenyFirstChild).forEach(e=>submenyFirstChild[e].style.justifyContent="center")):topmenus[e].children[1].style.top="30%"}topmenus[e].children[1].classList.remove("arrow_up"),topmenus[e].children[1].classList.add("arrow_down"),topmenus[e].children[2].classList.remove("submenu-open"),n(mql),mql.addListener(n)})});let bars=document.querySelectorAll(".bar"),direc1="translateX(",direc2="-300",direc3="%)";function mqFunctionMobMenu(e){if(e.matches){navToggle.addEventListener("click",fNavToggle);let n=direc1+direc2+direc3;Object.keys(navLi).forEach(e=>navLi[e].style.transform=n)}else Object.keys(navLi).forEach(e=>navLi[e].style.transform=direc1+"0%)")}function fNavToggle(e){nav.classList.contains("close")?(nav.classList.remove("close"),nav.classList.add("open"),Object.keys(bars).forEach(e=>{bars[e].classList.contains("bar2")&&bars[e].classList.add("bar2_open"),bars[e].classList.contains("bar3")&&bars[e].classList.add("bar3_open"),bars[e].classList.contains("bar1")&&bars[e].classList.add("bar1_open"),bars[e].classList.contains("bar4")&&bars[e].classList.add("bar4_open"),bars[e].classList.contains("bar5")&&bars[e].classList.add("bar5_open")}),Object.keys(navLi).forEach(e=>navLi[e].style.transform=direc1+"0%)"),direc2*=-1):closeMobMenu()}function closeMobMenu(){nav.classList.remove("open"),nav.classList.add("close"),Object.keys(bars).forEach(e=>{bars[e].classList.contains("bar2")&&bars[e].classList.remove("bar2_open"),bars[e].classList.contains("bar3")&&bars[e].classList.remove("bar3_open"),bars[e].classList.contains("bar1")&&bars[e].classList.remove("bar1_open"),bars[e].classList.contains("bar4")&&bars[e].classList.remove("bar4_open"),bars[e].classList.contains("bar5")&&bars[e].classList.remove("bar5_open")}),Object.keys(navLi).forEach(e=>navLi[e].style.transform=direc1+direc2+direc3)}mqFunctionMobMenu(mql),mql.addListener(mqFunctionMobMenu);let alertUp=document.createElement("div");alertUp.className="alert-up";let arrowUp=document.createElement("a");arrowUp.className="arrow arrow_up alert-up__arrow",arrowUp.href="#el-1",alertUp.append(arrowUp),document.body.append(alertUp),alertUp.style.display="none";