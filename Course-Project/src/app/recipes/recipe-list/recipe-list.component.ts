import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Description Test',
      'https://www.amusingmaria.com/wp-content/uploads/2018/07/Filipino-Spaghetti-a-new-recipe-thats-a-delicious-mix-of-sweet-and-tart-flavors-2.jpg'
    ),
    new Recipe(
      'A Test  Recipe-2',
      'Decription Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaFiCh0Z7Ub4xzNqiR7k2UPFtIAiHvmVv2Q&s'
    ),
  ];
}
