var compArray = [];
var userArray= [];
var level = 0;

start();

function start() {
    $("body").on("keypress", function () {
        level = 0;
        compArray = [];
        colorFade();
    })
}

    $(".btn").on("click", function () {
        var thisItem = this;
        $(thisItem).addClass("pressed");
        setTimeout(() => {
            $(thisItem).removeClass("pressed");
        }, 210);

        var aud = new Audio("./sounds/" + thisItem.id + ".mp3");
        aud.play();
       userArray.push(thisItem.id);
       checkUserInput(userArray.length-1);
    });



function colorFade() {
    level++;
    userArray = [];
    $("#level-title").text("Level "+level);
    var color = ["green", "red", "yellow", "blue"];
    var randomNo = Math.floor(Math.random() * 4);
    $("#" + color[randomNo]).fadeOut(150).fadeIn(150);
    compArray.push(color[randomNo]);
    console.log(compArray);
}


