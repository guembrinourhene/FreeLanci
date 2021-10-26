import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { MobileComponent } from './mobile.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categorie'
    },
    children: [
      {
        path: '',
        redirectTo: 'categorie'
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {
          title: 'Client'
        }
      },
      {
        path: 'mobile',
        component: MobileComponent,
        data: {
          title: 'Mobile'
        }
      },
      {
        path: 'web',
        component: WebComponent,
        data: {
          title: 'Web'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule {}
