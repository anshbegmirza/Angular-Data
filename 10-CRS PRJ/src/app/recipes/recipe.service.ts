import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 20),
        new Ingredient("Buns", 2),
      ]
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1),
        new Ingredient("Cheese", 1),
      ]
    ),
  ];

  // method
  getRecipes() {
    // a new duplicate with same data will be generated using slice method.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient) {
    this.slService.addIngredients(ingredient);
  }
}
