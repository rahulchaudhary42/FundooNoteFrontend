import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/model/login-model';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LabelService } from 'src/app/service/label.service';
import { HttpService } from 'src/app/service/http.service';
import { DataService } from 'src/app/service/data.service';
import { NoteService } from 'src/app/service/note.service';
import { BehaviorSubject } from 'rxjs';
import { LabelDialogboxComponent } from '../label-dialogbox/label-dialogbox.component';
import { ViewServiceService } from 'src/app/service/view-service.service';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  token:string;
  toggle:boolean=true;
  open: boolean;
  list:boolean = true;
  grid:boolean = false;
  user: LoginModel = new LoginModel();
  allLabels: any[];
  message : any;
  private obtainNotes = new BehaviorSubject([]);
  currentMessage = this.obtainNotes.asObservable();
  constructor(private router: Router, public dialog: MatDialog, private viewservice :ViewServiceService, private labelService: LabelService, private httpService: HttpService, private snackBar: MatSnackBar, private dataService: DataService, private noteService: NoteService) {
  }
 


  // ngOnInit() {
  //   this.appName="Fundoo";
  //   this.token=localStorage.getItem("token")
  //   console.log(this.token)

 
  //   console.log("sdsadsadsad"+this.token)
   
  // }



  ngOnInit() {


    this.token=localStorage.getItem("token");
    console.log(this.token);

    this.httpService.getRequest("getProfile").subscribe(
      Response=>this.image=Response,
      console.log("dsdsdsdsd"+Response),
      console.log(this.image)
    );

    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
        this.getLabels();
      }
    );
  }

  openDialogLabel(): void {
    const dialogRef = this.dialog.open(LabelDialogboxComponent, {
      width: '300px', minHeight: '100px',

    });
     
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

  onSearchChange(message: string) {
    this.noteService.getRequest("note/searchTitle?title=" + message+"&token=" +localStorage.getItem('token')).subscribe(
      (response: any) => {
       this.obtainNotes.next(response);
        console.log(response);
        this.router.navigate(['/dashboard/search']);
      }
    );
  }

  image:string
  account(){
    this.open=true;
    
    
  }

  changeView()
  {
          
          if (this.list) 
          {
            this.grid = true;
            this.list = false;
                 
          } 
          else 
          {
            this.list = true;
            this.grid = false;
                 
          }
          this.viewservice.gridview();
         
  }


}

