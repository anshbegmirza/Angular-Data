import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];

  recipes: Recipe[] = [];

  constructor(private RecipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes(); // getRecipes() method is called from RecipeService
  }

  //   onRecipeSelected(recipe: Recipe) {
  //     this.recipeWasSelected.emit(recipe);
  //   }
}
