import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { renderCountryMore, renderCountryOne } from './render';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.target.value = `${e.target.value}`.trim();
  if (e.target.value === '') {
    return (refs.countryList.innerHTML = '');
  }

  fetchCountries(`${e.target.value}`)
    .then(r => renderCountry(r))
    .catch(onError);
}

function renderCountry(country) {
  if (country.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (country.length > 2 || country.length <= 10) {
    refs.countryList.innerHTML = renderCountryMore(country);
  }
  if (country.length === 1) {
    refs.countryList.innerHTML = renderCountryOne(country);
  }
}

function onError(error) {
  refs.countryList.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

fetchCountries('sw').then(r => console.log(r));
