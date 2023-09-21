'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const userInput = document.getElementById('userInput')
const buttn = document.getElementById('btn')
let countryName 

///////////////////////////////////////
function getCountryData(countryName){
const request = new XMLHttpRequest()
request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${countryName}`)
request.send()

    request.addEventListener('load', function(){
        const [data]= JSON.parse(this.responseText)
        console.log(data);

        countriesContainer.innerHTML = '';

        const html = `
            <article class="country">
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
    })
    
}
buttn.addEventListener('click', function(e){
    e.preventDefault()
    countryName = userInput.value
    getCountryData(countryName)
})


