import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  data1: any[];
  data: any[];

  notes : any[];
  message: any;

  constructor(private noteService: NoteService, private snackBar: MatSnackBar, private dataService: DataService) { }

  ngOnInit() {
    //this.getNotes();

    this.dataService.currentMessage.subscribe(
      (response: any) => {
       this.getnotes();
      }
    );
  }

  //   getNotes() {
  //   this.noteService.getRequest("note/getallnotes").subscribe(
  //     (response: any) => {
  //       console.log('response from backend', response);
  //       this.data1 = response;
  //       console.log('array-->', this.data);
  //     }
  //   );
  //   console.log("Get notes");
  //   console.log(this.data);
  // }

  getnotes() {
    this.noteService.getRequest("note/getallnotes").subscribe(
      (response : any) =>{
        this.notes = response;
      }
    );
  }

}
