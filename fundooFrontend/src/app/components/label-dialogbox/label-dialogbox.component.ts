import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { LabelService } from 'src/app/service/label.service';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-label-dialogbox',
  templateUrl: './label-dialogbox.component.html',
  styleUrls: ['./label-dialogbox.component.scss']
})
export class LabelDialogboxComponent implements OnInit {
  label: any;
  flag: boolean;
  allLabels: any[];
  labelName = new FormControl('');
  message : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private labelService: LabelService, private snackbar: MatSnackBar, public dialogRef: MatDialogRef<LabelDialogboxComponent>,private dataService : DataService) { }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(
      (response:any)=> {
        this.message=response;
        //this.getLabels();
      }
    );
  }

  // getLabels() {
  //   console.log("Get Label");
  //   this.labelService.getRequest("label/getlabel").subscribe(
  //     (response: any) => {
  //       this.allLabels = response;
  //       console.log(this.allLabels);
  //     }
  //   );
  // }



}
