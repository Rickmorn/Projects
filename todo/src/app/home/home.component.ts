import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array1: Notes[] =[];
  array2: Notes[] =[];
  array3: Notes[] =[];
  notes: Notes[] = [];
  private dbNotes: Notes[] = [];
  categories: string[] = [];
  private notesDbUrl = "https://rrtodo-acf23-default-rtdb.europe-west1.firebasedatabase.app/notes.json";


  constructor(private http: HttpClient,
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.notesDbUrl).subscribe(response => {
      this.notes = response.slice();
      this.dbNotes = response.slice();
      this.categories = [...new Set(this.notes.map(element => element.category))];
      this.array1 = this.notes.filter(element => element.category === "Notes");
      this.array2 = this.notes.filter(element => element.category === "Notes");
      this.array3 = this.notes.filter(element => element.category === "Notes");
    })
  }

  changeFirstCol(newCategory: any){
    this.array1 = this.notes.filter(element => element.category === newCategory)
  }

  changeSecondCol(newCategory: any){
    this.array2 = this.notes.filter(element => element.category === newCategory)
  }

  changeThirdCol(newCategory: any){
    this.array3 = this.notes.filter(element => element.category === newCategory)
  }

  changeNoteActive(noteClicked: any){
    const i = this.dbNotes.findIndex(element => element.id === noteClicked.id);
    this.dbNotes[i].active = !noteClicked.active;
    this.http.put(this.databaseService.notesDbUrl, this.dbNotes).subscribe();

  }

  filterByCategory(categoriesClicked: string){
    this.notes = this.dbNotes.filter(element => element.category === categoriesClicked);
  }

  sortAZ(){
    this.notes.sort((a,b) => a.priority.localeCompare(b.priority));
  }

  ogProducts(){
    this.notes = this.dbNotes.slice();
  }

}
