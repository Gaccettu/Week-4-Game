//Define each character and append images to the DOM
//Add data attributes from below to each character
var jon = $("<span>", {
    id: "JonS",
    class: "char",
});
jon.html("<img class='img' src='../Week-4-Game/assets/images/jon.jpg'></img>");
jon.attr("data-jon", jonstat);


var sam = $("<span>", {
    id: "SamT",
    class: "char",
});
sam.html("<img class='img' src='../Week-4-Game/assets/images/sam.jpg'></img>");
sam.attr("data-sam", samstat);


var hodor = $("<span>", {
    id: "hodorH",
    class: "char",
});
hodor.html("<img class='img' src='../Week-4-Game/assets/images/hodor.jpg'></img>");
hodor.attr("data-hodor", hodorstat);


var ramsay = $("<span>", {
    id: "ramsayB",
    class: "char",
});
ramsay.html("<img class='img' src='../Week-4-Game/assets/images/Ramsay.jpg'></img>");
ramsay.attr("data-ramsay", ramsaystat);


//Define each character variable as an object with stats
//Stats defined are HP, Attack, and Counter Attack

var jonstat = {
    name: "Jon Snow",
    hp: 80,
    attack: 12,
    counter: 30,
    chosen: false,
    defender: false,
}
var samstat = {
    name: "Samwell Tarley",
    hp: 125,
    attack: 6,
    counter: 22,
    chosen: false,
    defender: false,
}
var hodorstat = {
    name: "Hodor",
    hp: 200,
    attack: 1,
    counter: 8,
    chosen: false,
    defender: false,
}
var ramsaystat = {
    name: "Ramsay Bolton",
    hp: 100,
    attack: 8,
    counter: 35,
    chosen: false,
    defender: false,
}
//Append my attributes to each image
$("#startchar").append(jon);
$("#startchar").append(sam);
$("#startchar").append(hodor);
$("#startchar").append(ramsay);
$("#JonS").append("<p id = 'jonhp' class = 'hp'>" + jonstat.hp + "</p>");
$("#SamT").append("<p id = 'samhp' class = 'hp'>" + samstat.hp + "</p>");
$("#hodorH").append("<p id = 'hodorhp' class = 'hp'>" + hodorstat.hp + "</p>");
$("#ramsayB").append("<p id = 'ramsayhp' class = 'hp'>" + ramsaystat.hp + "</p>");
$("#JonS").append("<p id = 'jonhp' class = 'name'>" + jonstat.name + "</p>");
$("#SamT").append("<p id = 'samhp' class = 'name'>" + samstat.name + "</p>");
$("#hodorH").append("<p id = 'hodorhp' class = 'name'>" + hodorstat.name + "</p>");
$("#ramsayB").append("<p id = 'ramsayhp' class = 'name'>" + ramsaystat.name + "</p>");

