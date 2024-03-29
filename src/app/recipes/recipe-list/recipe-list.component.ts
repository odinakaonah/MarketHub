import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Cake', 'Perfect for birthday' , 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chocolate-fudge-cake.jpg'),
  new Recipe('Bread', 'For beverages' , 'https://www.rockrecipes.com/wp-content/uploads/2008/01/DSC_0221-4.jpg')
];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
}
}
