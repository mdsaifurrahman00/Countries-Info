const countriesDiv = document.getElementById("country-wrapper");
const countriesDetails = document.getElementById("country-details");

fetch("https://restcountries.com/v3.1/all")
.then ((response) => response.json())
.then ((data) => displayData (data));

const displayData = (data) => {
     const countriesDiv = document.getElementById("country-wrapper");
     countriesDiv.innerHTML += ` ` ;

     for (i = 0; i < data.length; i++) {
          countriesDiv.innerHTML += `
          <div class="country-card">
          <div class="country-flag">
               <img src="${data[i].flags.svg}" alt="">
          </div>
     <div class="country-info">
          <h2 class="country-name">${data[i].name.common.slice(0, 20)}</h2>
          <h5 class="capital">Capital : ${data[i].capital}</h5>
          <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#centeredModal" onclick="showData()">See More</button>

     </div>
     </div>`
     }
     
}

const showData = () => {
     const url = `https://restcountries.com/v3.1/all`;
     fetch(url)
     .then ((response) => response.json())
     .then ((data) => countryDetails (data));
}
const countryDetails = (data) => {
     countriesDetails.innerHTML = `
          <button id="close-btn" onclick="closeWindow()">
               <i class="fa-solid fa-x"></i>
          </button>
               <h3 class="name">${data.name.common}</h3>
               <p class="region">Region : ${data.region}</p>
               <p class="currency">Currency : ${data.currencies[0].symbol} ${details.currencies[0].name}</p>
               <p class="population">Population : ${data.population}</p>
               <p class="languages">Languages : ${data.languages[0].name}</p> `
     countryDetails.style.display = "block";
}

const closeWindow = () => {
     document.getElementById("country-details").style.display = "none";
}