$(".resetbut").on("click", function (){
    jonstat.hp = 80,
    jonstat.chosen = false,
    jonstat.defender = false,
    jonstat.attack = 12,    
    samstat.hp = 125,
    samstat.chosen = false,
    samstat.defender = false,
    samstat.attack = 6,
    hodorstat.hp = 200,
    hodorstat.chosen = false,
    hodorstat.defender = false,
    hodorstat.attack = 1,
    ramsaystat.hp = 100,
    ramsaystat.chosen = false,
    ramsaystat.defender = false,
    ramsaystat.attack = 8,
    $("#startchar").append(jon);
    $("#startchar").append(sam);
    $("#startchar").append(hodor);
    $("#startchar").append(ramsay);
    jon.removeClass("selChar enemyChar")
    sam.removeClass("selChar enemyChar")
    hodor.removeClass("selChar enemyChar")
    ramsay.removeClass("selChar enemyChar")
    $("#jonhp").html(jonstat.hp);
    $("#samhp").html(samstat.hp);
    $("#hodorhp").html(hodorstat.hp);
    $("#ramsayhp").html(ramsaystat.hp);
    $("#message").html("");
    $("#message1").html("");
    $(jon).show();
    $(sam).show();
    $(hodor).show();
    $(ramsay).show();
})

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
        $("#samhp").html(samstat.hp); 
        $("#message").html("You attacked for " + jonstat.attack + " damage");  
        jonstat.attack = jonstat.attack * 2;
        
            if(samstat.hp > 0){
                jonstat.hp = jonstat.hp - samstat.counter;
                $("#jonhp").html(jonstat.hp);
                $("#message1").html("You were attacked for " + samstat.counter + " damage");
                    if(jonstat.hp <= 0){
                        jonstat.hp = 0;
                        $("#jonhp").html(jonstat.hp);
                        alert("You Lose");
                    }
            }
            else if ((samstat.hp <= 0) && (hodorstat.hp <= 0) && (ramsaystat.hp <= 0)){
                alert("You Win");
            }
            else {
                samstat.defender = false;
                $(sam).hide();
                $("#message1").html("");
            }
    }
    else if((jonstat.chosen === true) && (hodorstat.defender === true)){
        hodorstat.hp = hodorstat.hp - jonstat.attack;
        $("#hodorhp").html(hodorstat.hp);
        $("#message").html("You attacked for " + jonstat.attack + " damage");
        jonstat.attack = jonstat.attack * 2;
            if(hodorstat.hp > 0){
                jonstat.hp = jonstat.hp - hodorstat.counter;
                $("#jonhp").html(jonstat.hp);
                $("#message1").html("You were attacked for " + hodorstat.counter + " damage");
                    if(jonstat.hp <= 0){
                        jonstat.hp = 0;
                        $("#jonhp").html(jonstat.hp);
                        alert("You Lose");
                }
            }
            else if ((samstat.hp <= 0) && (hodorstat.hp <= 0) && (ramsaystat.hp <= 0)){
                alert("You Win")
            }
            else {
                hodorstat.defender = false;
                $(hodor).hide();
                $("#message1").html("");
            }
    }
    else if((jonstat.chosen === true) && (ramsaystat.defender === true)){
        ramsaystat.hp = ramsaystat.hp - jonstat.attack;
        $("#ramsayhp").html(ramsaystat.hp);
        $("#message").html("You attacked for " + jonstat.attack + " damage");
        jonstat.attack = jonstat.attack * 2;
            if(ramsaystat.hp > 0){
                jonstat.hp = jonstat.hp - ramsaystat.counter;
                $("#jonhp").html(jonstat.hp);
                $("#message1").html("You were attacked for " + ramsaystat.counter + " damage");
                    if(jonstat.hp <= 0){
                        jonstat.hp = 0;
                        $("#jonhp").html(jonstat.hp);
                        alert("You Lose");
                    }
            }
            else if ((samstat.hp <= 0) && (hodorstat.hp <= 0) && (ramsaystat.hp <= 0)){
                alert("You Win")
            }
            else {
                ramsaystat.defender = false;
                $(ramsay).hide();
                $("#message1").html("");
            }    
    }
    else if((samstat.chosen === true) && (jonstat.defender === true)){
        jonstat.hp = jonstat.hp - samstat.attack;
        $("#jonhp").html(jonstat.hp);
        $("#message").html("You attacked for " + samstat.attack + " damage");
        samstat.attack = samstat.attack * 2;
            if(jonstat.hp > 0){
                samstat.hp = samstat.hp - jonstat.counter;
                $("#samhp").html(samstat.hp);
                $("#message1").html("You were attacked for " + jonstat.counter + " damage");
                    if(samstat.hp <= 0){
                        samstat.hp = 0;
                        $("#samhp").html(samstat.hp);
                        alert("You Lose");
                    }   
            }
            else if ((jonstat.hp <= 0) && (hodorstat.hp <= 0) && (ramsaystat.hp <= 0)){
                alert("You Win")
            }
            else {
                jonstat.defender = false;
                $(jon).hide();
                $("#message1").html("");
            }
    }
    else if((samstat.chosen === true) && (hodorstat.defender === true)){
        hodorstat.hp = hodorstat.hp - samstat.attack;
        $("#hodorhp").html(hodorstat.hp);
        $("#message").html("You attacked for " + samstat.attack + " damage");
        samstat.attack = samstat.attack * 2;
        if(hodorstat.hp > 0){
            samstat.hp = samstat.hp - hodorstat.counter;
            $("#samhp").html(samstat.hp);
            $("#message1").html("You were attacked for " + hodorstat.counter + " damage");
                if(samstat.hp <= 0){
                    samstat.hp = 0;
                    $("#samhp").html(samstat.hp);
                    alert("You Lose");
                } 
        }
        else if ((jonstat.hp <= 0) && (hodorstat.hp <= 0) && (ramsaystat.hp <= 0)){
            alert("You Win")
        }
        else {
            hodorstat.defender = false;
            $(hodor).hide();
            $("#message1").html("");
        }
    }
    else if((samstat.chosen === true) && (ramsaystat.defender === true)){
        ramsaystat.hp = ramsaystat.hp - samstat.attack;
        $("#ramsayhp").html(ramsaystat.hp);
        $("#message").html("You attacked for " + samstat.attack + " damage");
        samstat.attack = samstat.attack * 2;
            if(ramsaystat.hp > 0){
                samstat.hp = samstat.hp - ramsaystat.counter;
                $("#samhp").html(samstat.hp);
                $("#message1").html("You were attacked for " + ramsaystat.counter + " damage");
                if(samstat.hp <= 0){
                    samstat.hp = 0;
                    $("#samhp").html(samstat.hp);
                    alert("You Lose");
                } 
            }
            else if ((jonstat.hp <= 0) && (hodorstat.hp <= 0) && (ramsaystat.hp <= 0)){
                alert("You Win")
            }
            else {
                ramsaystat.defender = false;
                $(ramsay).hide();
                $("#message1").html("");
            }    
    }
    else if((hodorstat.chosen === true) && (jonstat.defender === true)){
        jonstat.hp = jonstat.hp - hodorstat.attack;
        $("#jonhp").html(jonstat.hp);
        $("#message").html("You attacked for " + hodorstat.attack + " damage");
        hodorstat.attack = hodorstat.attack * 2;
        if(jonstat.hp > 0){
            hodorstat.hp = hodorstat.hp - jonstat.counter;
            $("#hodorhp").html(hodorstat.hp);
            $("#message1").html("You were attacked for " + jonstat.counter + " damage");
            if(hodorstat.hp <= 0){
                hodorstat.hp = 0;
                $("#hodorhp").html(hodorstat.hp);
                alert("You Lose");
            } 
        }
        else if ((jonstat.hp <= 0) && (samstat.hp <= 0) && (ramsaystat.hp <= 0)){
            alert("You Win")
        }
        else {
            jonstat.defender = false;
            $(jon).hide();
            $("#message1").html("");
        }
    }
    else if((hodorstat.chosen === true) && (samstat.defender === true)){
        samstat.hp = samstat.hp - hodorstat.attack;
        $("#samhp").html(samstat.hp);
        $("#message").html("You attacked for " + hodorstat.attack + " damage");
        hodorstat.attack = hodorstat.attack * 2
        if(samstat.hp > 0){
            hodorstat.hp = hodorstat.hp - samstat.counter;
            $("#hodorhp").html(hodorstat.hp);
            $("#message1").html("You were attacked for " + samstat.counter + " damage");
            if(hodorstat.hp <= 0){
                hodorstat.hp = 0;
                $("#hodorhp").html(hodorstat.hp);
                alert("You Lose");
            }
        }
        else if ((jonstat.hp <= 0) && (samstat.hp <= 0) && (ramsaystat.hp <= 0)){
            alert("You Win")
        }
        else {
            samstat.defender = false;
            $(sam).hide();
            $("#message1").html("");
        }
    }
    else if((hodorstat.chosen === true) && (ramsaystat.defender === true)){
        ramsaystat.hp = ramsaystat.hp - hodorstat.attack;
        $("#ramsayhp").html(ramsaystat.hp);
        $("#message").html("You attacked for " + hodorstat.attack + " damage");
        hodorstat.attack = hodorstat.attack * 2;
            if(ramsaystat.hp > 0){
                hodorstat.hp = hodorstat.hp - ramsaystat.counter;
                $("#hodorhp").html(hodorstat.hp);
                $("#message1").html("You were attacked for " + ramsaystat.counter + " damage");
                if(hodorstat.hp <= 0){
                    hodorstat.hp = 0;
                    $("#hodorhp").html(hodorstat.hp);
                    alert("You Lose");
                }
            }
            else if ((jonstat.hp <= 0) && (samstat.hp <= 0) && (ramsaystat.hp <= 0)){
                alert("You Win")
            }
            else {
                ramsaystat.defender = false;
                $(ramsay).hide();
                $("#message1").html("");
            }    
    }
    else if((ramsaystat.chosen === true) && (jonstat.defender === true)){
        jonstat.hp = jonstat.hp - ramsaystat.attack;
        $("#jonhp").html(jonstat.hp);
        $("#message").html("You attacked for " + ramsaystat.attack + " damage");
        ramsaystat.attack = ramsaystat.attack * 2;
        if(jonstat.hp > 0){
            ramsaystat.hp = ramsaystat.hp - jonstat.counter;
            $("#ramsayhp").html(ramsaystat.hp);
            $("#message1").html("You were attacked for " + jonstat.counter + " damage");
            if(ramsaystat.hp <= 0){
                ramsaystat.hp = 0;
                $("#ramsayhp").html(ramsaystat.hp);
                alert("You Lose");
            }
        }
        else if ((jonstat.hp <= 0) && (samstat.hp <= 0) && (hodorstat.hp <= 0)){
            alert("You Win")
        }
        else {
            jonstat.defender = false;
            $(jon).hide();
            $("#message1").html("");
        }
    }
    else if((ramsaystat.chosen === true) && (samstat.defender === true)){
        samstat.hp = samstat.hp - ramsaystat.attack;
        $("#samhp").html(samstat.hp);
        $("#message").html("You attacked for " + ramsaystat.attack + " damage");
        ramsaystat.attack = ramsaystat.attack * 2;
            if(samstat.hp > 0){
                ramsaystat.hp = ramsaystat.hp - samstat.counter;
                $("#ramsayhp").html(ramsaystat.hp);
                $("#message1").html("You were attacked for " + samstat.counter + " damage");
                if(ramsaystat.hp <= 0){
                    ramsaystat.hp = 0;
                    $("#ramsayhp").html(ramsaystat.hp);
                    alert("You Lose");
                }
            }
            else if ((jonstat.hp <= 0) && (samstat.hp <= 0) && (hodorstat.hp <= 0)){
                alert("You Win")
            }
            else {
                samstat.defender = false;
                $(sam).hide();
                $("#message1").html("");
            }
    }
    else if((ramsaystat.chosen === true) && (hodorstat.defender === true)){
        hodorstat.hp = hodorstat.hp - ramsaystat.attack;
        $("#hodorhp").html(hodorstat.hp);
        $("#message").html("You attacked for " + ramsaystat.attack + " damage");
        ramsaystat.attack = ramsaystat.attack * 2;
        if(hodorstat.hp > 0){
            ramsaystat.hp = ramsaystat.hp - hodorstat.counter;
            $("#ramsayhp").html(ramsaystat.hp);
            $("#message1").html("You were attacked for " + hodorstat.counter + " damage");
            if(ramsaystat.hp <= 0){
                ramsaystat.hp = 0;
                $("#ramsayhp").html(ramsaystat.hp);
                alert("You Lose");
            }
        }
        else if ((jonstat.hp <= 0) && (samstat.hp <= 0) && (hodorstat.hp <= 0)){
            alert("You Win")
        }
        else {
            hodorstat.defender = false;
            $(hodor).hide();
            $("#message1").html("");
        }
    }
})

    //Repeat until one character's HP is empty
//Repeat actions until all enemies defeated or selected character dies