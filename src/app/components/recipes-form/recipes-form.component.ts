import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import * as enums from '../ingredients.enum';
@Component({
  selector: 'app-recipes-form',
  templateUrl: './recipes-form.component.html',
  styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {
  constructor() {}

  ingredients = [
    'eggs',
    'flour',
    'milk',
    'oil',
    'salt',
    'tomatoes',
    'cheese',
    'meat'
  ];
  recipe = new Recipe(
    'test',
    [this.ingredients[0]],
    new Date(),
    'instructionsTest'
  );
  addedIngredients: string[] = [];
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  AddIngredient(ingredient) {
    return this.addedIngredients.push(ingredient);
  }

  ngOnInit() {}
}
