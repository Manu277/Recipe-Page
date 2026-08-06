const url="https://dummyjson.com/recipes";

document.addEventListener('DOMContentLoaded',async function (){
    const response = await fetch(url);
    const data = await response.json();
    const totalRecipes = data.recipes.length;

    for(let i=0;i<totalRecipes;i++){
        // create recipe card
        const newRecipeElement = document.createElement('div');
        newRecipeElement.className = 'recipe';
        newRecipeElement.innerHTML = `<img src=${data.recipes[i].image} class="photo" alt=${data.recipes[i].name}> <p>${data.recipes[i].name}</p>`;
        
        recipes.append(newRecipeElement);
    }
})