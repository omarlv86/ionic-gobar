import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-bares',
  templateUrl: './bares.page.html',
  styleUrls: ['./bares.page.scss'],
})
export class BaresPage implements OnInit {
  Bars:any = [];

  constructor(private api:BackendApiService) { }
  
  ngOnInit() {
    this.getBars();
  }

  getBars(){
    this.api.getBars().subscribe(bars => {
      console.log(bars);
      this.Bars = bars;
      
    })
  }

}
