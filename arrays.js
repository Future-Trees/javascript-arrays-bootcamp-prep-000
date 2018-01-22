var chocolateBars = [
  "snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(){
  var nextArray = [1]
  nextArray.push("foo")
  return nextArray
}  

function accessElementInArray(){
  var myArray=[1,2,3]
  return myArray[3]
}
