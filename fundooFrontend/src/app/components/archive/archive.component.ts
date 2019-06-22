import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Input() noteData: any;
  notes: any[];
  note: any;
  message : any;
  constructor(private noteService: NoteService, private snackBar: MatSnackBar, public dialog: MatDialog , private dataService : DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response:any)=> {
        this.message=response;
        this.getArchive();
        
      }
    );
  }
  getArchive() {
    console.log("Archieve Notes");
    this.noteService.getRequest("note/getarchivenotes").subscribe(
      (response: any) => {
        this.notes = response;
        console.log(this.notes);
      }
    );
  }
  unarchive(note){
    console.log("Unarchive Note");
    this.noteService.putRequest("note/archive?id=" + note.id).subscribe(
      (response:any)=>{
        if(response.statusCode === 1){
          this.dataService.changeMessage(response.statusMessage);
          this.snackBar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    );
  }
 
  

  trash(items){
    console.log("Trash note");
    console.log(items);
    this.noteService.putRequestNote("note/trash?id=" + items.id, null).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          this.dataService.changeMessage(response.statusMessage);
          this.snackBar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    );
  }

}
