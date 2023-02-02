import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  notes: Notes[] = [];
  private dbNotes: Notes[] = [];
  // private notesDbUrl = ;
  // notes: any = JSON.parse(localStorage.getItem("notes") || "[]");
  private notesDbUrl = "https://rrtodo-acf23-default-rtdb.europe-west1.firebasedatabase.app/notes.json";

  constructor(private http: HttpClient,
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.notesDbUrl).subscribe(response => {
      this.notes = response.slice();
      this.dbNotes = response.slice();
      
    })
  }

  deleteNote(noteClicked:any){
    const i = this.dbNotes.findIndex(element => element.id === noteClicked.id);
    this.dbNotes.splice(i,1);
    this.notes = this.dbNotes;
    // this.searchNotes();
    this.http.put(this.databaseService.notesDbUrl, this.dbNotes).subscribe();
  }

  // searchNotes(){
  //   this.notes = this.dbNotes.filter(element =>
  //     element.name.toLocaleLowerCase().includes(this.searchNotes.to))
  // }
}
