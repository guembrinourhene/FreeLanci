import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloppeurComponent } from './developpeur.component';


const routes: Routes = [
    {
      path: '',
      component: DeveloppeurComponent,
      data: {
        title: 'Developpeur'
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloppeurRoutingModule {}
