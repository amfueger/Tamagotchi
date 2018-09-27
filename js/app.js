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
        if (this.age === 3) {
            this.igglytoJiggly();
        }
        if (this.age === 6) {
            this.jigglytoWiggly();
        }
    }
    stuffHappens() {
        this.hunger = this.hunger++;
        this.sleepiness = this.sleepiness++;
        this.boredom = this.boredom++;
        this.age = this.age++;
        console.log(this.hunger + "check stuffHappens hunger");      
    }
    isTooOld() {
        if (this.age > 10) {
            return true;
        }
        return false;
    }
    isDead() {
    	console.log(this.hunger);
        if (this.hunger > 10 || this.sleepiness > 10 || this.boredom > 10) {

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
        $('.displayImage').attr('src', "css/img/JigglyPuff.gif");
    }
    jigglytoWiggly() {
        $('.displayImage').attr('src', "css/img/wigglytuff.gif");
    }
    igglyBuff() {
        $('.displayImage').attr('src', "css/img/Igglybuff.gif");
    }
}




const game = {
    tamagotchi: null,


    generateTamagotchi(name, birthday, count) {

        const $nameInput = $('#name-input').val();
        console.log($nameInput);
        this.tamagotchi = new Tamagotchi($nameInput);
        console.log(game.tamagotchi.hunger + "checking hunger after making tamagotchi");
 		//let hunger = game.tamagotchi.hunger;
		//let sleepiness = game.tamagotchi.sleepiness;
		// let boredom = game.tamagotchi.boredom;
		// let age = game.tamagotchi.age;
        const $text = $('#text');
        $text.show(); //.velocity('transition.FadeIn', 200);

        $getName = $('#getName');
        $getName.hide();


        setTimeout(() => {
            $('.gameButtons').show();
            $text.hide(); //.velocity('transition.FadeOut', 200);
        }, 1000);
        this.startTimer();


    },
    printStats() {
        $('#text').text("hunger: " + this.tamagotchi.hunger + " sleepiness: " + this.tamagotchi.sleepiness + " boredom: " + this.tamagotchi.boredom);
        $('#text').css({"font-family": "'Press Start 2P', cursive" , "display": "inline-block", "text-align": "center" , "width": "200px" , "color": "DeepPink"});
        $('#text').show();


    },

    playWithTamagotchi() {
        game.tamagotchi.boredom = game.tamagotchi.boredom -2;
        console.log(game.tomagotchi.boredom + "checking playWithFunction");
    },
    lightsOff() {
       
        game.tamagotchi.sleepiness = game.tamagotchi.sleepiness - 2;
        
    },
    feedMeal() {
        game.tamagotchi.hunger = game.tamagotchi.hunger - 2;
        console.log(game.tomagotchi.hunger + "checking feedMeal");
    },
    showGameOverText() {
        if (game.tamagotchi.isDead() == true) {
            $('#text').append('<p>You killed your Pokemon!! Try again next time</p>');
        }
        if (game.tamagotchi.isTooOld() == true) {
            $('#text').append('<p>Your Pokemon made it to ten years old! Good job!</p>');
        }


    },
    startTimer() {
        let count = 0;
        let interval = setInterval(function() {
            game.tamagotchi.stuffHappens();
            //something is missing with an argument here. 
            console.log(game.tamagotchi.hunger + " check hunger after using stuffHappens function");
            game.printStats();
            count++;
            if (game.tamagotchi.isDead() == true) {
                game.showGameOverText();
            } else if (game.tamagotchi.isTooOld() == true) {
                game.showGameOverText();
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
    game.feedMeal();
    console.log(feedMeal());
});
$('#play').on('click', () => {
    game.playWithTamagotchi();
    console.log(feedMeal());
});

$('#doneButton').on('click', () => {
    game.generateTamagotchi();
});