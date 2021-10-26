// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { PayementComponent } from './payement.component';

import { BadgesComponent } from './badges.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Notifications Routing
import { PayementRoutingModule } from './payement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PayementRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    PayementComponent,
    BadgesComponent,
    ModalsComponent
  ]
})
export class NotificationsModule { }
