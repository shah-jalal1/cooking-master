
function searchMeal() {
    const mealName = document.getElementById('inputSearch').value;
    console.log(mealName);
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaycCountries(data.meals));
}

const displaycCountries = countries => {
    
    // console.log(countries);
    const contriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h3 class="country-name">${country.strMeal}</h3>
            <img style="width: 200px; height: 200px;"; class="img-fluid" src="${country.strMealThumb}">
        `;

        countryDiv.innerHTML = countryInfo;
        contriesDiv.appendChild(countryDiv);

    });

}

// const displayCountryDetails = names => {
//     const url = `https://restcountries.eu/rest/v2/name/${names}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => renderCountryinfo(data[0]));
// }

// const renderCountryinfo = country => {
//     console.log(country);
//     const countryDiv = document.getElementById('countryDetail');
//     countryDiv.innerHTML = `
//         <h1>${country.name}</h1>
//         <p>Population: ${country.population}</p>
//         <p>Area: ${country.area}</p>
//         <img src="${country.flag}">
//     `;

// }


































// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
// .then(res => res.json())
// .then(data => displayMeals(data));

// const displayMeals = meals => {
//     console.log(meals);
//     const mealDiv = document.getAnimations('meals');

//     meals.forEach(meal => {
//         const mealDiv = document.createElement('div');
//         mealDiv.className = 'mealName'
//     });
// }