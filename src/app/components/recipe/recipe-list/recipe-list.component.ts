import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Ceasar',
      'Salad with chicken and tomatos',
      'https://media.afar.com/uploads/images/post_images/images/uF6fTs2Lqu/original_cecdaa073e3f7e06f9489555643747e3.jpg?1410203761'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
