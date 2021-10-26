import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular';

import { DeveloppeurComponent } from './developpeur.component';


import { DeveloppeurRoutingModule } from './developpeur-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeveloppeurRoutingModule,
    IconModule
  ],
  declarations: [

    DeveloppeurComponent,


  ]
})
export class DeveloppeurModule { }
