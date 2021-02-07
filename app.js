function searchMeal() {
    document.getElementById("meal").innerHTML = "";
    const mealName = document.getElementById('inputSearch').value;
    // console.log(mealName);
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaymeal(data.meals))
        .catch(error =>alert("Meal Item Not Found"));;

}

const displaymeal = meal => {

    const mealName = document.getElementById('inputSearch').value;
    
    // console.log(meal);
    const contriesDiv = document.getElementById('meal');

    meal.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealDiv';

        const mealInfo = `
            <img onClick="displaymealDetails('${meal.strMeal}')" style="width: 100%; height: 200px;"; class="img-fluid" src="${meal.strMealThumb}">
            <h3 onClick="displaymealDetails('${meal.strMeal}')" class="meal-name">${meal.strMeal}</h3>
        `;

        mealDiv.innerHTML = mealInfo;
        contriesDiv.appendChild(mealDiv);

    });

}

const displaymealDetails = names=> {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`;
    fetch(url)
    .then(res => res.json())
    .then(data => rendermealinfo(data.meals[0]));
}

const rendermealinfo = meal => {
    console.log(meal);
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = "";
    mealDiv.className = 'mealDetailDiv';
    mealDiv.innerHTML = `
    <img style="width: 330px; height: 200px;"; class="img-fluid" src="${meal.strMealThumb}">
    <h1>${meal.strMeal}</h1>
    <h2>Ingredients</h2>
        <ul class="ingredUl">
            <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
            <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
            <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
            <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
            <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
            <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
            <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
            <li>${meal.strMeasure8} ${meal.strIngredient8}</li>
            <li>${meal.strMeasure9} ${meal.strIngredient9}</li>
            <li>${meal.strMeasure10} ${meal.strIngredient10}</li>
            <li>${meal.strMeasure11} ${meal.strIngredient11}</li>
            <li>${meal.strMeasure12} ${meal.strIngredient12}</li>
        </ul>
    `;
}