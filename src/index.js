import _ from 'lodash';
import './style.css';
import { openingPageContent, selection } from './opening-page';

export const openingButtons = {
    poundsButton: false,
    kilogramButton: false,
    caloriesButton: false,
    kilojoulesButton: false,
};



//In opening page
//Will produce the content for the first page
openingPageContent();

//Event listeners etc for button pushes on opening page
selection();

