import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaresPageRoutingModule } from './bares-routing.module';

import { BaresPage } from './bares.page';
import { NgFallimgModule } from 'ng-fallimg';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaresPageRoutingModule,
    NgFallimgModule
  ],
  declarations: [BaresPage]
})
export class BaresPageModule {}
