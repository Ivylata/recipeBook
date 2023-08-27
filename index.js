const api_Key = "6c8bfcf782494f59afea76be517ac7e7";
const recipeListE1 = document.getElementById("recipe-list");


function  displayRecipe(recipes){
recipeListE1.innerHTML = "";
recipes.forEach((recipe)=> {
    const recipeItemE1 = document.createElement("li");
    recipeItemE1.classList.add("recipe-item");


recipeImgE1 = document.createElement("img");
recipeImgE1.src = recipe.image;
recipeImgE1.alt = "recipe-image";

recipeTitleE1 = document.createElement("h2");
recipeTitleE1.innerText = recipe.title;

recipeIngridE1 = document.createElement("p");
recipeIngridE1.innerHTML = `
<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(",")
} `;

recipeLinkE1 = document.createElement("a");
recipeLinkE1.href = recipe.sourceUrl;
recipeLinkE1.innerText = "View Recipe";



recipeItemE1.appendChild(recipeImgE1);
recipeItemE1.appendChild(recipeTitleE1);
recipeItemE1.appendChild(recipeIngridE1);
recipeItemE1.appendChild(recipeLinkE1);
recipeListE1.appendChild(recipeItemE1);
});
}

async function getRecipes() {
const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${api_Key}`);

const data = await response.json()

return data.recipes
}

async function init(){
    const recipes = await getRecipes();
    displayRecipe(recipes)
}


init();