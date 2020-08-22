import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://www.seekpng.com/png/full/967-9673444_moms-tiffinn-pan-cooking-logo.png',[
      new Ingredient('meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('Chicken Burger', 'Chicken burger with fries', 'https://www.pngjoy.com/pngl/249/4827103_burger-png-burger-king-salad-burger-png-download.png',[
      new Ingredient('buns',2),
      new Ingredient('meat',1)
    ])];

    constructor(private slService: ShoppingListService){}
    getRecipes(){
      return this.recipes.slice();
    }

    getRecipe(index:number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[])
    {this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe){
      this.recipes[index]=newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }

}