import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('Paw Bhaji','My Favourite',
    'https://thumbs.dreamstime.com/b/pav-bhaji-26346858.jpg'),
    new Recipe('Tadka Roti','My another Favourite',
    'https://thumbs.dreamstime.com/b/pav-bhaji-26346858.jpg')
 
  ];
  constructor() { }

  ngOnInit() {
  }

}
