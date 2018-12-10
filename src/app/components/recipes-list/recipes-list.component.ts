import { Component, Input } from "@angular/core";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent {
  @Input("recipesList") recipesList: string;
}
