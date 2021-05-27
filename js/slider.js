const slider = document.querySelector('.slider') //Get Slider
var actualSlide = 0 //A var used to set margin for slider
const imgsCounter = slider.childElementCount //Get childs from slider
const radioCont = document.querySelector('.radio-container') //Get div with inputs

//Function that create an input
function createRadioElement(name, checked) {//Create radio Elem
  var radioHtml = '<input type="radio" name="' + name + '"' //Start input
  if (checked) { //If checked true set checked
    radioHtml += ' checked="checked"'
  }
  radioHtml += '/>'//Finish radio tag

  var radioFragment = document.createElement('div')
  radioFragment.innerHTML = radioHtml

  return radioFragment.firstChild
}

for (let i = 0; i < imgsCounter; i++) { //Create Radio
  radioCont.appendChild(
    createRadioElement('sliderImage', i === 0 ? true : false /*if first set checked*/)//Render Radio
  )
}

const radios = document.getElementsByName('sliderImage') //Get inputs

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('click', () => {//Add click listener for each radio
    actualSlide = getCheckedElem() //Set actual slide to currentyl radio
    slider.style.marginLeft = -actualSlide * 100 + '%' //Set margin
  })
}

function getCheckedElem() { //Return checked input number
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return i
    }
  }
}

function checkElem(id) { //Check radio
  radios[id].checked = true
}

//Change slider margin
function slide(dir) {
  actualSlide += dir
  if (actualSlide < 0) { //Check if its first slide
    actualSlide = imgsCounter - 1 //Set actualSlide to last one
  }
  if (actualSlide > imgsCounter - 1) { //Check if last slide
    actualSlide = 0 //Set first Slide
  }
  slider.style.marginLeft = -actualSlide * 100 + '%'
  checkElem(actualSlide)
}
