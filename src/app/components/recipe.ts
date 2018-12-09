export class Recipe {
  constructor(
    public name: string,
    public ingredientsList: string[],
    public prepTime: Date,
    public prepInstructions: string,
    public source?: string,
  ) {}
}
