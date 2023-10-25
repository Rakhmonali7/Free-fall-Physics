'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const userInput = document.getElementById('userInput');
const buttn = document.getElementById('btn');
let countryName;

const renderCountry = function (data, neighbour = '') {
  const html = `
            <article class= 'country ${neighbour}'>
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} million</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
            </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (countryName) {
  // country 1

  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${countryName}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];

      //country 2

      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'neighbour not foud'
      ).then(data => renderCountry(data, 'neighbour'));
    })
    .catch(err =>
      renderError(`UPS something went wrong ${err.message}, Try Again!`)
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};

// buttn.addEventListener('click', function (e) {
//   e.preventDefault();
//   countryName = userInput.value;
//   getCountryData(countryName);
// });
btn.addEventListener('click', function () {
  getCountryData('australia');
});
