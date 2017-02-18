//******************************
// GLOBAL VARIABLES
//******************************

// allow access to DOM
var clock = document.querySelector('.time_value')
var backgroundColor = document.querySelector('.container')
var progressBar = document.querySelector('.progress_bar')

// allow access to time in functions
var theHour = ''
var theMinute = ''
var theSecond = ''
var showHex = false // page state initially set to false

//******************************
// SET FUNCTIONS
//******************************
function timeVariables() {
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    theHour = hours
    theMinute = minutes
    theSecond = seconds
}

function mouseenterBigClock() {
    showHex = true // change page state
}

function mouseleaveBigClock() {
    showHex = false // change page state
}

function addEvents() {
    clock.addEventListener('mouseenter', mouseenterBigClock)
    clock.addEventListener('mouseleave', mouseleaveBigClock)
}

function setClockHTML() {
    if (showHex) {
        clock.innerHTML = getHexColor() // display hex values on big clock
    } else {
        clock.innerHTML = getTime() // display current time on big clock
    }
}

// prefixes single digit time numerals with a 0, returns time
function getTime() {
    if (theHour < 10) {
        theHour = '0' + theHour 
    }
    if (theMinute < 10) {
        theMinute = '0' + theMinute
    }
    if (theSecond < 10) {
        theSecond = '0' + theSecond
    }

    return theHour + ':' + theMinute + ':' + theSecond
}

// sets and returns background color based on hex value
function getHexColor() {
    var hexHours = (Math.floor(theHour / 24 * 255)).toString(16)
    var hexMinutes = (Math.floor(theMinute / 60 * 255)).toString(16)
    var hexSeconds = (Math.floor(theSecond / 60 * 255)).toString(16)
    var hexColor = '#' + hexHours + hexMinutes + hexSeconds

    backgroundColor.style.background = hexColor

    return hexColor
}

function setProgressBar() {
    progressBar.style.width = theSecond.toString() + '%'
}

//******************************
// CALL FUNCTIONS / SET INTERVAL
//******************************

setInterval(function() {
    timeVariables()
    addEvents()
    setClockHTML()
    getHexColor()
    setProgressBar()
}, 1000)