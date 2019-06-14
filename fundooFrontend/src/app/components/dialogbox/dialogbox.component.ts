import { Component, OnInit, Inject, Input } from '@angular/core';
 
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
// export class DialogboxComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

export class DialogboxComponent implements OnInit {
  @Input() noteData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<DialogboxComponent>, private dataService: DataService) { }

  note: any;
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  id = this.data.noteId;
  color = this.data.color;
  ngOnInit() {
  }

}
