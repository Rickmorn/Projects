import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/app/models/notes.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteFound: Notes | undefined;

  constructor(private http: HttpClient,
    private databaseService: DatabaseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const urlId = Number(this.route.snapshot.paramMap.get("id"));
    this.http.get<Notes[]>(this.databaseService.notesDbUrl).subscribe(response => {
      this.noteFound = response.find(element => element.id == urlId);
    })
  }

}
