//This page will work out how much weight the user will lose gain based on the info inputed.
//It will also handle displaying the results

import { openingButtons, energyBurnt, energyConsumed } from ".";

export let isWeightLost = false;

export function resultEquation() {
    let weightChange = 0;

    //firstly if the user selected KJ, convert it to calories and then do all of the equations using calories
    if (openingButtons.kilojoulesButton === true) {
        energyBurnt.total = Math.floor(energyBurnt.total / 4.184);
        energyConsumed.total = Math.floor(energyConsumed.total / 4.184);
    }

    //work out what the deficit is 
    let difference = energyConsumed.total - energyBurnt.total;
    console.log(difference);
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
        console.log(`You lost ${weightChange} Kilograms`);
        } else if (isWeightLost === false) {
            console.log(`You gained ${weightChange} Kilograms`);
        } else {
            console.log('Your weight did not change');
            return null;
        }
    } else if (openingButtons.poundsButton === true) { //pounds selection
            weightChange = Math.round((difference / 3500) * 100) / 100;
            if (isWeightLost === true) {
                weightChange = weightChange * -1;
                console.log(`You lost ${weightChange} Pounds`);
            } else if (isWeightLost === false) {
                console.log(`You gained ${weightChange} Pounds`);
            } else {
                console.log('Your weight did not change');
                return null;
            }
    }
    return weightChange;
}