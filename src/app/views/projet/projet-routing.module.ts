import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetComponent } from './projet.component';

const routes: Routes = [
  {
    path: '',
    component: ProjetComponent,
    data: {
      title: 'Projet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule {}
