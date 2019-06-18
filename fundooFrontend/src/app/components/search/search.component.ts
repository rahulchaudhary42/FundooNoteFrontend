import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
 
export class SearchComponent implements OnInit {

  constructor(private dashBoard : DashboardComponent) { }
  notes : any;
  ngOnInit() {
    this.dashBoard.currentMessage.subscribe(
      (response: any)=>{
        this.notes = response;
        console.log("Search")
        console.log(this.notes);
      }
    );
  }

}

