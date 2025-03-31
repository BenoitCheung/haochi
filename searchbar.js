document.getElementById("searchBar").addEventListener("keyup", function () {
    let query = this.value.toLowerCase();
    let recipes = document.querySelectorAll("#recipeList li");

    recipes.forEach(recipe => {
        let title = recipe.getAttribute("data-title").toLowerCase();
        let ingredients = recipe.getAttribute("data-ingredients").toLowerCase();

        if (title.includes(query) || ingredients.includes(query)) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
});

