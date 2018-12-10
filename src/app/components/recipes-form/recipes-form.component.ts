import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe";
@Component({
  selector: "app-recipes-form",
  templateUrl: "./recipes-form.component.html",
  styleUrls: ["./recipes-form.component.css"]
})
export class RecipesFormComponent implements OnInit {
  constructor() {}

  ingredients = [
    "eggs",
    "flour",
    "milk",
    "oil",
    "salt",
    "tomatoes",
    "cheese",
    "meat"
  ];
  addedRecipes = [];
  recipe = new Recipe("", [], "");
  addedIngredients: string[] = [];

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("submitted");
  }

  AddIngredient(ingredient) {
    return this.addedIngredients.push(ingredient);
  }

  newRecipe() {
    this.addedRecipes.push(this.recipe);
    this.recipe = new Recipe("", [], "");
    // console.log(this.addedRecipes);
  }

  ngOnInit() {}
}
