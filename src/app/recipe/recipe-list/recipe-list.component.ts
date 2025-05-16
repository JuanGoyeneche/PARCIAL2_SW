import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false, 
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  selected: boolean = false;
  selectedRecipe: any = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        console.log('Recetas cargadas:', data);
        this.recipes = data;
      },
      error: (error) => {
        console.error('Error al cargar recetas:', error);
      }
    });
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
    this.selected = true;
  }

  getIngredientCount(recipe: any): number {
    return recipe.ingredientes?.length || 0;
  }
}
