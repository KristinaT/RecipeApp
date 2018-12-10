export class Recipe {
  constructor(
    public name: string,
    public ingredientsList: string[],
    public prepInstructions: string,
    public source?: string,
  ) {}
}
