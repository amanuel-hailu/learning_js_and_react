'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// const getCountryData = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('france');
// getCountryData('ethiopia');
// getCountryData('egypt');
// getCountryData('nigeria');
const renderCountry = (data, className = '') => {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     // If there is no neighbor, then return
//     if (!data.borders) return;

//     // Ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 🔥🔥🔥🔥`);
//       renderError(`Something went wrong 🔥🔥🔥🔥 ${err.message}. Try again!`);
//     })
//     // The finally method is called regardless of the promise being fulfilled or rejected | Catch is called only when the promise is rejected
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      console.log('TEST GEO API', res);

      if (!res.ok) {
        throw new Error(`Country not found ${res.status}`);
      }

      return res.json();
    })
    .then(data => {
      console.log('TEST DATA API', data);
      // You are in Berlin, Germany'
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => {
      console.log(`ERROR: ${err.message} 💥`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


import React from 'react';
import axios from 'axios';

const apiEndpoints = [
{ name: 'API1', url: 'https://api.endpoint1.com/health' },
{ name: 'API2', url: 'https://api.endpoint2.com/health' }
];

const Dashboard = () => {
const [endpointHealth, setEndpointHealth] = useState([]);

useEffect(() => {
const getEndpointHealth = async () => {
const healthPromises = apiEndpoints.map(endpoint => axios.get(endpoint.url));
const healthResponses = await Promise.all(healthPromises);


  const endpointHealth = healthResponses.map(response => ({
    name: response.data.name,
    url: response.data.url,
    status: response.data.status,
    checkTime: response.data.checkTime
  }));

  setEndpointHealth(endpointHealth);
}

getEndpointHealth();
setInterval(getEndpointHealth, 1800000); // refresh every 30 minutes
}, []);
// return (
<div className="container mx-auto px-4">
<h1 className="text-3xl font-bold mb-4">API Health Dashboard</h1>
<button onClick={() => getEndpointHealth()}>Refresh</button>
<table className="table-auto">
<thead>
<tr>
<th className="px-4 py-2">API Name</th>
<th className="px-4 py-2">API URL</th>
<th className="px-4 py-2">API Status</th>
<th className="px-4 py-2">API Check Time</th>
</tr>
</thead>
<tbody>
{endpointHealth.map(endpoint => (
<tr key={endpoint.name}>
<td className="border px-4 py-2">{endpoint.name}</td>
<td className="border px-4 py-2">{endpoint.url}</td>
<td className="border px-4 py-2">{endpoint.status}</td>
<td className="border px-4 py-2">{endpoint.checkTime}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default Dashboard;