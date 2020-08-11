import { Component } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  slides = [
    {
      img: 'assets/img/mujer.svg',
      titulo: 'Tragos 2x1 <br> solo para mujeres',
    },
    {
      img:'assets/img/pastel.svg',
      titulo:'Postres con 10% <br> de descuento',
    },
    {
      img: 'assets/img/dinero.svg',
      titulo: '10% de descuento en <br> la compra total'
    }
  ];

  Bars:any = [];
  randomBars: any = [];
  lista: any = [];
  dataRandom : any = [];
  public raiting = {estrellas: ''}
  constructor(private api:BackendApiService) {}

  ngOnInit():void{
    this.getBars();
    this.barRandom();
    //this.randomData();
    
  }

  getBars(){
    this.api.getBars().subscribe(bars => {
      //console.log(bars);
      this.Bars = bars;
      
    })
  }

  barRandom(){
    this.api.getBars().subscribe(bares => {
      this.randomBars = bares;
      //console.log(this.randomBars);
      this.lista = this.Bars;
      for (var n = 0; n<= 2; n++){
        var aleatorio = Math.floor(Math.random()*(this.lista.length));
        var seleccion = this.lista[aleatorio];
        this.dataRandom.push(seleccion);
        this.lista.splice(aleatorio, 1);
        console.log(this.dataRandom);
      }

    })
  }

  /*
  randomData(){
    var listado:any[] = Array("Guillermo", "Lucas", "David", "Roger", "Bruno", "Iñaki", "Alex", "Carlos");
    var Total:number = listado.length;
    for (var i=0; i<= 7 ; i++) {
      var aleatorio = Math.floor(Math.random()*(listado.length));
      var seleccion = listado[aleatorio];
      console.log(seleccion);
      listado.splice(aleatorio, 1);
      console.log(listado);
    }
    
    var colours = ["White", "Red", "Black", "Purple", "Grey", "Yellow", "Blue"];
    var countrys = ["Japan", "Korea", "Spain", "England", "China", "Singapur","Rumania"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (var n = 0; n < colours.length; n++) {
        console.log("My " + (n+1) + " choice is " + colours[Math.floor(Math.random() * colours.length)] + " in " + countrys[Math.floor(Math.random() * countrys.length)] + " on " + days[Math.floor(Math.random() * days.length)] + "<br>");
    }
    
  }*/

}
