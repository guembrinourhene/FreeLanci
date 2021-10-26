import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocieteComponent } from './societe.component';
import { SocieteRoutingModule } from './societe-routing.module';

@NgModule({
  imports: [
    SocieteRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SocieteComponent ]
})
export class SocieteModule { }
