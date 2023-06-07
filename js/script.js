
import {countNormalCalories, age, height, weight} from './values.js';

const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const inputElements = document.querySelectorAll('.input__wrapper');
const counterResult = document.querySelector('.counter__result');

const getResult = () => {
  
  inputElements.forEach(function(elem) {
    elem.addEventListener('change', function() {
        if (age.value > 0 || height.value > 0 || weight.value > 0) {
            resetButton.disabled = false;
        } else {
            resetButton.disabled = true;
        };
        if ((age.value > 0) && (height.value > 0) && (weight.value > 0)) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
  });

  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    countNormalCalories();
    counterResult.classList.remove('counter__result--hidden');
  });

  resetButton.addEventListener('click', () => {
    counterResult.classList.add('counter__result--hidden');
    document.getElementById('gender-male').checked = true;
    document.getElementById('activity-minimal').checked = true;
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    resetButton.disabled = true;
    submitButton.disabled = true;
  });

};

export {getResult};
