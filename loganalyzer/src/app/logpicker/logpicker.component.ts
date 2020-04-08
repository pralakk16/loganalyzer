import { Component, OnInit } from '@angular/core';
import data from '../files/data.json';
import {LogModel} from '../shared/logmodel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logpicker',
  templateUrl: './logpicker.component.html',
  styleUrls: ['./logpicker.component.scss']
})
export class LogpickerComponent implements OnInit {
  public logList:{est3: string,
    timestamp: string,
    rest1: string,
    rest6: string,
    rest5: string,
    rest4: string,
    rest2: string;}[] = data;
  onlyMatching: any[] = [];

  
  playerName: any;
  selectedValue: any;
 

    
  constructor() { }

  ngOnInit(): void {
   
  }

  onSubmit() {
    
    console.log(this.playerName);
    this.selectedValue = this.playerName;
    this.onlyMatching = this.logList.filter(item => item.timestamp == this.playerName);
  }

 

  

}
