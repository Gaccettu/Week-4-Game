//Define each character and append images to the DOM
//Add data attributes from below to each character
var jon = $("<img>");
jon.attr("src", "../Week-4-Game/assets/images/jon.jpg");
jon.addClass("char");
jon.attr("data-jon", jonstat);
$("#jon").append(jon);
var sam = $("<img>");
sam.attr("src", "../Week-4-Game/assets/images/sam.jpg");
sam.addClass("char");
sam.attr("data-sam", samstat);
$("#sam").append(sam);
var hodor = $("<img>");
hodor.attr("src", "../Week-4-Game/assets/images/hodor.jpg");
hodor.addClass("char");
hodor.attr("data-hodor", hodorstat);
$("#hodor").append(hodor);
var ramsay = $("<img>");
ramsay.attr("src", "../Week-4-Game/assets/images/ramsay.jpg");
ramsay.addClass("char");
ramsay.attr("data-ramsay", ramsaystat);
$("#ramsay").append(ramsay);
//Define each character variable as an object with stats
//Stats defined are HP, Attack, and Counter Attack
var jonstat = {
    name: "Jon Snow",
    hp: 100,
    attack: 3,
    counter: 3,
    chosen: false,
    defender: false,
}
var samstat = {
    name: "Samwell Tarley",
    hp: 100,
    attack: 3,
    counter: 3,
    chosen: false,
    defender: false,
}
var hodorstat = {
    name: "Hodor",
    hp: 100,
    attack: 3,
    counter: 3,
    chosen: false,
    defender: false,
}
var ramsaystat = {
    name: "Ramsay Bolton",
    hp: 100,
    attack: 3,
    counter: 3,
    chosen: false,
    defender: false,
}
//Append my attributes to each image
//Create an onclick action that selects the character
//Move the other three characters to the enemies section
//Select an enemy character to fight
jon.on("click", function(){
    if((jonstat.chosen === false) && (samstat.chosen === false) && (hodorstat.chosen === false) && (ramsaystat.chosen === false)){
        jonstat.chosen = true;
        jon.addClass("selChar");
        sam.addClass("enemyChar");
        hodor.addClass("enemyChar");
        ramsay.addClass("enemyChar");
        $("#EnemyChoices").append(sam, hodor, ramsay);
    }
    else if(((samstat.chosen === true) || (hodorstat.chosen === true) || (ramsaystat.chosen === true)) && (samstat.defender === false) && (hodorstat.defender === false) && (ramsaystat.defender === false)){
        jonstat.defender = true;
        $("#DefenderArea").append(jon);
    }
})
sam.on("click", function(){
    if((jonstat.chosen === false) && (samstat.chosen === false) && (hodorstat.chosen === false) && (ramsaystat.chosen === false)){
        samstat.chosen= true;
        sam.addClass("selChar");
        jon.addClass("enemyChar");
        hodor.addClass("enemyChar");
        ramsay.addClass("enemyChar");
        $("#EnemyChoices").append(jon, hodor, ramsay);
    }
    else if(((jonstat.chosen === true) || (hodorstat.chosen === true) || (ramsaystat.chosen === true)) && (jonstat.defender === false) && (hodorstat.defender === false) && (ramsaystat.defender === false)){
        samstat.defender = true;
        $("#DefenderArea").append(sam);
    }
})
hodor.on("click", function(){
    if((jonstat.chosen === false) && (samstat.chosen === false) && (hodorstat.chosen === false) && (ramsaystat.chosen === false)){
        hodorstat.chosen= true;
        hodor.addClass("selChar");
        sam.addClass("enemyChar");
        jon.addClass("enemyChar");
        ramsay.addClass("enemyChar");
        $("#EnemyChoices").append(jon, sam, ramsay);
    }
    else if(((samstat.chosen === true) || (jonstat.chosen === true) || (ramsaystat.chosen === true)) && (samstat.defender === false) && (jonstat.defender === false) && (ramsaystat.defender === false)){
        hodorstat.defender = true;
        $("#DefenderArea").append(hodor);
    }
})
ramsay.on("click", function(){
    if((jonstat.chosen === false) && (samstat.chosen === false) && (hodorstat.chosen === false) && (ramsaystat.chosen === false)){
        ramsaystat.chosen= true;
        ramsay.addClass("selChar");
        sam.addClass("enemyChar");
        hodor.addClass("enemyChar");
        jon.addClass("enemyChar");
        $("#EnemyChoices").append(jon, sam, hodor);
    }
    else if(((samstat.chosen === true) || (hodorstat.chosen === true) || (jonstat.chosen === true)) && (samstat.defender === false) && (hodorstat.defender === false) && (jonstat.defender === false)){
        ramsaystat.defender = true;
        $("#DefenderArea").append(ramsay);
    }
})

//Click the attack button
    //Decrease HP of enemy character by attack strength
    //Decrease HP of chosen character by enemy counter attack strength
    //Increase Attack of chosen character
