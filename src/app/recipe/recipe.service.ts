import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/recipe.json`);
  }

  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/recipe.json`);
  }
}
