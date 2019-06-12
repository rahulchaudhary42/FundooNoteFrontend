import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/model/login-model';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LabelService } from 'src/app/service/label.service';
import { HttpService } from 'src/app/service/http.service';
import { DataService } from 'src/app/service/data.service';
import { NoteService } from 'src/app/service/note.service';
import { BehaviorSubject } from 'rxjs';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  toggle:boolean=true;
  token: string;
  email: string;
  name: string;
  user: LoginModel = new LoginModel();
  allLabels: any[];
  message : any;
   
  constructor(private router: Router, public dialog: MatDialog, private labelService: LabelService, private httpService: HttpService, private snackBar: MatSnackBar, private dataService: DataService, private noteService: NoteService) {
  }
 
  ngOnInit() {

    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
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

}

