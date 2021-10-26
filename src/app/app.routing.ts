import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'client',
        loadChildren: () => import('./views/base/client.module').then(m => m.ClientModule)
      },
      {
        path: 'categorie',
        loadChildren: () => import('./views/categorie/categorie.module').then(m => m.CategorieModule)
      },
      {
        path: 'projet',
        loadChildren: () => import('./views/projet/projet.module').then(m => m.ProjetModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'developpeur',
        loadChildren: () => import('./views/developpeur/developpeur.module').then(m => m.DeveloppeurModule)
      },
      {
        path: 'payement',
        loadChildren: () => import('./views/payement/payement.module').then(m => m.NotificationsModule)
      },
      /*{
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },*/
      {
        path: 'societe',
        loadChildren: () => import('./views/societe/societe.module').then(m => m.SocieteModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
