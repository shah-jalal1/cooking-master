


function searchMeal() {
    document.getElementById("countries").innerHTML = "";
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
            <img style="width: 100%; height: 200px;"; class="img-fluid" src="${country.strMealThumb}">
            <h3 class="country-name">${country.strMeal}</h3>
            <button onClick="displayCountryDetails('${country.strMeal}')">Details</button>
        `;

        countryDiv.innerHTML = countryInfo;
        contriesDiv.appendChild(countryDiv);

    });

}

const displayCountryDetails = names=> {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryinfo(data.meals[0]));
}

const renderCountryinfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = "";
    countryDiv.innerHTML = `
    <img style="width: 200px; height: 200px;"; class="img-fluid" src="${country.strMealThumb}">
        <h1>${country.strMeal}</h1>
        <ul>
            <li>${country.strMeasure1} ${country.strIngredient1}</li>
            <li>${country.strMeasure2} ${country.strIngredient2}</li>
            <li>${country.strMeasure3} ${country.strIngredient3}</li>
            <li>${country.strMeasure4} ${country.strIngredient4}</li>
            <li>${country.strMeasure5} ${country.strIngredient5}</li>
            <li>${country.strMeasure6} ${country.strIngredient6}</li>
            <li>${country.strMeasure7} ${country.strIngredient7}</li>
            <li>${country.strMeasure9} ${country.strIngredient8}</li>
            <li>${country.strMeasure9} ${country.strIngredient9}</li>
            <li>${country.strMeasure10} ${country.strIngredient10}</li>
        </ul>
    `;
}
