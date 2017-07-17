//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (owner) {
	this.status = "normal",
	this.color = "black"
	this.hungry = false
	this.owner = owner
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

var sadie = new Dog(mason)
var moonshine = new Dog(julia)
var atticus = new Dog()

moonshine.hungry = true

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (dog) {
	this.dog = null
	this.pet = function(dog){
		dog.status = "happy"
	}
	this.feed = function(dog){
		dog.hungry = false
	}
	this.cool = true
}

// Instances of Human
// Needed: mason, julia

var mason = new Human(sadie)
mason.cool = false


var julia = new Human(moonshine)
