'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const userInput = document.getElementById('userInput');
const buttn = document.getElementById('btn');

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

// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryData = function (countryName) {
//   // country 1

//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${countryName}`,
//     'Country not found'
//   )
//     .then(data => {
//       console.log(data);
//       console.log(data[0]);
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders[0];

//       //country 2

//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         'neighbour not foud'
//       ).then(data => renderCountry(data, 'neighbour'));
//     })
//     .catch(err =>
//       renderError(`UPS something went wrong ${err.message}, Try Again!`)
//     )
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// // buttn.addEventListener('click', function (e) {
// //   e.preventDefault();
// //   countryName = userInput.value;
// //   getCountryData(countryName);
// // });
// btn.addEventListener('click', function () {
//   getCountryData('uzbekistan');
// });

/////////////////

// //////////////////// CODING CHALLENGE ///////////////////////////

///////////////
// CHALLENGE 2 PICTURE 2 DELAY SWAP
///////////
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImg = function (imgPath) {
//   return new Promise(function (resoleve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resoleve(img);
//     });
//     img.addEventListener('eror', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImg('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(`!!Error: ${err}`));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  //geting location
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // reverse geocoding

  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);
  // coumtry data

  const data = await fetch(
    `https://countries-api-836d.onrender.com/countries/name/${dataGeo.}`
  );
  const finData = await data.json();
  console.log('here');
  console.log(finData);
  renderCountry(finData[0]);
};

whereAmI();
console.log('first');
