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
        this.getLabels();
      }
    );
  }
 
  getLabels() {
    console.log("Get Label");
    this.labelService.getRequest("label/getlabel").subscribe(
      (response: any) => {
        this.allLabels = response;
        console.log(this.allLabels);
      }
    );
  }

  addLabel() {
    this.label = {
      "labelName": this.labelName.value
    };
    console.log("Add label");
    this.labelService.postRequest("label/create", this.label).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          this.dataService.changeMessage(response.statusMessage);
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        } else {
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    );
    this.dialogRef.close();
  }

  addLabelTick(){
    this.label = {
      "labelName": this.labelName.value
    };
    console.log("Add label");
    this.labelService.postRequest("label/create", this.label).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          this.dataService.changeMessage(response.statusMessage);
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        } else {
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    );
  //  this.dialogRef.close();
  }

  deletelabel(label) {
    console.log("Delete label");
    this.labelService.deleteRequest("label/delete?labelId=" + label.labelId).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          this.dataService.changeMessage(response.statusMessage);
          this.snackbar.open(response.statusMessage,"close",{duration:2500})
        } else {
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    );
  }

  labeledit(label) {
    this.label = {
      "labelName": this.labelName.value
    };
     console.log("label : ");
     console.log(label);
    this.labelService.putRequest("label/update?labelId=" + label.labelId, this.label).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          this.dataService.changeMessage(response.statusMessage);
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        } else {
          this.snackbar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    );
  }


}
