import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ProjetComponent } from './projet.component';
import { ProjetRoutingModule } from './projet-routing.module';

@NgModule({
  imports: [
    ProjetRoutingModule,
    ChartsModule
  ],
  declarations: [ ProjetComponent ]
})
export class ProjetModule { }
