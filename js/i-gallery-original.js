const gallery = document.querySelector('.gallery')
const picts = document.querySelectorAll('.pict')
const arrows = document.querySelectorAll('.scrollctrl')
let indexPict = 0  

//console.log(typeof gallery, gallery.className)

arrows.forEach( elem =>            
    elem.addEventListener('click', () => {
        let direction = elem.dataset.scrollArrow
        let scrollDirection = targetSection(direction)  
        smoothScroll(gallery, scrollDirection, true)
    })
) 

let targetSection = function(direction) {
    
    if (direction === 'right' && indexPict < picts.length-1) {
        indexPict++
        //console.log(`2.1 direction: ${direction}, indexPict: ${indexPict}`)
    } 
    else if (direction === 'left' && indexPict > 0) {
        indexPict-- 
        //console.log(`2.2 direction: ${direction}, indexPict: ${indexPict}`)
    } 
    
    const scrollDirection = Math.floor(gallery.scrollWidth * (indexPict / picts.length)) 
        
        //смещаем на ширину дочернего блока: ширина родительского блока / (index блока * кол-во блоков)
        //console.log(`2.4 scrollDirection: ${scrollDirection} = (${gallery.className}: ${gallery.scrollWidth}) * (indexPict/picts.length: ${indexPict}/${picts.length})`)

    return scrollDirection
}     

const hasNativeSmoothScroll = testSupportsSmoothScroll()
//console.log(`3. hasNativeSmoothScroll: ${hasNativeSmoothScroll}`)

function testSupportsSmoothScroll () {
  let supports = false
  try {
    let div = document.createElement('div')
    div.scrollTo({
      top: 0,
      get behavior () {
        supports = true
        return 'smooth'
      }
    })
  } catch (err) {} // Edge throws an error
  return supports
}

function smoothScroll (node, topOrLeft, direction) {   
    
  if (hasNativeSmoothScroll) {
      
//console.log(`3.1 hasNativeSmoothScroll: ${hasNativeSmoothScroll}, ${node.className}: ${topOrLeft}, direction: ${direction}`)
      
    return node.scrollTo({
      [direction ? 'left' : 'top']: topOrLeft,
      /* если direction = true, то move: 470px */
      behavior: 'smooth'
    })
  } else {
      
//console.log(`3.2 hasNativeSmoothScroll: ${hasNativeSmoothScroll}, ${node.className}: ${topOrLeft}, direction: ${direction}`)
      
    return smoothScrollPolyfill(node, direction ? 'scrollLeft' : 'scrollTop', topOrLeft)
  }
}


/* ----------------------- */
const easingOutQuint = (x, t, b, c, d) =>
  c * ((t = t / d - 1) * t * t * t * t + 1) + b

function smoothScrollPolyfill (node, key, target) {
  const startTime = Date.now()
  const offset = node[key]
  const gap = target - offset
  const duration = 1000
  let interrupt = false

  const step = () => {
    const elapsed = Date.now() - startTime
    const percentage = elapsed / duration

    if (interrupt) {
      return
    }

    if (percentage > 1) {
      cleanup()
      return
    }

    node[key] = easingOutQuint(0, elapsed, offset, gap, duration)
    requestAnimationFrame(step)
  }

  const cancel = () => {
    interrupt = true
    cleanup()
  }

  const cleanup = () => {
    node.removeEventListener('wheel', cancel)
    node.removeEventListener('touchstart', cancel)
  }

  node.addEventListener('wheel', cancel, { passive: true })
  node.addEventListener('touchstart', cancel, { passive: true })

  step()

  return cancel
}

/* ----------------------- */
function debounce(func, ms) {
	let timeout
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			timeout = null
      func()
		}, ms)
	}
}

gallery.addEventListener('scroll', debounce(() => {
  let index = Math.round((gallery.scrollLeft / gallery.scrollWidth) * 4)
  //setAriaPressed(index)
}, 200))

//setAriaLabels()