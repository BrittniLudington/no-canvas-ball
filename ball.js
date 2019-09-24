
let cursor = [0,0];
let cursorDown = false;

function setUp()
{
    console.log("SETTING UP");
    let ball = document.getElementById("ball");
    ball.onmousedown = function(){listenForClick()};
    ball.onmouseup = function(){listenForNoClick()};
}

function listenForClick()
{
    console.log("CLICK");
    cursorDown = true;
}

function listenForNoClick()
{
    console.log("NO CLICK");
    cursorDown = false;
}

setUp();