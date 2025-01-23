import _ from 'lodash';
import './style.css';
import { openingPageContent, selection } from './opening-page';
import { handleEnergyBurntForm } from './energy-burnt';

export const openingButtons = {
    poundsButton: false,
    kilogramButton: false,
    caloriesButton: false,
    kilojoulesButton: false,
};

export const energyBurnt = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0, 
    sunday: 0,
    total: 0
}


export const energyConsumed = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
    total: 0
}


//In opening page
//Will produce the content for the first page
openingPageContent();

//Event listeners etc for button pushes on opening page
selection();



//The second page which takes in the energy burnt input.
handleEnergyBurntForm();