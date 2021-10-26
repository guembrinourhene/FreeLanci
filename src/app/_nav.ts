import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Categorie',
    url: '/categorie',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Web',
        url: '/categorie/web',
        icon: 'icon-cursor'
      },
      {
        name: 'Mobile',
        url: '/categorie/mobile',
        icon: 'icon-cursor'
      },
      {
        name: 'Ecommerce',
        url: '/categorie/ecommerce',
        icon: 'icon-cursor'
      },
    ]
  },
  {
    name: 'Projet',
    url: '/projet',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Developpeur',
    url: '/developpeur',
    icon: 'icon-star',
    
  },
  {
    name: 'Societe',
    url: '/societe',
    icon: 'icon-calculator',
  },
  {
    name: 'Client',
    url: '/client',
    icon: 'icon-cursor',
    
  },
  {
    name: 'Payement',
    url: '/payement',
    icon: 'icon-bell',
  },

  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
    ]
  },
];
