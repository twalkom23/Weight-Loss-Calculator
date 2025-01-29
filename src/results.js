//This page will work out how much weight the user will lose gain based on the info inputed.
//It will also handle displaying the results

import { openingButtons, energyBurnt, energyConsumed } from ".";

export let isWeightLost = false;

const container = document.querySelector('.container');

let difference = 0;  //The difference between calories/Kilojoules
let weightLostOrGained = 0; //How much weight was gained or lost during the week
let isWeightLostOrGained = '';
let caloriesOrKilojoules = ''; //Whether the user selected calories or kilojoules
let poundsOrKilograms = ''; //Whether the user selected pounds or kilograms
let monthDifference = 0; //How much weight the user would gain or lose in a month
let quarterDifference = 0; //How much weight the user would gain or lose in a quarter
let sixMonthDifference = 0; //How much weight the user would gain or lose in 6 months
let yearDifference = 0;  //How much weight the user would gain or lose in 12 months


function resultEquation() {
    let weightChange = 0;
    let caloriesBurnt = 0;
    let caloriesConsumed = 0;

    //firstly if the user selected KJ, convert it to calories and then do all of the equations using calories
    if (openingButtons.kilojoulesButton === true) {
        caloriesBurnt = Math.floor(energyBurnt.total / 4.184);
        caloriesConsumed = Math.floor(energyConsumed.total / 4.184);
    }

    caloriesBurnt = energyBurnt.total;
    caloriesConsumed = energyConsumed.total;

    //work out what the deficit is 
    let difference = caloriesConsumed - caloriesBurnt;
    if (difference < 0) {
        isWeightLost = true;
    } else if (difference === 0) {
        isWeightLost = null;
    }
    
    //Work out how many kgs or pounds the user lost or gained
    if (openingButtons.kilogramButton === true) { //kgs selection
        weightChange = Math.round((difference / 7700) * 100) /100; //Rounds to 2 decimals
        if (isWeightLost === true) {
            weightChange = weightChange * -1;
        } else if (isWeightLost === false) {
            
        } else {
            return null;
        }
    } else if (openingButtons.poundsButton === true) { //pounds selection
            weightChange = Math.round((difference / 3500) * 100) / 100;
            if (isWeightLost === true) {
                weightChange = weightChange * -1;
              
            } else if (isWeightLost === false) {
              
            } else {
           
                return null;
            }
    }
    return weightChange;
}

//This function will save everything to the variables needed to display the results on the screen
function createVariables() {
    
    difference = energyConsumed.total - energyBurnt.total;
    if (difference < 0) {
        difference = difference * -1;
    }

    weightLostOrGained = resultEquation();

    if(isWeightLost === true) {
        isWeightLostOrGained = 'Lost';
    } else {
        isWeightLostOrGained = 'Gained';
    }

    if (openingButtons.caloriesButton === true){
        caloriesOrKilojoules = 'Calories';
    } else {
        caloriesOrKilojoules = 'Kilojoules'
    }

    if (openingButtons.poundsButton === true ) {
        poundsOrKilograms = 'Pounds';
    } else {
        poundsOrKilograms = 'Kilograms'
    }

    monthDifference = Math.round((weightLostOrGained * 52) /12);

    quarterDifference = Math.round(monthDifference * 3);

    sixMonthDifference = Math.round(quarterDifference * 2);

    yearDifference = Math.round(sixMonthDifference * 2);

}



export function displayResults() {
    createVariables();
     resultWriteUp();
     weeklyResult();
     otherTimes();

   
    
}

function resultWriteUp() {
    //Initial write up
    const writeUpContainer = document.createElement('div');
    const writeUp = document.createElement('h1');
    writeUpContainer.classList.add('resultWriteUpContainer');
    writeUp.classList.add('resultsWriteUp');
    writeUp.textContent = 'After adding up all of your results we have been able to work out how much weight you will gain or lose.';
    writeUpContainer.appendChild(writeUp);
    container.appendChild(writeUpContainer);
}

function weeklyResult() {
    let deficitOrSurplusWord = '';
    if (isWeightLost === true) {
        deficitOrSurplusWord = 'deficit';
    } else {
        deficitOrSurplusWord = 'surplus'
    }
    const weeklyResultContainer = document.createElement('div');
    weeklyResultContainer.classList.add('weeklyResultContainer');
    //deficit or surplus
    const defOrSurp = document.createElement('p');
    defOrSurp.classList.add('defOrSurp');
    defOrSurp.textContent = `You had a ${deficitOrSurplusWord} of ${difference} ${caloriesOrKilojoules}`;
    weeklyResultContainer.appendChild(defOrSurp);

    //weight lost or gained over week
    const weeklyLostOrGained = document.createElement('p');
    weeklyLostOrGained.classList.add('weeklyLostOrGained');
    weeklyLostOrGained.textContent = `Which means over the week you ${isWeightLostOrGained} ${weightLostOrGained} ${poundsOrKilograms}`;
    weeklyResultContainer.appendChild(weeklyLostOrGained);

    container.appendChild(weeklyResultContainer);
}

function otherTimes() {
    const otherTimes = document.createElement('div');
    otherTimes.classList.add('otherTimes');

    //Quick info
    const writeUp = document.createElement('h3');
    writeUp.textContent = 'This is what would happen if you kept this up: ';
    otherTimes.appendChild(writeUp);

    //1 month
    const month = document.createElement('p');
    month.textContent = `1 Month: ${isWeightLostOrGained} ${monthDifference} ${poundsOrKilograms}`;
    otherTimes.appendChild(month);

    //Quarter
    const quarter = document.createElement('p');
    quarter.textContent = `1 Quarter: ${isWeightLostOrGained} ${quarterDifference} ${poundsOrKilograms}`;
    otherTimes.appendChild(quarter);

    //6 months
    const sixMonths = document.createElement('p');
    sixMonths.textContent = `6 Months: ${isWeightLostOrGained} ${sixMonthDifference} ${poundsOrKilograms}`;
    otherTimes.appendChild(sixMonths);

    //Quarter
    const year = document.createElement('p');
    year.textContent = `1 Year: ${isWeightLostOrGained} ${yearDifference} ${poundsOrKilograms}`;
    otherTimes.appendChild(year);


    container.appendChild(otherTimes);
}