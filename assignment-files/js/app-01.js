
const color1 = "purple"
const color2 = "blue"

document.querySelector("button").style.backgroundColor = color1
document.querySelector(".text").style.display = "block"

const arrayOfBotones = [...document.querySelectorAll("button")]
const arrayOfTextos = [...document.querySelectorAll(".text")]

for ( let i = 0 ; i < arrayOfBotones.length ; i++ ) {
	arrayOfBotones[i].addEventListener("click", function(e) {
		for (let i = 0 ; i < arrayOfBotones.length ; i++ ) {
			if ( arrayOfBotones[i] === e.target ) {
				arrayOfBotones[i].style.backgroundColor = color1
				arrayOfTextos[i].style.display = "inline"
			} 
			else { 
				arrayOfBotones[i].style.backgroundColor = color2
				arrayOfTextos[i].style.display = "none"
			}
		}	
	})
}




