import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes: any;
  unpinned: any[];
  data1: any[];
  data: any[];
  message: any;
  pinned: any;

  constructor(private noteService: NoteService, private snackBar: MatSnackBar, private dataService: DataService) {

  }

  ngOnInit() {
    // this.getNotes();


    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
        this.getUnPinned();
        this.getPinned()
        // this.getPinned() 

      }
    );


  }

  //   for pin and unpin note
  pin(items) {
    console.log(items.id);
    this.noteService.putRequest("note/pin?id=" + items.id).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          this.dataService.changeMessage(response.statusMessage);
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 });
        }
      }
    );
  }

  // for display all note of unpinned
  getUnPinned() {
    this.noteService.getRequest('note/getunpinnednotes').subscribe(
      (response: any) => {
        this.unpinned = response;
        console.log(response);
      }
    )
  }

  // for display all note of pinned
  getPinned() {
    this.noteService.getRequest('note/getpinnednotes').subscribe(
      (response: any) => {
        // this.pinned = response;
        this.data = response;
        console.log("pinned")
        console.log(this.data);
      }
    )
  }

  // for display all note in dashboard
  getNotes() {
    this.noteService.getRequest("note/getallnotes").subscribe(
      (response: any) => {
        console.log('response from backend', response);
        this.data1 = response;
        console.log('array-->', this.data);
      }
    );
    console.log("Get notes");
    console.log(this.data);
  }

}
