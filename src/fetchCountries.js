const BASE_URL = 'https://restcountries.com/v3.1/';
function fetchCountries(name) {
  return fetch(
    `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages `
  ).then(r => {
    if (!r.ok) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return r.json();
  });
}

export { fetchCountries };
