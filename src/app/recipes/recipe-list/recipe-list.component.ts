import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simple a test','https://www.seekpng.com/png/full/967-9673444_moms-tiffinn-pan-cooking-logo.png'),
    new Recipe('A Test Recipe','This is simple a test','https://www.seekpng.com/png/full/967-9673444_moms-tiffinn-pan-cooking-logo.png')];
  constructor() { }

  ngOnInit(): void {
  }

}
