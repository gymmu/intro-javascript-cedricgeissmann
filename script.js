function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText() {
  console.log('This is some msg');  
}

function updateRange() {
  const rangeElem = document.querySelector("#range")
  const headerElement = document.querySelector("#range-target")

  const alpha = parseInt(rangeElem.value) / 100
  const red = parseInt(document.querySelector("#red").value) / 100 * 255
  const green = parseInt(document.querySelector("#green").value) / 100 * 255
  const blue = parseInt(document.querySelector("#blue").value) / 100 * 255

  headerElement.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}



function pickRandomColor() {
  // const colorList = ["red", "green", "blue"]
  // const randomIndex = Math.floor(Math.random()*colorList.length)
  // const randomColor = colorList[randomIndex];

  const red = Math.floor(Math.random() * 256 )
  const green = Math.floor(Math.random() * 256 )
  const blue = Math.floor(Math.random() * 256 )

  const bodyElem = document.querySelector("body")
  bodyElem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}


setInterval(pickRandomColor, 2000)









function r() { return Math.floor(Math.random() * 256 )}
function writeText() {
  const inputElem = document.querySelector("#input")
  const outputElem = document.querySelector("#output")

  const outValue = outputElem.textContent + "\n" + inputElem.value

  outputElem.textContent = outValue
}