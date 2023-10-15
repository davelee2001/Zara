// Game Variables
let gameTime = 25 * 60 * 1000; // 25 minutes in milliseconds
let strategyUnits = 100;
let activities = {
    activity1: 5,
    // ... add other activities here
};
let criteria = {
    criteria1: 0,
    criteria2: 0,
    criteria3: 0,
    criteria4: 0,
    criteria5: 0,
};

// Invest in an activity
function investInActivity(activityName, unitsInvested) {
    if (strategyUnits < unitsInvested) {
        alert("Not enough strategy units!");
        return;
    }

    strategyUnits -= unitsInvested;

    let successRate = 1;
    if (unitsInvested < 10) {
        successRate = unitsInvested / 10;
    }

    if (Math.random() <= successRate) {
        let criteriaNumber = activityName.match(/\d+/)[0];
        criteria[`criteria${criteriaNumber}`] += unitsInvested;
    }

    updateUI();
}

// Calculate final score
function calculateFinalScore() {
    return 0.1 * criteria.criteria1 + 0.2 * criteria.criteria2 + 0.3 * criteria.criteria3 + 0.4 * criteria.criteria4 + 0.5 * criteria.criteria5;
}

// Special event at 10 minutes
setTimeout(function () {
    if (criteria.criteria3 < 10) {
        strategyUnits = Math.max(0, strategyUnits - 10);
    }
    alert("The world has changed, companies with a score in criteria 3 less than 10 will lose 10 units!");
}, 10 * 60 * 1000);

// End game and display score
setTimeout(function () {
    alert("Game Over! Your final score is: " + calculateFinalScore());
}, gameTime);

// Update the UI after investing in an activity
function updateUI() {
    document.getElementById('units').textContent = strategyUnits;
    document.getElementById('criteria1').textContent = criteria.criteria1;
    document.getElementById('criteria2').textContent = criteria.criteria2;
    document.getElementById('criteria3').textContent = criteria.criteria3;
    document.getElementById('criteria4').textContent = criteria.criteria4;
    document.getElementById('criteria5').textContent = criteria.criteria5;
}
