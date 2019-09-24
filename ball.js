
let cursor = [0,0];
let cursorDown = false;
let timer;
let relativeDistance = [0,0];

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
            /*
                Keep ball relative to cursor. 
            */
           ball.style.left = (cursor[0] + relativeDistance[0]) + "px";
           ball.style.top = (cursor[1] + relativeDistance[1])  + "px";
        }
    }, 25)
}

function trackMouse(e)
{
    cursor[0] = e.clientX;
    cursor[1] = e.clientY;
}

function listenForClick()
{
    if(!cursorDown)
    {
        cursorDown = true;
        let ballCorner = document.getElementById("ball").getBoundingClientRect();  
        relativeDistance[0] = ballCorner.x - cursor[0];
        relativeDistance[1] = ballCorner.y - cursor[1];  
    }

}

function listenForNoClick()
{
    cursorDown = false;
}

setUp();