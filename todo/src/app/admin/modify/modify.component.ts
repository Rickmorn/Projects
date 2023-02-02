import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes } from 'src/app/models/notes.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  editNoteForm!: FormGroup;
  private index!: number;
  idUnique = true;
  private notes: Notes[] = [];
  private noteId = -1;
  categories: {id: number, name: string}[] = [];

  constructor(private route:ActivatedRoute,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private router:Router) { }

  ngOnInit(): void {
    

    this.http.get<any>(this.databaseService.categoriesDbUrl).subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb.slice()
      }
    })
    
    const noteId = Number(this.route.snapshot.paramMap.get("id"));
    this.http.get<Notes[]>(this.databaseService.notesDbUrl).subscribe(response => {
      const notesFound: Notes | undefined = response.find(element => element.id === noteId);
      if (notesFound !== undefined) {
        this.index = response.indexOf(notesFound);
        this.notes = response;

        this.editNoteForm = new FormGroup({
          "id": new FormControl(notesFound.id),
          "priority": new FormControl(notesFound.priority),
          "noteDate": new FormControl(notesFound.noteDate),
          "category": new FormControl(notesFound.category),
          "header": new FormControl(notesFound.header),
          "content": new FormControl(notesFound.content),
        })
      }
    })  
  }

  updateNote(){
    this.notes[this.index] = this.editNoteForm.value;
    this.http.put(this.databaseService.notesDbUrl, this.notes).subscribe(() =>
    this.router.navigateByUrl("/admin")
    );

  }

  checkIdUniqueness(){
    
  }

}
