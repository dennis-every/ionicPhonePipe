import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MaskPipe } from '../pipes/mask.pipe';
import { PhonePipe } from '../pipes/phone.pipe';

@NgModule({
  imports: [
CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, MaskPipe, PhonePipe]
})
export class HomePageModule {}
