let homeScore = 0;
let guestScore = 0;
let time = 0;
let period = 1;
let guestFoul = 0;
let homeFoul = 0;

function homeIncrement(point) {
    homeScore += parseInt(point);
    document.getElementById("home-score-el").textContent = homeScore;
}

function guestIncrement(point) {
    guestScore += parseInt(point);
    document.getElementById("guest-score-el").textContent = guestScore;
}

function newGame() {
    homeIncrement(-homeScore);
    guestIncrement(-guestScore);
    document.getElementById("timer").textContent = "00:00";
    document.getElementById("period-el").textContent = 1;
    period = 0;
    guestFoul = -1;
    homeFoul = -1;
    incrementHomeFouls();
    incrementGuestFouls();
}

function incrementTimer() {
    time += 1;
    let newTime = "";
    if (time > 12) {
        time = 0;
        incrementPeriod();
    } 
    if (time >= 10) {
        newTime += time + ":00";
    } else {
        newTime += "0" + time + ":00";
    }
    document.getElementById("timer").textContent = newTime;

}

function incrementPeriod() {
    if (period == 4) {
        newGame();
    }
    period++;
    document.getElementById("timer").textContent = "00:00";
    time = 0;
    document.getElementById("period-el").textContent = period;
}

function incrementHomeFouls() {
    homeFoul++;
    document.getElementById("foul-el-home").textContent = homeFoul;
}

function incrementGuestFouls() {
    guestFoul++;
    document.getElementById("foul-el-guest").textContent = guestFoul;
}