import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayementComponent } from './payement.component';
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';

const routes: Routes = [
  {
    path: '',
    component: PayementComponent,
    data: {
      title: 'Payement'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayementRoutingModule {}
