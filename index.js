let homePoints               = 0
let guestPoints              = 0
let timeLimitMiliSekunder    = 7200000

let homeID   = "home"
let guestID  = "guest"
let tellerID = "teller"

let homeTellerHtml   = document.getElementById(homeID)
let guestTellerHtml  = document.getElementById(guestID)
let tellerhtml       = document.getElementsByClassName(tellerID)
let timerHtml        = document.getElementById("timer")

let hours = Math.floor((timeLimitMiliSekunder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeLimitMiliSekunder % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeLimitMiliSekunder % (1000 * 60)) / 1000);
console.log(hours, minutes, seconds)

function tellNedTimer()
{
    hours = Math.floor((timeLimitMiliSekunder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLimitMiliSekunder % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLimitMiliSekunder % (1000 * 60)) / 1000); 
    
    timerHtml.textContent = hours + ":"
  + minutes + ":" + seconds;

    timeLimitMiliSekunder -= 1000
    
    console.log(timeLimitMiliSekunder)
}

setInterval(tellNedTimer, 1000)

function finnLeder()
{
    if(homePoints > guestPoints)
    {
        tellerhtml[0].style.color = "gold"
        tellerhtml[0].style.borderColor = "gold"
        
        tellerhtml[1].style.color = "#F94F6D"
        tellerhtml[1].style.borderColor = "black"
    }else if(guestPoints > homePoints)
    {
        tellerhtml[1].style.color = "gold"
        tellerhtml[1].style.borderColor = "gold"
        
        tellerhtml[0].style.color = "#F94F6D"
        tellerhtml[0].style.borderColor = "black"
    }
}


function poengKnapp(points = 1, tellerID)
{
    if(tellerID === homeID)
    {
        homePoints = homePoints + points
        document.getElementById(tellerID).textContent = homePoints
        
    }else if(tellerID === guestID)
    {
        guestPoints = guestPoints +points
        document.getElementById(tellerID).textContent = guestPoints
        
    } else
    {
        console.log("Error: Finner ikkje tellerID")
    }
    finnLeder()
}

function newGame()
{
    homePoints = 0
    guestPoints = 0
    
    homeTellerHtml.textContent = homePoints
    guestTellerHtml.textContent = guestPoints
    timerHtml.textContent = "0:0:0"
    timeLimitMiliSekunder = 7200000
    
    tellerhtml[0].style.color = "#F94F6D"
    tellerhtml[0].style.borderColor = "black"
    tellerhtml[1].style.color = "#F94F6D"
    tellerhtml[1].style.borderColor = "black"
}
