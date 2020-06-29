import { Component, OnInit } from '@angular/core';
import {TestpageComponent} from '../testpage/testpage.component';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.scss']
})
export class ResultspageComponent implements OnInit {
list = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getDataResult().subscribe( data => {
      console.log(data);
      this.list = data;
    }) 
  }

}
