import './style.css'
import { DateTime } from 'luxon';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const form = document.querySelector('#age-form');
const dateInput = document.querySelector('#birthdate');
const resultText = document.querySelector('#result');

flatpickr(dateInput,{
  dateFormat: 'y-m-d',
  maxDate: "today"
})
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  
})