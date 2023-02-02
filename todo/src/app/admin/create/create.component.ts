import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Notes } from 'src/app/models/notes.model';
import { max, of } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private dbNotes: Notes[] = [];
  categories: {id: number, name: string}[] = [];
  private Notes: any = "https://rrtodo-acf23-default-rtdb.europe-west1.firebasedatabase.app/notes.json"
  
  maxId: number = 0;

  


  id = 0; // 

  constructor(private http: HttpClient,
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<Notes[]>(this.databaseService.notesDbUrl).subscribe(response => {
      this.dbNotes = response.slice();
      this.maxId = Math.max(
              ...response.map(o => o.id)
      ) 
      console.log(this.maxId)
     });
     
     this.http.get<any>(this.databaseService.categoriesDbUrl).subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb.slice();
      }
     })
    
    this.id = JSON.parse(localStorage.getItem("notes") || "[]").length + 1; 

  
  }


  addNote(form: NgForm){
    form.value.id = this.maxId + 1; // 
    form.value.noteDate = new Date();
    form.value.active = true;

    this.dbNotes.push(form.value);
    this.http.put(this.databaseService.notesDbUrl,this.dbNotes).subscribe(() => {
      form.reset();
    })
    

    // const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    // notes.push(form.value);
    // localStorage.setItem("notes", JSON.stringify(notes));
 


  }
}
