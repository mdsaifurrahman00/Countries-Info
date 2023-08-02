const countriesDiv = document.getElementById("country-wrapper");
const info = document.getElementById("modal");

fetch("https://restcountries.com/v3.1/all")
.then ((response) => response.json())
.then ((data) => country (data));

const country = (data) => {
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
                    <h5 class="capital">Capital: ${data[i].capital}</h5>
                    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#centeredModal" onclick="${data[i].cca2}">
                         See More
                    </button>
               </div>
          </div>`
     }
     
}
