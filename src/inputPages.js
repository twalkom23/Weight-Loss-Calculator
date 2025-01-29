import { openingButtons, energyBurnt, energyConsumed } from ".";
import { displayResults } from "./results";

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
    writeUp('energyBurnt');
    createForm(calOrKil, 'energyBurnt');
}
//This will display the energy consumed page using the functions below
function displayEnergConsumedPage() {
    if (openingButtons.caloriesButton === true) {
        calOrKil = 'Calories';
    } else {
        calOrKil = 'Kilojoules';
    }
    writeUp('energyConsumed');
    createForm(calOrKil, 'energyConsumed');
}

function writeUp (burntOrConsumed) {
    const writeUpContainer = document.createElement('div');
    writeUpContainer.classList.add(`${burntOrConsumed}WriteUp`);

    const writeUp = document.createElement('h3');
    writeUp.classList.add(`${burntOrConsumed}WriteUp`);

    if (burntOrConsumed === 'energyBurnt'){
    writeUp.textContent = 'To help us calculate your weekly weight changes, we need to know how many calories or Kilojoules you burn each day from Monday through Friday. Simply enter the estimated number of calories or Kilojoules you burn for each day.'
    } else {
        writeUp.textContent = 'Simply input the calories or Kilojoules you have consumed each day into the form provided. Don’t worry if you’re unsure about the exact number—just do your best to estimate accurately based on your meals, snacks, and beverages.'
    }

    writeUpContainer.appendChild(writeUp);
    container.appendChild(writeUpContainer);
}

function createForm (metric, burntOrConsumed) {
    const formContainer = document.createElement('div');
    formContainer.classList.add(`${burntOrConsumed}FormContainer`);

    const form = document.createElement('form');
    form.id = `${burntOrConsumed}Form`;

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    daysOfWeek.forEach(day => {
        const holder = document.createElement('div');
        holder.classList.add(`${burntOrConsumed}${day}Holder`);

        const label = document.createElement('label');
        label.for = day.toLowerCase();
        label.textContent = `${day}:`;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = day.toLowerCase();
        input.name = day.toLowerCase();
        if (burntOrConsumed === 'energyBurnt') {
        input.placeholder = `${metric} burnt`;
        } else {
            input.placeholder = `${metric} consumed`;
        }
        input.required = true;

        holder.appendChild(label);
        holder.appendChild(input);
        form.appendChild(holder);
    })
    const buttonHolder = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('calBurntButton');
    button.type = 'submit';
    button.textContent = 'Submit';
    buttonHolder.appendChild(button);
    form.appendChild(buttonHolder);

    formContainer.appendChild(form);
    container.appendChild(formContainer);
}

export function handleForm (){
    document.addEventListener('submit', (event) => {
        if (event.target && event.target.id === 'energyBurntForm') {
            event.preventDefault();
            //The below will save all the numbers to the variables in the object declared in index.js
            energyBurnt.monday = document.getElementById('monday').value;
            energyBurnt.tuesday = document.getElementById('tuesday').value;
            energyBurnt.wednesday = document.getElementById('wednesday').value;
            energyBurnt.thursday = document.getElementById('thursday').value;
            energyBurnt.friday = document.getElementById('friday').value;
            energyBurnt.saturday = document.getElementById('saturday').value;
            energyBurnt.sunday = document.getElementById('sunday').value;
            energyBurnt.total = (Number(energyBurnt.monday) + Number(energyBurnt.tuesday) + Number(energyBurnt.wednesday) + Number(energyBurnt.thursday) + Number(energyBurnt.friday) + Number(energyBurnt.saturday) + Number(energyBurnt.sunday));


            //Clear the screen to get ready for the next page
            container.innerHTML = '';
            displayEnergConsumedPage();
        } else if (event.target && event.target.id === 'energyConsumedForm') {
            event.preventDefault();
            //The below will save all the numbers to the variables in the object declared in index.js
            energyConsumed.monday = document.getElementById('monday').value;
            energyConsumed.tuesday = document.getElementById('tuesday').value;
            energyConsumed.wednesday = document.getElementById('wednesday').value;
            energyConsumed.thursday = document.getElementById('thursday').value;
            energyConsumed.friday = document.getElementById('friday').value;
            energyConsumed.saturday = document.getElementById('saturday').value;
            energyConsumed.sunday = document.getElementById('sunday').value;
            energyConsumed.total = (Number(energyConsumed.monday) + Number(energyConsumed.tuesday) + Number(energyConsumed.wednesday) + Number(energyConsumed.thursday) + Number(energyConsumed.friday) + Number(energyConsumed.saturday) + Number(energyConsumed.sunday));
            
            container.innerHTML = '';
            displayResults();
        }

    })
}

