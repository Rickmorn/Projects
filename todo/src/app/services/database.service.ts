import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  notesDbUrl = "https://rrtodo-acf23-default-rtdb.europe-west1.firebasedatabase.app/notes.json";
  categoriesDbUrl = "https://rrtodo-acf23-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor() { }
}
