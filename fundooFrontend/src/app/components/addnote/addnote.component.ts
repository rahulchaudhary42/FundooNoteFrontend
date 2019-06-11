import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/model/note-model';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  private showAddNote: boolean;
  note : NoteModel = new NoteModel();
  private popup: boolean;
  constructor(private noteService : NoteService , private snackBar: MatSnackBar ,private dataService : DataService) { }

  ngOnInit() {

  }

  showBar(){
    this.showAddNote=true;
  }
  onPopup() {  
    this.popup = true
  }

  close(){
    console.log("Add Note");
    console.log(localStorage.getItem("token"));
    this.noteService.postRequest("note/create" , this.note).subscribe(
      (response : any) => {
        if(response.statusCode === 1){
          this.dataService.changeMessage(response.statusMessage);
          this.snackBar.open(
            response.statusMessage,"close",{duration:2500}
          );
        }
        else{
          this.snackBar.open(
            response.statusMessage,"close",{duration:2500}
          );
        }
      }
    );
    this.showAddNote = false;
  }

}


 