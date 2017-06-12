import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe('Spaghetti', 'Classic Italian dish', 'https://budgetbytes.com/wp-content/uploads/2015/11/Spaghetti-with-Vegetable-and-Meat-Sauce-bowl-front.jpg'),
    new Recipe('Chicken Carbonara', 'Bastardized Italian dish', 'http://www.publicdomainpictures.net/pictures/210000/velka/spaghetti-carbonara-14896856952Hb.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

}