$(".button").on("click", function(){
    if((jonstat.chosen === true) && (samstat.defender === true)){
        samstat.hp = samstat.hp - jonstat.attack;    
        jonstat.attack = jonstat.attack * 2;
            if(samstat.hp > 0){
                jonstat.hp = jonstat.hp - samstat.counter;
            }
            else {
                samstat.defender = false;
                $(sam).hide();
            }
    }
    else if((jonstat.chosen === true) && (hodorstat.defender === true)){
        hodorstat.hp = hodorstat.hp - jonstat.attack;
        jonstat.attack = jonstat.attack * 2;
            if(hodorstat.hp > 0){
                jonstat.hp = jonstat.hp - hodorstat.counter;
            }
            else {
                hodorstat.defender = false;
                $(hodor).hide();
            }
    }
    else if((jonstat.chosen === true) && (ramsaystat.defender === true)){
        ramsaystat.hp = ramsaystat.hp - jonstat.attack;
        jonstat.attack = jonstat.attack * 2;
            if(ramsaystat.hp > 0){
                jonstat.hp = jonstat.hp - ramsay.counter;
            }
            else {
                ramsaystat.defender = false;
                $(ramsay).hide();
            }    
    }
    else if((samstat.chosen === true) && (jonstat.defender === true)){
        jonstat.hp = jonstat.hp - samstat.attack;
        samstat.attack = samstat.attack * 2;
            if(jonstat.hp > 0){
                samstat.hp = samstat.hp - jonstat.counter;
            }
            else {
                jonstat.defender = false;
                $(jon).hide();
            }
    }
    else if((samstat.chosen === true) && (hodorstat.defender === true)){
        hodorstat.hp = hodorstat.hp - samstat.attack;
        samstat.attack = samstat.attack * 2;
        if(hodorstat.hp > 0){
            samstat.hp = samstat.hp - hodorstat.counter;
        }
        else {
            hodorstat.defender = false;
            $(hodor).hide();
        }
    }
    else if((samstat.chosen === true) && (ramsaystat.defender === true)){
        ramsaystat.hp = ramsaystat.hp - samstat.attack;
        samstat.attack = samstat.attack * 2;
            if(ramsaystat.hp > 0){
                samstat.hp = samstat.hp - ramsaystat.counter;
            }
            else {
                ramsaystat.defender = false;
                $(ramsay).hide();
            }    
    }
    else if((hodorstat.chosen === true) && (jonstat.defender === true)){
        jonstat.hp = jonstat.hp - hodorstat.attack;
        hodorstat.attack = hodorstat.attack * 2;
        if(jonstat.hp > 0){
            hodorstat.hp = hodorstat.hp - jonstat.counter;
        }
        else {
            jonstat.defender = false;
            $(jon).hide();
        }
    }
    else if((hodorstat.chosen === true) && (samstat.defender === true)){
        samstat.hp = samstat.hp - hodorstat.attack;
        hodorstat.attack = hodorstat.attack * 2
        if(samstat.hp > 0){
            hodorstat.hp = hodorstat.hp - samstat.counter;
        }
        else {
            samstat.defender = false;
            $(sam).hide();
        }
    }
    else if((hodorstat.chosen === true) && (ramsaystat.defender === true)){
        ramsaystat.hp = ramsaystat.hp - hodorstat.attack;
        hodorstat.attack = hodorstat.attack * 2;
            if(ramsaystat.hp > 0){
                hodorstat.hp = hodorstat.hp - ramsaystat.counter;
            }
            else {
                ramsaystat.defender = false;
                $(ramsay).hide();
            }    
    }
    else if((ramsaystat.chosen === true) && (jonstat.defender === true)){
        jonstat.hp = jonstat.hp - ramsaystat.attack;
        ramsaystat.attack = ramsaystat.attack * 2;
        if(jonstat.hp > 0){
            ramsaystat.hp = ramsaystat.hp - jonstat.counter;
        }
        else {
            jonstat.defender = false;
            $(jon).hide();
        }
    }
    else if((ramsaystat.chosen === true) && (samstat.defender === true)){
        samstat.hp = samstat.hp - ramsaystat.attack;
        ramsaystat.attack = ramsaystat.attack * 2;
            if(samstat.hp > 0){
                ramsaystat.hp = ramsaystat.hp - samstat.counter;
            }
            else {
                samstat.defender = false;
                $(sam).hide();
            }
    }
    else if((ramsaystat.chosen === true) && (hodorstat.defender === true)){
        hodorstat.hp = hodorstat.hp - ramsaystat.attack;
        ramsaystat.attack = ramsaystat.attack * 2;
        if(hodorstat.hp > 0){
            ramsaystat.hp = ramsaystat.hp - hodorstat.counter;
        }
        else {
            hodorstat.defender = false;
            $(hodor).hide();
        }
    }
})
    //Repeat until one character's HP is empty
//Repeat actions until all enemies defeated or selected character dies