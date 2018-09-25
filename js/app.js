console.log("Test");

/********************************REQUIREMENTS*********************************/

// Create a repo for your tomagotchi pet
//CHECK
// make a commit after you finish each one of the following

// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi

// Display a character of your choice on the screen to represent your pet
//CHECK
// Display the following metrics for your pet:

// Hunger (1-10 scale)

// Sleepiness (1-10 scale)

// Boredom (1-10 scale)

// Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages.

// Animate your pet across the screen while it's alive.

// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!




/********************************* USER STORIES ***************************

1. User clicks start game button
	a. Tamgagotchi is generated with properties of hunger, sleepiness, boredom, age, name, gender, birthday. His birthday is logged. Stats are printed. Tamagotchi is a baby. 
	b. 






***************************************************************************/

//Suggestions for self, maybe start with one property to ensure a single function works. Once I get that I can implement on the same principles. Maybe age since it's a single increment, then hunger. Start with the simplest function. Then perhaps tiredness, reacts to being asleep or awake. Keep track of date time, that can be a multiplier by whatever it is that causes tama to get more tired. Adjust independently of each other, but all hinge on difference in time between previous set interval and current. 

/******************************BEGIN**********************************/

//First step: Create Tamagotchi class. 
//properties: 
//1. Hunger out of 10<--- feed
//2. Sleepiness out of 10 <--- turn off lights
//3. Boredom out of 10 <--- play with pet
//4. Age <--- set timer to age pet, tie age to dateTime()? age is diffence between current time and time reigstered
//5. Name
//6. gender, math.random
//7. Birthday, log based on click
// //8. Awake state <-- when awake his tiredness goes up, asleep, his tiredness goes down. Start awake, click lightsOut();

// class Tamagotchi {
// 	constructor(hunger, sleepiness, boredom, age, name, gender, birthday) {
// 		this.
// 	}
// 	//hunger, 0, sleepiness, 0, boredom, 0, age, 0, name = this.name;
	


//}
//have an event attached to a DOM, and inside that function, access the game object

class Tomagotchi {
	constructor(hunger, sleepiness, boredom, age, name, gender, birthday) {
		this.name = name;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.gender = genderRandom();
		this.birthday = //take something from start button, setTime/setDate
	}
	stuffHappens() {
		this.hunger += this.hunger;
		this.sleepiness += this.sleepiness;
		this.boredom += this.boredom;
		this.age += this.age;

	}
	isDead(hunger, sleepiness, boredom, age) {
		if (this.hunger < 10 || this.sleepiness < 10 || ) {
			console.log("Tamagotchi died");
			//Figure out what to do here based on console log
		} 
		return false;
	genderRandom() {
		const genderCheck = ["male", "female"];
		let pickedGender = "";
		pickedGender = genderCheck[Math.floor(Math.random())]
	}
	};
const game = { 
	const generateTamagotchi() {
		const tamaName;//input;
		const gender = ;
		const tamagotchi = new Tamagotchi(tamaName, this.hunger, this.sleepiness, this.boredom, )
	}
//this.tamagotchi = this.generateTamagotchi();

//printStates(hunger, boredom, sleepiness, age)
////tamagotchigameloop() 
//ageTamagotchi()
//playWithTamagotchi()
//exerciseWithTamagotchi()
//lightsOut();
//feedSnack();
//feedMeal();




	



const intervalController = () => {

	// let interval = setInterval(tamagotchiPointIncrease(),10 * 60 * 1000);  
	const 
	let interval = setInterval(() => {
		// code in ere will repeat
		// increase age
		nameOfTama.stuffHappens()
	}, 1000);  

};




	//Things that happen constantly, hunger, sleepiness, boredom, age. 
	//}
//}
//call all functions from within here!
//tamagotchigameloop() {


//}; 

//set one interval, and have that function call the time, consider it an update function, however many frames per second, one instance of a set interval. 

// in interval
	// hunger up
	// age up
	// sleepiness up
	// 


//Click the button, global register i++ to the variables. When it reaches the interval, it looks for buttons clicked and then does the actions. IT would be a delay ti put it in the loop but there'd be enough updates per milisecond. 

//interactions with on.('click' ())
//1. Feed
//2. Lights (off)
//3. Play with Tamagotchi
	//a. Exercise reduce points by 2? Or random int
	//b. Play with toys reduce points by 1? Or random int
//Feed button, click it, feed button clicked, reduces its hunger by Int.  


//When it's queried everything gets reset to false. Set all of them to false. Only set to true if you click the appropriate button
//4. Wake up if feed click, else if play, else if exercise, else if lights on, else {continue state}
//5. lightsOn();

//Other interactions:

//Rename tamagotchi, button click, outside gameplay

//FUNCTIONS:

//generateTamogatchi() { 
	//const tamagotchi = new Tamagotchi(const name = on.click prompt?)
	//

//return tamagotchi;
//}
//playWithTamagotchi(tamogatchi); Target is tamogatchi...
//


// is dead will tell me if the tama has died yet, call and check every second. 



};
/********************************LISTENERS*********************************/




/********************************QUESTIONS/NOTES*********************************/

//Questions/notes would transitioning the tamagotchi from child to adult involve running a function? That function changing the image as well as updating properties? 
//Make sure iterations of points are based on minutes not looping interaction. GAME LOOP can't include functions for aging, playing/exercising, sleeping! Can only call a variable that has the stored information!


//Code snippets needed:


//CALL THE GAME
//on.click start button


