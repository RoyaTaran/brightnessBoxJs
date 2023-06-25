const inputRangeElem = document.getElementById('range')
const brightnessBoxElem = document.querySelector('.container')



inputRangeElem.addEventListener('change',function(event){
  let rangeValue = event.target.value
  brightnessBoxElem.style.filter = 'brightness('+rangeValue+'%)'
   console.log(rangeValue)
})