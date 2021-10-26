import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EcommerceComponent } from './ecommerce.component';
import { WebComponent } from './web.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MobileComponent } from './mobile.component';

// Buttons Routing
import { MobileRoutingModule } from './categorie-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    EcommerceComponent,
    MobileComponent,
    WebComponent
  ]
})
export class CategorieModule { }
