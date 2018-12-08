// prompt box that says Hello World!

// alert("Hello World!")
// prompt("How are you doing?")


// prompt box that says Hello World!

// console.log("Hello World!")
// alert(hello)

var hd = document.getElementById("heading")
hd.innerHTML = "Woohoo! I'm changing this heading now"

var numberOfWidgets = 20

var price = document.getElementById("price")
var btn = document.getElementById("button")
var total = document.getElementById("Total")
var qty = document.getElementById("qty")

	btn.onclick = function() {
		console.log(price.innerHTML)
		console.log(qty.value)
		Total.innerHTML = qty.value * price.innerHTML
	}