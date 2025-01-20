import { openingButtons } from ".";

//This module will display all of the opening content for the application

const enterButtonSelection = false;
const mainSection = document.querySelector('.mainSection');
const container = mainSection.querySelector('.container');

//Creating the introduction write up
function openingWriteUp () {
    const writeUpContainer = document.createElement('div');
    writeUpContainer.classList.add('writeUpContainer');
    const writeUp = document.createElement('h3');
    writeUp.classList.add('writeUp');
    writeUp.textContent = 'Track your calories in and out, and see how they add up! Our app calculates your potential weight change by the end of the week, making it easy to stay on top of your goals.'
    writeUpContainer.appendChild(writeUp);
    container.appendChild(writeUpContainer);
}

//Building the selection buttons
function selectionButtons(buttonOne, buttonTwo) {
    const openingButtonsContainer = document.createElement('div');
    openingButtonsContainer.classList.add('buttonsContainer');
    
    const firstButton = document.createElement('button');
    firstButton.classList.add(buttonOne + 'Button');
    firstButton.classList.add('openPageButtons');
    firstButton.textContent = buttonOne;
    openingButtonsContainer.appendChild(firstButton);

    const or = document.createElement('h1');
    or.textContent = 'OR';
    openingButtonsContainer.appendChild(or);

    const secondButton = document.createElement('button');
    secondButton.classList.add(buttonTwo + 'Button');
    secondButton.classList.add('openPageButtons');
    secondButton.textContent = buttonTwo;
    openingButtonsContainer.appendChild(secondButton);

    container.appendChild(openingButtonsContainer);
}

//Building the select Button
function enterButton() {
    const enterButtonContainer = document.createElement('div');
    enterButtonContainer.classList.add('enterButtonsContainer');

    const enterButton = document.createElement('button');
    enterButton.classList.add('enterButton');
    enterButton.classList.add('openPageButtons')
    enterButton.textContent = 'Select';

    enterButton.disabled = true;

    enterButtonContainer.appendChild(enterButton);

    container.appendChild(enterButtonContainer);
}

//Uses above functions and exports to the main code to make the opening page
export function openingPageContent() {
    openingWriteUp();
    selectionButtons('Pounds', 'Kilograms');
    selectionButtons('Calories',  'Kilojoules');
    enterButton();
}

//Creating the functionality of the buttons
export function selection() {
    let buttons = document.querySelectorAll('.openPageButtons');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            if(event.target.classList.contains('PoundsButton')) {
                openingButtons.poundsButton = true;
                openingButtons.kilogramButton = false;
                console.log(openingButtons);
            } else if (event.target.classList.contains('KilogramsButton')) {
                openingButtons.poundsButton = false;
                openingButtons.kilogramButton = true;
                console.log(openingButtons);
            } else if (event.target.classList.contains('CaloriesButton')) {
                openingButtons.caloriesButton = true;
                openingButtons.kilojoulesButton = false;
                console.log(openingButtons);
            } else if (event.target.classList.contains('KilojoulesButton')) {
                openingButtons.caloriesButton = false;
                openingButtons.kilojoulesButton = true;
                console.log(openingButtons);
            }
            if (event.target.classList.contains('enterButton')) {
                container.innerHTML = '';
            }
            changeButtonStatus();
        })
    })
}
//This function will disable the chosen options button.
function changeButtonStatus() {
    let poundsButton = document.querySelector('.PoundsButton');
    let kilogramsButton = document.querySelector('.KilogramsButton');
    let caloriesButton = document.querySelector('.CaloriesButton');
    let kilojoulesButton = document.querySelector('.KilojoulesButton');
    let selectButton = document.querySelector('.enterButton');
    let count = 0;

    if (openingButtons.poundsButton === true) {
        poundsButton.disabled = true;
        kilogramsButton.disabled = false;
        count++;
    } else if (openingButtons.kilogramButton === true) {
        poundsButton.disabled = false;
        kilogramsButton.disabled = true;
        count++;
    }
    if (openingButtons.caloriesButton === true) {
        caloriesButton.disabled = true;
        kilojoulesButton.disabled = false;
        count++;
    } else if (openingButtons.kilojoulesButton === true){
        caloriesButton.disabled = false;
        kilojoulesButton.disabled = true;
        count++;
    }
     
    //If 2 of the options are selected it will trigger a count of 2 resulting in the select button being activated.
    if (count === 2) {
        selectButton.disabled = false;
    }
}

