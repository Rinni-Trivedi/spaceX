import { Component, OnInit } from '@angular/core';
import { S1Service } from './s1.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mission_name: any;
  displayDataTemp: any;
  constructor(private data: S1Service) {
  }

  ngOnInit() {
    this.displayData();
  }
  /**
   * This method for display table data
   */
  displayData() {

    this.data.userData().subscribe(res => {
    this.displayDataTemp = res;
    console.log(res);
    });
    // for(let i = 0,i =< this.displayDataTemp.length, i ++){}
    // this.statusArray = ['Done', 'Not started', 'In progress'];
  }

  /**
   * This method for color change
   * @param eventStatus : status value
   */

}


