function renderCountryMore(country) {
  return country
    .map(
      ({ flags, name }) =>
        `<li class="county-search"><img src="${flags.svg}" class="flag"><p>${name.common}</p></li>`
    )
    .join('');
}

function renderCountryOne(country) {
  return country
    .map(
      ({ flags, name, capital, population, languages }) =>
        `<div class="country-oneflag"<li class=""><img src="${
          flags.svg
        }" class="flag"><p>${
          name.common
        }</p></div><div class="country-one"><p><span class="span">Capital:</span>${capital}</p><p><span class="span">Population:</span>${population}</p><p><span class="span">Languages:</span>${Object.values(
          languages
        )}</p></div></li>`
    )
    .join('');
}

export { renderCountryMore, renderCountryOne };
