import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notes } from 'src/app/models/notes.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: {id: number, name: string}[] = [];

  constructor(private http: HttpClient,
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<any>(this.databaseService.categoriesDbUrl).subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    })
  }

  onSubmit(form: NgForm) {
    this.categories.push(form.value);
    this.http.put(this.databaseService.categoriesDbUrl,this.categories).subscribe();
  
  }

  deleteCategory(category: {id: number, name: string}){
    const index = this.categories.indexOf(category);
    this.categories.splice(index,1);
    this.http.put(this.databaseService.categoriesDbUrl,this.categories).subscribe();

  }
}
