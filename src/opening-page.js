//This module will display all of the opening content for the application
//All the buttons will start out as false and trigger when clicked.
export const openingButtons = {
    poundsButton: false,
    kilogramButton: false,
    caloriesButton: false,
    kilojoulesButton: false,
    enterButton: false
};

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

function selectionButtons(buttonOne, buttonTwo) {
    const openingButtonsContainer = document.createElement('div');
    openingButtonsContainer.classList.add('ButtonsContainer');
    
    const firstButton = document.createElement('button');
    firstButton.classList.add(buttonOne + 'Button');
    firstButton.textContent = buttonOne;
    openingButtonsContainer.appendChild(firstButton);

    const secondButton = document.createElement('button');
    secondButton.classList.add(buttonTwo + 'Button');
    secondButton.textContent = buttonTwo;
    openingButtonsContainer.appendChild(secondButton);

    container.appendChild(openingButtonsContainer);
}

function enterButton() {
    const enterButtonContainer = document.createElement('div');
    enterButtonContainer.classList.add('enterButtonsContainer');

    const enterButton = document.createElement('button');
    enterButton.classList.add('enterButton');
    enterButton.textContent = 'Select';

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