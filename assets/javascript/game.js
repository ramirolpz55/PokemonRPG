var umbreon;
var doubleblade;
var gastly;
var reshiram;
var characters;
var chosenEnemies;
var defender;
var baseAttack;
var defendersAlive;


function initializeGame() {
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
$("#attackbtn").click(function() {
    if (defender !== undefined) {
        attack();
    } else {
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



    if (currentCharacter.hp <= 0) {
        alert("YOU LOSE-GAME OVER!");
        initializeGame();
    } else if (defender.hp <= 0) {
        $("#defender" + defender.id).fadeOut("slow");
        $("#enemyHealth").text("Enemy Health: 0");
        defendersAlive--;
        defender = undefined;
    }

    if (defendersAlive == 0) {
        alert("YOU WIN!!!!!");
        initializeGame();
    }
}
