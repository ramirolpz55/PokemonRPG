var umbreon = {
    name: 'umbreon',
    hp: Math.floor((Math.random() * 100) + 1),
    attack: 10,
};

var doubleblade = {
    name: 'doubleblade',
    hp: Math.floor((Math.random() * 100) + 1),
    attack: 20
};

var gastly = {
    name: 'gastly',
    hp: Math.floor((Math.random() * 100) + 1),
    attack: 25
};

var reshiram = {
    name: 'reshiram',
    hp: Math.floor((Math.random() * 100) + 1),
    attack: 15
};

var characters = [umbreon, doubleblade, gastly, reshiram];
var chosenEnemies = [];
var currentCharacter;
var defender;
var baseAttack;

// Player chooses his character and hides the remaing 3 which become enemies
function characterClicked(characterIndex) {
    for (var i = 0; i < 4; i++) {
        if (characterIndex != i) {
            $("#player" + i).hide();
        }
    }

    currentCharacter = characters[characterIndex];
    $("#characterHealth").html("Character Health: " + currentCharacter.hp);
    unhideCharacters(characterIndex);
    baseAttack = currentCharacter.attack; // This sets the current attack for my character
}

//Here we are unhdiing the chracters that were not clciked in Choose Your Charatcer 
function unhideCharacters(characterIndex) {
    for (var i = 0; i < 4; i++) {
        if (characterIndex != i) {
            $("#enemies" + i).show();
        }
    }
}


//Here a Defender is chosen and moved to the Defender DIV and the remaing are hidden in the EATA DIV. 
function enemyClicked(characterIndex) {

    if (!defender) {
        for (var i = 0; i < 4; i++) {
            if (characterIndex == i) {
                $("#defender" + i).show();
                $("#enemies" + characterIndex).hide();
                defender = characters[characterIndex];
                    $("#enemyHealth").html("Enemy Health: " + defender.hp);
	
            }
        }

    }

}


//This is to make the attack button work
$("#attackbtn").click(function(){
	if (defender !== undefined){
	attack();
	}
	
})

//Add a fucntion to the button where I attack first with given attack value and then have the defender 
//attack with his attack value.

function attack() {
	currentCharacter.hp -= defender.attack;
	// console.log(currentCharacter.hp);
	defender.hp -= currentCharacter.attack;
	// console.log(defender.hp);
	currentCharacter.attack += baseAttack;
	// console.log(currentCharacter.attack);
	// Put if enemy goes below zero here.














	//This will take my character and subtract my attack power from defneders hp. 
	//Then defender will do the same to me until one of us reaches <= 0 HP.
	//If i die the game ends 
	//If defender dies I will chose the next enemy and fight him with my same hp until one
	//of us dies. if I die game is over if he dies i will fight th next defender if any. 
	//Keeping track of who is alive who is dead and my hp and my attach goes up by some amount.
	// If I win Alert you win if i lose alert GAME OVER. 

	//Set a reset or play again fucntion or button. 

	//check each time we hit attack if i am at 0 or if defender is at 0. 
}












// class Character {
// 	//			"peter" 25 10
// 	constructor(name, hp, attack) {
// 		this.name = name;
// 		this.hp = hp;
// 		this.attack = attack;
// 	}	
// }

// var c1 = new Character("peter", 25, 10);

// console.log(c1.name); //peter



// function someFunction(characterIndex) {
// 	//characterindex = 3
// 	for (var ; i < )

// }

/*psuedo code _______________________________________________
//Have 4 characters in the initial div where they are clickable for player to chose 1 character.
//once the player chooses his chratcer it stays in the CYC div and the remaing 3 become enemies and move to EATA
//*/
