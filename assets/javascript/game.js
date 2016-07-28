var umbreon;
var doubleblade;
var gastly;
var reshiram;
var characters;
var chosenEnemies;
var defender;
var baseAttack;
var defendersAlive;


function initializeGame(){
    umbreon = {
    id: 0,
    name: 'umbreon',
    hp: 150,
    attack: 10
};

doubleblade = {
    id: 1,
    name: 'doubleblade',
    hp: 125,
    attack: 10
};

gastly = {
    id: 2,
    name: 'gastly',
    hp: 80,
    attack: 10
};

reshiram = {
    id: 3,
    name: 'reshiram',
    hp: 115,
    attack: 15
};

defendersAlive = 3;
characters = [umbreon, doubleblade, gastly, reshiram];
chosenEnemies = [];
currentCharacter = undefined;
defender = undefined;
baseAttack = undefined;

$("#init-shown > div").fadeIn("slow");
$("#init-hidden > div").fadeOut("slow");
$("#characterHealth").text("Character Health: 0");
$("#enemyHealth").text("Enemy Health: 0");
}

initializeGame();
			
// Player chooses his character and hides the remaing 3 which become enemies
function characterClicked(characterIndex) {
    for (var i = 0; i < 4; i++) {
        if (characterIndex != i) {
            $("#player" + i).fadeOut("slow");
        }
    }

    currentCharacter = characters[characterIndex];
    $("#characterHealth").html("Character Health: " + currentCharacter.hp);
    unhideCharacters(characterIndex);
    baseAttack = currentCharacter.attack; // This sets the current attack for my character
}

//Here we are unhiding the chracters that were not clciked in Choose Your Charatcer 
function unhideCharacters(characterIndex) {
    for (var i = 0; i < 4; i++) {
        if (characterIndex != i) {
            $("#enemies" + i).fadeIn("slow");
        }
    }
}


//Here a Defender is chosen and moved to the Defender DIV and the remaining are hidden in the PATA DIV. 
function enemyClicked(characterIndex) {

    if (!defender) {
        for (var i = 0; i < 4; i++) {
            if (characterIndex == i) {
                $("#defender" + i).fadeIn("slow");
                $("#enemies" + characterIndex).fadeOut("slow");
                defender = characters[characterIndex];
                    $("#enemyHealth").text("Enemy Health: " + defender.hp);
	
            }
        }

    }

}

//This is to make the attack button work
$("#attackbtn").click(function(){
	if (defender !== undefined){
	attack();
}
    else {
        alert("PLEASE CHOOSE A DEFENDER");
    }
})

//Add a fucntion to the button where I attack first with given attack value and then have the defender 
//attack with his attack value.

function attack() {
	currentCharacter.hp -= defender.attack;
	//console.log(currentCharacter.hp);
    defender.hp -= currentCharacter.attack;
	//console.log(defender.hp);
    currentCharacter.attack += baseAttack;

	$("#enemyHealth").text("Enemy Health: " + defender.hp);
    $("#characterHealth").text("Character Health: " + currentCharacter.hp);
    //console.log(currentCharacter.attack);
    //Add function if enemy goes below 0.



    if (currentCharacter.hp <= 0){
		alert("YOU LOSE-GAME OVER!");
        initializeGame();
	} 
    else if(defender.hp <= 0){
	   $("#defender" + defender.id).fadeOut("slow");
       $("#enemyHealth").text("Enemy Health: 0");
       defendersAlive --;
       defender = undefined;
   }

   if(defendersAlive == 0){
        alert("YOU WIN!!!!!");
        initializeGame();
    }
}








	// This will take my character and subtract my attack power from defneders hp. 
	// Then defender will do the same to me until one of us reaches <= 0 HP.
	// If i die the game ends 
	// If defender dies I will chose the next enemy and fight him with my same hp until one
	// of us dies. if I die game is over if he dies i will fight th next defender if any. 
	// Keeping track of who is alive who is dead and my hp and my attach goes up by some amount.
	// If I win Alert you win if i lose alert GAME OVER. 
	// Set a reset or play again fucntion or button. 
	// check each time we hit attack if i am at 0 or if defender is at 0. 

    // class Character {
    //          "peter" 25 10
    // constructor(name, hp, attack) {
    //      this.name = name;
    //      this.hp = hp;
    //      this.attack = attack;
    //  }   
    // }

    // var c1 = new Character("peter", 25, 10);

    // console.log(c1.name); //peter



    // function someFunction(characterIndex) {
    //  //characterindex = 3
    //  for (var ; i < )

    // }

    /*psuedo code _______________________________________________
    //Have 4 characters in the initial div where they are clickable for player to chose 1 character.
    //once the player chooses his chratcer it stays in the CYC div and the remaing 3 become enemies and move to EATA
    //*/