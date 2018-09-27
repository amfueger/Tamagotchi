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
	a. Tamgagotchi is generated with properties of hunger, sleepiness, boredom, age, name, gender, birthday. His birthday is logged. Stats are printed. 
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

class Tamagotchi {
    constructor(name) {
        	this.name = name,
            this.hunger = 0,
            this.sleepiness = 0,
            this.boredom = 0,
            this.age = 0,
            this.gender = this.genderRandom(),
            this.birthday = this.makeBirthday()
    }
    changeLifeCycle() {
		if(this.age === 3) {
        	this.igglytoJiggly()
        } 
        if (this.age === 6) {
        	this.jigglytoWiggly()
        } 
   }
    stuffHappens() {
    	// double all the values
        this.hunger = this.hunger++;
        this.sleepiness = this.sleepiness++;
        this.boredom = this.boredom++;
        this.age = this.age++;

        // change life cycle

    }
    isTooOld(){
    	if(this.age > 10){
        	console.log("Tamagotchi died of old age.");
        	return true;
        }
        return false;
    }
    isDead() {
        if (this.hunger > 10 || this.sleepiness > 10 || this.boredom > 10) {
            console.log("Tamagotchi died of criminal negligence.");
            //Figure out what to do here based on console log
            return true;
        }
        
        return false;
    }
    makeBirthday() {
    	const dt = new Date();
        const birthday = dt.toUTCString();
        return birthday;
    }
    genderRandom() {
        const genderCheck = ["male", "female"];
        let pickedGender = Math.floor(Math.random() * genderCheck.length);
    }
    igglyToJiggly() {
    	$('.displayImage').attr('src', "css/img/JigglyPuff.piskel");
    }
    jigglytoWiggly() {
    	$('.displayImage').attr('src', "css/img/Igglybuff.piskel");
    }
    igglyBuff() {
    	$('.displayImage').attr('src', "css/img/Igglybuff.piskel");
    }
};




const game = {
    tamagotchi: null,
    //Note that if this doesn't work to make the tamagotchi live outside the function when it's created, find other solution to ensure it does. 
    generateTamagotchi(name, birthday, count) {
  		// Get name from input

        const $nameInput = $('#name-input').val();
        console.log("HEY");
        console.log($nameInput);
        console.log("HEY");

        // 6. (AFTER MVP -- get timestamp)
        
       	

        // 7. create tamagotchi here (until mvp, hard code birthday)
		// 8. put tamagotchi you created in this.tomagotchi
        this.tamagotchi = new Tamagotchi($nameInput);
        const $text = $('#text');

        $text.show()//.velocity('transition.FadeIn', 200);

        $getName = $('#getName')
    	console.log($('#getName'));
        $('#getName').hide()
   		// .hide form again()

        setTimeout(() => {
            $('.gameButtons').show();
            $text.hide()//.velocity('transition.FadeOut', 200);
        }, 1000)
        

        // 9. start timer
        this.startTimer();
      	
      	// this.tamagotchi.igglyBuff()

    },
    printStats: function(hunger, sleepiness, boredom, age) {
        console.log("test printStats");
        $('.gameText').text("" + this.tamagotchi.hunger)
    },
  
    playWithTamagotchi(boredom) {
        this.tamagotchi.boredom -= this.tamagotchi.boredom;
    },
    lightsOff(sleepiness) {
        // let $sleepiness = $('.sleep')
        this.tamagotchi.sleepiness = this.tamagotchi.sleepiness - 2;

        //link the sleepy time to a delayed animation
    },
    feedMeal(hunger) {
        this.tamagotchi.hunger = this.tamagotchi.hunger - 2;
    },
    showGameOverText(){

    }
    startTimer() {
        //concerns, this looks like one interval total. Make sure to call interval in another loop elsewhere
        let count = 0;
        let interval = setInterval(function() {
            game.tamagotchi.stuffHappens();
            count++;
            if(game.tamagotchi.isDead()){
            	game.showGameOverText("You fucking suck!");
            }else if(game.tamagotchi.isTooOld()){
            	game.showGameOverText("Too goddamn old!");
            }
        }, 1000);
        
    },

    start() {
        //show input
        $('#getName').show();
        //hide the start button
        $('#start').hide();
    }


};




/********************************LISTENERS*********************************/
// hidden buttons at page load
$('.gameButtons').hide();
$('#getName').hide();
$('#text').hide();



//listen for game start

$('#start').on('click', game.start);

$('#sleep').on('click', () => {
	game.lightsOff();
});
$('#hungry').on('click', () => {
	game.playWithTamagotchi();
});

$('#play').on('click', () => {
	game.feedMeal();
});

// 3. add a listener for the done button
$('#doneButton').on('click', () => {
	game.generateTamagotchi();
});

// 4. test the listener for the done button

// 5. make done button call getName -- see 5 above


//listen for name entry


/********************************QUESTIONS/NOTES*********************************/

//Questions/notes would transitioning the tamagotchi from child to adult involve running a function? That function changing the image as well as updating properties? 
//Make sure iterations of points are based on minutes not looping interaction. GAME LOOP can't include functions for aging, playing/exercising, sleeping! Can only call a variable that has the stored information!


//Code snippets needed:


//CALL THE GAME
//on.click start button