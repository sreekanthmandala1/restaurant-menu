import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://www.seekpng.com/png/full/967-9673444_moms-tiffinn-pan-cooking-logo.png'),
    new Recipe('Chicken Burger', 'Chicken burger with fries', 'https://www.pngjoy.com/pngl/249/4827103_burger-png-burger-king-salad-burger-png-download.png')];

    getRecipes(){
      return this.recipes.slice();
    }
}