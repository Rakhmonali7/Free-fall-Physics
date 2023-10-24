'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
<<<<<<< HEAD
const userInput = document.getElementById('userInput')
const buttn = document.getElementById('btn')
let countryName

// ///////////////////////////////////////   with user interface
// function getCountryData(countryName){
// const request = new XMLHttpRequest()
// request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${countryName}`)
// request.send()

//     request.addEventListener('load', function(){
//         const [data]= JSON.parse(this.responseText)
//         console.log(data);

//         countriesContainer.innerHTML = '';

//         const html = `
=======
const userInput = document.getElementById('userInput');
const buttn = document.getElementById('btn');
let countryName;

///////////////////////////////////////
// function getCountryData(countryName) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${countryName}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     countriesContainer.innerHTML = '';

//     const html = `
>>>>>>> 6f8e763 (chaining)
//             <article class="country">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
<<<<<<< HEAD
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//               </div>
//             </article>
//         `
//         countriesContainer.insertAdjacentHTML('beforeend', html)
//         countriesContainer.style.opacity = 1;
//     })

// }
// buttn.addEventListener('click', function(e){
//     e.preventDefault()
//     countryName = userInput.value
//     getCountryData(countryName)
// })


// ///////////////////////////////////////////////
//2222222222222222222222222222222222222222222222222222222
 

// function getCountryAndNeighbour(name) {
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${name}`)

//   request.send()

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText)
//     const neighbour = data.borders ?. [0]

//     //render country1

//     renderCountry(data)

//     //AJAX call country 2

//     const request2 = new XMLHttpRequest()
//     request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
//     request2.send()

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText)
//       renderCountry(data2, 'neighbour')
//     })
//   })
// }
// getCountryAndNeighbour('usa')
const renderCountry = function(data, namecl=''){
  const html = `
             <article class="country ${namecl}" >
               <img class="country__img" src="${data.flag}" />
               <div class="country__data">
                 <h3 class="country__name">${data.name}</h3>
                 <h4 class="country__region">${data.region}</h4>
                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
               </div>
             </article>
         `
         countriesContainer.insertAdjacentHTML('beforeend', html)
         countriesContainer.style.opacity = 1;
     }

//////////////3333333333333333333333333333//////////////


const getCountryData = function(country){
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
  .then(function (response) {
   return response.json()
  }).then(function(data){
      renderCountry(data[0])
      const neighbour = data[0] ?. borders[0]
      return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
      
      }).then((back)=> back.json())
      .then(function(data){
        renderCountry(data, 'neighbour')
  })
}
getCountryData('portugal')
=======
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} million</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//               </div>
//             </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// const renderCountry = function (data) {
//   const html = `
//             <article class="country">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} million</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//               </div>
//             </article>
//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   //
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => response.json())
//     .then(function (data) {
//       const [newData] = data;
//       renderCountry(newData);
//       fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     });
// };
// getCountryData('portugal');

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
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (countryName) {
  // country 1

  fetch(`https://countries-api-836d.onrender.com/countries/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];

      //country 2

      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      )
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'));
    });
};
<<<<<<< HEAD
getCountryData('portugal');
>>>>>>> 6f8e763 (chaining)
=======

buttn.addEventListener('click', function (e) {
  e.preventDefault();
  countryName = userInput.value;
  getCountryData(countryName);
});
>>>>>>> 9282d20 (chaini part2)
