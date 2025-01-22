import { openingButtons } from ".";

const container = document.querySelector('.container');
let calOrKil = '';

//This module will contain everything for the page where the user inputs there calories/kilojoules burnt

//This area will help display the energy burnt display
export function displayEnergyBurntPage (){
    if (openingButtons.caloriesButton === true) {
        calOrKil = 'Calories';
    } else {
        calOrKil = 'Kilojoules';
    }
    writeUp();
    createForm(calOrKil);
}

function writeUp () {
    const writeUpContainer = document.createElement('div');
    writeUpContainer.classList.add('energyBurntWriteUp');

    const writeUp = document.createElement('h3');
    writeUp.classList.add('energyBurntWriteUp');
    writeUp.textContent = 'To help us calculate your weekly weight changes, we need to know how many calories you burn each day from Monday through Friday. Simply enter the estimated number of calories you burn for each day.'

    writeUpContainer.appendChild(writeUp);
    container.appendChild(writeUpContainer);
}

function createForm (metric) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('energyBurntFormContainer');

    const form = document.createElement('form');
    form.id = 'energyBurntForm';

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    daysOfWeek.forEach(day => {
        const holder = document.createElement('div');
        holder.classList.add(`energyBurnt${day}Holder`);

        const label = document.createElement('label');
        label.for = day.toLowerCase();
        label.textContent = `${day}:`;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = day.toLowerCase();
        input.name = day.toLowerCase();
        input.placeholder = `${metric} burnt`;
        input.required = true;

        holder.appendChild(label);
        holder.appendChild(input);
        form.appendChild(holder);
    })
    const buttonHolder = document.createElement('div');
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
    buttonHolder.appendChild(button);
    form.appendChild(buttonHolder);

    formContainer.appendChild(form);
    container.appendChild(formContainer);
}



