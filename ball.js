
let cursor = [0,0];
let cursorDown = false;
let timer;

function setUp()
{
    console.log("SETTING UP");
    let ball = document.getElementById("ball");
    ball.onmousedown = function(){listenForClick()};
    document.onmouseup = function(){listenForNoClick()};
    document.onmousemove = function(event){trackMouse(event)};
    timer = setInterval(function()
    {
        // check for cursor position if cursorDown is true
        if(cursorDown)
        {
            console.log("Clicking.....");
            /*
                Start basic, have ball move to location of cursor. Change its css.
            */
           ball.style.left = cursor[0] + "px";
           ball.style.top = cursor[1]  + "px";
        }
    }, 50)
}

function trackMouse(e)
{
    cursor[0] = e.clientX;
    cursor[1] = e.clientY;
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