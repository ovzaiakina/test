'use strict'
//let pathIcons = 'img/icons/' 
let pathImg = 'img/slider/'
let imgArray = ['geruestbau-31', 'geruestbau-32', 'geruestbau-33', 'geruestbau-34', 'geruestbau-35'],
    mqlSl = window.matchMedia('(min-width: 701px)')

createSlider('.slider_horizontal')
createSlider('.slider_vertical')

moveSlides('.slider', {isCycling: true, direction: 'leftUp'})
// бесконечная прокрутка слайдов - isCycling: false / true 

 
// ---------------------------------------
// Создаем слайдеры
function createSlider(selector) {
    let mainElement = document.querySelector(selector),
        sliderWrapper = mainElement.querySelector('.slider__imagesWrap')
        //sliderItem = createElem('div', 'slider__img', '', '')
    
    sliderWrapper.append(...getImg(imgArray)) 
    
    function getImg(array) {
        let result = []
        for (let i = 0; i < array.length; i++) { 
            let sliderItem = createElem('div', 'slider__img', '', '')
            let img = document.createElement('img')

            img.className = 'img lazyload'
            
            img.setAttribute(DataSet, 'data-srcset')
            img.dataset.srcset = pathImg + array[i] + '.jpg 331w,' + pathImg + array[i] + '.jpg 487w,'  + pathImg + array[i] + '.jpg 655w'    
            img.sizes = '(max-width: 800px) 331px, (max-width: 1440px) 487px, (min-width: 1441px) 655px, 800px'
            img.setAttribute(DataSet, 'data-src')
            img.dataset.src = pathImg + array[i] + '.jpg'
            
            img.alt = 'geruestbau'
            sliderItem.append(img)
            result.push(sliderItem)
        }
        return result 
    }
    
     /* Используем, чтобы избежать ошибки - Uncaught TypeError: Cannot set property dataset of #<HTMLElement> which has only a getter
     get – функция, которая возвращает значение свойства. По умолчанию undefined.
     set – функция, которая записывает значение свойства. По умолчанию undefined.
     var - oбъявление переменной обрабатывается в начале выполнения функции/скрипта («всплывает»), однако присвоение значения всегда происходит в той строке кода, где оно указано. В нашем случае переменная DataSet уже видна для img.setAttribute(DataSet, 'data-src'), то есть переменная инициализирована, а значение в виде функции уже присваиваем после img.setAttribute(DataSet, 'data-src')*/
    var DataSet = (function () {
        "use strict"
        var E, toCamelCase, getter, setter
        E = document.createElement("div")

        if (E.dataset && !E.hasOwnProperty("dataset")) {
            //console.log(`1. ${E.dataset}, ${E.hasOwnProperty("dataset")}`)
                // 1. [object DOMStringMap], fals
            toCamelCase = (function () {
                var re = /-([a-z])/g
                return function (str) {
                    str = str.replace(re, function (match, lower) {
                        return lower.toUpperCase()
                    })
                }
            }())
            getter = function (element, key) {
                return element.dataset[toCamelCase(key)]
            }
            setter = function (element, key, value) {
                element.dataset[key] = value
            }
        } else {
            //console.log(`2. ${E.dataset}`)
            getter = function (element, key) {
                return element.getAttribute("data-" + key)
            }
            setter = function (element, key, value) {
                element.setAttribute("data-" + key, value)
            }
        }
        /*console.log({"get": getter, "set": setter})*/
        return {
            "get": getter,
            "set": setter
        }
    }())
    
    function createElem(elemE, classN, innerH, hrefE, srcE, altE) {
        let elem = document.createElement(elemE) 
        elem.className = classN
        elem.innerHTML = innerH
        elem.href = hrefE
        elem.src = srcE
        elem.alt = altE

        return elem
    }
    
    if(mainElement.classList.contains('slider_horizontal')) {
        createHorizontalControls()
    }
    // создаем 2-ой вертикальный слайдер в зависимости от размеров экрана
    mqFunction(mqlSl) 
    function mqFunction(mql) { 
        if (mql.matches) { // для больших экранов
            if (mainElement.classList.contains('slider_vertical')) {
                let sliderControlUp = createElem('a', 'slider__control', '', '#')
                sliderControlUp.role = 'button';
                //console.log(sliderControlUp.role)
                mainElement.append(sliderControlUp)
                let imgUp = createElem('img', 'img', '', '', pathIcons+'icon-g-up-white.png', 'up')
                sliderControlUp.append(imgUp)

                let sliderControlDown = createElem('a', 'slider__control', '', '#')
                sliderControlDown.role = 'button';
                mainElement.append(sliderControlDown)
                let imgDown = createElem('img', 'img', '', '', pathIcons+'icon-g-down-white.png', 'down')
                sliderControlDown.append(imgDown)
                }
        }
        else { // для мобильных экранов
            if (mainElement.classList.contains('slider_vertical')) {
                createHorizontalControls()
            }
        }
    }
    
    function createHorizontalControls() {
        let sliderControlLeft = createElem('a', 'slider__control', '', '#')
        sliderControlLeft.role = 'button';
        mainElement.append(sliderControlLeft)
        let imgLeft = createElem('img', 'img', '', '', pathIcons+'icon-g-left-white.png', 'left')
        sliderControlLeft.append(imgLeft)

        let sliderControlRight = createElem('a', 'slider__control', '', '#')
        sliderControlRight.role = 'button';
        mainElement.append(sliderControlRight)
        let imgRight = createElem('img', 'img', '', '', pathIcons+'icon-g-right-white.png', 'right')
        sliderControlRight.append(imgRight)
    }
}

