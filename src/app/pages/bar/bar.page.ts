import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.page.html',
  styleUrls: ['./bar.page.scss'],
})
export class BarPage implements OnInit {
  bar:any = null;
  mapa:any = ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15181.49851752291!2d-102.2033225!3d17.9612993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ffe42eaceffde66!2sMestiza%20Grill%20and%20Ribs!5e0!3m2!1ses-419!2smx!4v1596856887920!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"';
  

  constructor(private api:BackendApiService,
    private routeActive: ActivatedRoute) { }

  ngOnInit() {
    const id =  this.routeActive.snapshot.paramMap.get('id');
    console.log(id);
    this.api.getBar(id).subscribe(bar => {
      console.log(bar);
      this.bar = bar[0];
      console.log(this.bar);
    })
  }

}
