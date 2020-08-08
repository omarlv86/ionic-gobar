import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarPageRoutingModule } from './bar-routing.module';

import { BarPage } from './bar.page';
import { NgFallimgModule } from 'ng-fallimg';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarPageRoutingModule,
    NgFallimgModule
  ],
  declarations: [BarPage]
})
export class BarPageModule {}