// при изменении размеров экрана определяем соответствующие стрелки
mqlSl.addListener(mqFunctionImg)  
mqFunctionImg(mqlSl) 

function mqFunctionImg(mql) { 
    let mainElem, controls
    document.querySelectorAll('.slider').forEach(elem => {
        if (elem.classList.contains('slider_vertical')) {
            mainElem = elem
            controls = mainElem.querySelectorAll('.slider__control')
        }
    })
    if (mql.matches) {
        controls[0].children[0].src = pathIcons+'icon-g-up-white.png'
        controls[1].children[0].src = pathIcons+'icon-g-down-white.png'
    } else {
        controls[0].children[0].src = pathIcons+'icon-g-left-white.png'
        controls[1].children[0].src = pathIcons+'icon-g-right-white.png'
    }
}

// --------------------------------------- 
// Двигаем слайды - вправо и вверх || влево и вниз
function moveSlides(selector, config) {
    let slider = document.querySelectorAll(selector),
        sliderControls = document.querySelectorAll('.slider__control'),
        sliderWrapperH,
        sliderWrapperV,
        sliderItemsH,
        sliderItemsV,
        wrapperWidth,
        itemWidth,
        wrapperHeight,
        itemHeight,
        amountOfVisibleElemH,
        amountOfVisibleElemV,
        stepH,
        stepV,
        itemsH = [], // для зацикливания слайдов
        itemsV = [],
        indexActiveItemH = 0, 
        indexActiveItemV = 0,
        indexActive = 0,
        translateH = 0, // значение сдвига - translateX/Y
        translateV = 0,
        interval = 0,
        _config = {
            isCycling: false,   // автоматическая смена слайдов
            direction: 'right', // направление смены слайдов
            interval: 2000,     // интервал между автоматической сменой слайдов
            pause: true         // устанавливать ли паузу при поднесении курсора к слайдеру
        }
    
    slider.forEach(elem => {
        if (elem.classList.contains('slider_horizontal')) {
            sliderWrapperH = elem.querySelector('.slider__imagesWrap')
            sliderItemsH = elem.querySelectorAll('.slider__img')
            wrapperWidth = sliderWrapperH.offsetWidth 
            itemWidth = sliderItemsH[0].offsetWidth
            amountOfVisibleElemH = Math.round(wrapperWidth / itemWidth)
            stepH = itemWidth / wrapperWidth * 100
        } else if (elem.classList.contains('slider_vertical')) {
            sliderWrapperV = elem.querySelector('.slider__imagesWrap')
            sliderItemsV = elem.querySelectorAll('.slider__img') 
        }       
    })
    
    mqlSl.addListener(mqFunction1) 
    mqFunction1(mqlSl)
    
    for (let key in config) {
        // если config определен при инициализации слайдера, то присваиваем это значение свойству объекта _config, true - автоматическая прокрутка слайдов
        if (key in _config) {
            //console.log(`1.1 config: ${key} == ${config[key]}`)
            _config[key] = config[key]
        }
    }
    
    // каждому элементу .slider__img привязываем значения его индекса и сдвига, как свойства объекта
    sliderItemsH.forEach(function(elem, index) {
        itemsH.push({ item: elem, index1: index, translate: 0 })
    })
    sliderItemsV.forEach(function(elem, index) {
        itemsV.push({ item: elem, index1: index, translate: 0 })
    })
    /*itemsH.forEach(elem => {
        console.log(`1.2 ${elem.item.offsetParent.className}, index1: ${elem.index1}, translate: ${elem.translate}`)
    })*/
     
    sliderControls.forEach(elem => elem.style.visibility = 'hidden')
    
    // --------------------------------------------------
    // для горизонтального слайдера координаты стрелок одинаковые для любых размеров экрана 
    // к "slider__control" добавляем класс с координатами стрелок для текущего размера экрана, но прежде удаляем, если он уже был добавлен при предыдущем размере экрана
    sliderControls.forEach((elem, index) => {
        if (index === 0) addArrowClass(elem, 'slider__control_left_js')
        else if (index === 1) addArrowClass(elem, 'slider__control_right_js')
    })
    
    // анимация стрелок
    document.querySelector('.container').addEventListener('mouseenter', function (){
        sliderControls.forEach((elem, index) => {
            if (index === 0) animationArrow(elem, '-15px', '', '50%', '', '300%', '-50%')
            else if (index === 1) animationArrow(elem, '', '-15px', '50%', '', '-300%', '-50%')
        })
    })
    
    // скрываем стрелки после анимации
    document.querySelector('.container').addEventListener('mouseleave', function () {
        sliderControls.forEach((elem, index) => {
            if (index === 0) animationArrowStop(elem, '-25px', '-50%')
            else if (index === 1) animationArrowStop(elem, '25px', '-50%')
        })
    })

    // --------------------------------------------------
    // для вертикалного слайдера координаты стрелок разные для разных размеров экрана 
    function mqFunction1(mql) { 
        if (mql.matches) { // горизонтальный и вертикальный слайдеры
            wrapperHeight = sliderWrapperV.offsetHeight 
            itemHeight = sliderItemsV[0].offsetHeight
            amountOfVisibleElemV = Math.round(wrapperHeight / itemHeight)
            stepV = Math.round(itemHeight / wrapperHeight * 100)
            
            sliderControls.forEach((elem, index) => {
                if (index === 2) addArrowClass(elem, 'slider__control_up_js')
                else if (index === 3) addArrowClass(elem, 'slider__control_down_js')
            })
            
            document.querySelector('.container').addEventListener('mouseenter', function (){
                sliderControls.forEach((elem, index) => {
                    if (index === 2) animationArrow(elem, '50%', '', '31px', '', '-50%', '250%')
                    else if (index === 3) animationArrow(elem, '50%', '', '', '40px', '-50%', '-250%')
                })
            })
            
            document.querySelector('.container').addEventListener('mouseleave', function () {
                sliderControls.forEach((elem, index) => {
                    if (index === 2) animationArrowStop(elem, '-50%', '-90px')
                    else if (index === 3) animationArrowStop(elem, '-50%', '90px')
                })
            })
        } else { // два горизонтальных слайдера
            wrapperHeight = sliderWrapperV.offsetWidth 
            itemHeight = sliderItemsV[0].offsetWidth
            amountOfVisibleElemV = Math.round(wrapperHeight / itemHeight)
            stepV = Math.round(itemHeight / wrapperHeight * 100)  
            
            sliderControls.forEach((elem, index) => {
                if (index === 2) addArrowClass(elem, 'slider__control_left_js')
                else if (index === 3) addArrowClass(elem, 'slider__control_right_js')
            })
            
            document.querySelector('.container').addEventListener('mouseenter', function (){
                sliderControls.forEach((elem, index) => {
                    if (index === 2) animationArrow(elem, '-15px', '', '50%', '', '300%', '-50%')
                    else if (index === 3) animationArrow(elem, '', '-15px', '50%', '', '-300%', '-50%')
                })
            })

            document.querySelector('.container').addEventListener('mouseleave', function () {
                sliderControls.forEach((elem, index) => {
                    if (index === 2) animationArrowStop(elem, '-25px', '-50%')
                    else if (index === 3) animationArrowStop(elem, '25px', '-50%')
                })
            })
        }
    }
    
    function addArrowClass(elem, classNm) {    
        if (elem.classList.length === 2) elem.classList.remove(elem.classList[1])
        elem.classList.add(classNm)
    }
    
    function animationArrow(elem, left, right, top, bottom, x, y) {
        setTimeout(function() {
            elem.style.visibility = 'visible'
            // стрелки с этих позиций начнут двигаться
            elem.style.left = left
            elem.style.right = right
            elem.style.top = top
            elem.style.bottom = bottom
            elem.style.transform = 'translateY('+ y + ')'
            // будет двигаться до этой позиции и назад
            elem.style.transform = 'translateX(' + x + ') translateY(' + y + ')'
        }, 200)   
    }
    
    function animationArrowStop(elem, x, y) {
        setTimeout(function() {
            elem.style.transform = 'translateX(' + x + ') translateY(' + y + ')'
        }, 200)
    }
    
    // --------------------------------------------------
    // при наведении мышкой меняем цвет стрелки
    sliderControls.forEach((elem, index) => elem.addEventListener('mouseenter', function (event) {
        if (elem.classList.contains('slider__control_left_js')) elem.firstElementChild.src = pathIcons+'icon-g-left-red.png'
        else if (elem.classList.contains('slider__control_right_js')) elem.firstElementChild.src = pathIcons+'icon-g-right-red.png'
        else if (elem.classList.contains('slider__control_up_js')) elem.firstElementChild.src = pathIcons+'icon-g-up-red.png'
        else if (elem.classList.contains('slider__control_down_js')) elem.firstElementChild.src = pathIcons+'icon-g-down-red.png'
    }))
    sliderControls.forEach(elem => elem.addEventListener('mouseleave', function () {
        if (elem.classList.contains('slider__control_left_js')) elem.firstElementChild.src = pathIcons+'icon-g-left-white.png'
        else if (elem.classList.contains('slider__control_right_js')) elem.firstElementChild.src = pathIcons+'icon-g-right-white.png'
        else if (elem.classList.contains('slider__control_up_js')) elem.firstElementChild.src = pathIcons+'icon-g-up-white.png'
        else if (elem.classList.contains('slider__control_down_js')) elem.firstElementChild.src = pathIcons+'icon-g-down-white.png'
    }))
    
    // --------------------------------------------------
    // бесконечная прокрутка 
    setUpListeners() 
    cycle(_config.direction)
    
    function setUpListeners() {  
        sliderControls.forEach(elem => {
            elem.addEventListener('click', controlClick)
        })
        if (_config.pause && _config.isCycling) {
            slider.forEach(elem => {
                elem.addEventListener('mouseenter', function () {
                    clearInterval(interval)
                })
            })
            slider.forEach(elem => {
                elem.addEventListener('mouseleave', function () {
                    clearInterval(interval)
                    cycle(_config.direction)
                })
            })
        }
    }

    function cycle(direction) {
        if (!_config.isCycling) return  
        interval = setInterval(function() {
            translateItem(direction)
        }, _config.interval)
    }
    
    // --------------------------------------------------
    // двигаем слайды
    function controlClick(e) { 
        if (e.currentTarget.classList.contains('slider__control')) {
            e.preventDefault()       
            let direction
            if (e.currentTarget.classList.contains('slider__control_left_js') || e.currentTarget.classList.contains('slider__control_up_js')) direction = 'leftUp'
            else if (e.currentTarget.classList.contains('slider__control_right_js') || e.currentTarget.classList.contains('slider__control_down_js')) direction = 'rightDown'
            translateItem(direction)
        }
    }
    
    // подсвечиваем активный слайд 
    elemActive()
    function elemActive() {
        sliderItemsV.forEach((elem, index) => {
            if (index === indexActive) {
                elem.firstChild.style.opacity = '1'
            } else {
                elem.firstChild.style.opacity = '.5'
            }
        })
    }
    
    function translateItem(direction) {
        let nextItem        
        if (direction === 'leftUp') {
            indexActiveItemH++
            indexActiveItemV++ 
            rightUp(indexActiveItemH, amountOfVisibleElemH, itemsH, 'X')
            
            mqlSl.addListener(mqFunction2) 
            mqFunction2(mqlSl)
            function mqFunction2(mql) { 
                if (mql.matches) rightUp(indexActiveItemV, amountOfVisibleElemV, itemsV, 'Y')
                else rightUp(indexActiveItemV, amountOfVisibleElemV, itemsV, 'X')
            }
            
            translateH -= stepH
            translateV -= stepV
            
            ++indexActive
            if(indexActive === sliderItemsV.length) {
                indexActive = 0
            }
            elemActive()

            function rightUp(indexActive, visElem, itemsArray, axis) {
                if ((indexActive + visElem - 1) > position.getRight(itemsArray)) {
                    nextItem = position.getItemLeft(itemsArray)
                    itemsArray[nextItem].index1 = position.getRight(itemsArray) + 1
                    itemsArray[nextItem].translate += itemsArray.length * 100
                    itemsArray[nextItem].item.style.transform = 'translate' + axis + '(' + itemsArray[nextItem].translate + '%)'      
                }
            }
        }
        if (direction === 'rightDown') {
            indexActiveItemH--
            indexActiveItemV--
            leftDown(indexActiveItemH, itemsH, 'X')
            
            mqlSl.addListener(mqFunction3) 
            mqFunction3(mqlSl)
            function mqFunction3(mql) { 
                if (mql.matches) leftDown(indexActiveItemV, itemsV, 'Y')
                else leftDown(indexActiveItemV, itemsV, 'X')
            }
            
            translateH += stepH
            translateV += stepV
            
            --indexActive
            if(indexActive < 0) {
                indexActive = sliderItemsV.length-1
            }
            elemActive()
            
            function leftDown(indexActive, itemsArray, axis) {
                if (indexActive < position.getLeft(itemsArray)) {  
                    nextItem = position.getItemRight(itemsArray)
                    itemsArray[nextItem].index1 = position.getLeft(itemsArray) - 1
                    itemsArray[nextItem].translate -= itemsArray.length * 100
                    itemsArray[nextItem].item.style.transform = 'translate' + axis + '(' + itemsArray[nextItem].translate + '%)'
                }
            }
        }
        
        //animationPage()
        sliderWrapperH.style.transform = 'translateX(' + translateH + '%)' 
        
        mqlSl.addListener(mqFunction4) 
        mqFunction4(mqlSl)
        function mqFunction4(mql) { 
            if (mql.matches) {
                sliderWrapperV.style.transform = 'translateY(' + translateV + '%)' 
            } else {
                sliderWrapperV.style.transform = 'translateX(' + translateV + '%)' 
            }
        }
    }
    
   /* function animationPage() {
        setTimeout(function() {
            console.log(translateH)
            sliderWrapperH.style.transform = 'translateX(' + translateH + '%)'
        }, 0)   
    } */
    
    let position = {    
        getItemRight: function(array) {
            // сдвиг вправо - возвращает наименьший индекс элемента в массиве, чтобы перенести его в конец бесконечного цикла 
            //console.log(`4. ----------------------`)
            let minIndex = 0
            array.forEach(function (elem, index) {
                if (elem.index1 > array[minIndex].index1) {
                    minIndex = index
                }
            })
            return minIndex
        },
        getRight: function(array) {
            // сдвиг вправо - возвращает крайнюю правую позицию для наименьший индекса элемента, на которую надо сдвинуть этот элемент: если в массиве: 0,1,2,3 то крайняя правая позиция = 3; для зацикливания слайдов следующей крайней правой позицией будет 4
            let lastIndex = array[position.getItemRight(array)].index1
            return lastIndex
        },   
        getItemLeft: function(array) {  
            // сдвиг влево - возвращает наибольший индекс элемента в массиве, чтобы перенести его в начало бесконечного цикла
            let maxIndex = 0           
            array.forEach(function (elem, index) {      
                if (elem.index1 < array[maxIndex].index1) {
                    maxIndex = index
                }
            })
            return maxIndex
        },
        getLeft: function(array) {
            // сдвиг влево - возвращает крайнюю левую позицию для наибольшего индекса элемента, на которую надо сдвинуть этот элемент: если в массиве: 0,1,2,3 то крайняя левая позиция = 0; для зацикливания слайдов следующей крайней левой позицией будет -1
            let firstIndex = array[position.getItemLeft(array)].index1
            return firstIndex
        }
    }
    
}