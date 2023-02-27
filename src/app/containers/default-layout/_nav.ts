import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  {
    name: 'Configurations',
    url: '/forms/layout',
    iconComponent: { name: 'cilListNumbered' }
  },
  {
    name: 'test',
    url: '/base/carousel',
    iconComponent: { name: 'cil-drop' }
  },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  {
    name: 'Ressources',
    title: true
  },
  {
    name: 'Parcours',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    // children: [
    //   {
    //     name: 'Accordion',
    //     url: '/base/accordion'
    //   },
    //   {
    //     name: 'Breadcrumbs',
    //     url: '/base/breadcrumbs'
    //   },
    //   {
    //     name: 'Cards',
    //     url: '/base/cards'
    //   },
    //   {
    //     name: 'Carousel',
    //     url: '/base/carousel'
    //   },
    //   {
    //     name: 'Collapse',
    //     url: '/base/collapse'
    //   },
    //   {
    //     name: 'List Group',
    //     url: '/base/list-group'
    //   },
    //   {
    //     name: 'Navs & Tabs',
    //     url: '/base/navs'
    //   },
    //   {
    //     name: 'Pagination',
    //     url: '/base/pagination'
    //   },
    //   {
    //     name: 'Placeholder',
    //     url: '/base/placeholder'
    //   },
    //   {
    //     name: 'Popovers',
    //     url: '/base/popovers'
    //   },
    //   {
    //     name: 'Progress',
    //     url: '/base/progress'
    //   },
    //   {
    //     name: 'Spinners',
    //     url: '/base/spinners'
    //   },
    //   {
    //     name: 'Tables',
    //     url: '/base/tables'
    //   },
    //   {
    //     name: 'Tabs',
    //     url: '/base/tabs'
    //   },
    //   {
    //     name: 'Tooltips',
    //     url: '/base/tooltips'
    //   }
    // ]
  },
  {
    name: 'Métiers',
    url: '/buttons/buttons',
    iconComponent: { name: 'cil-cursor' },
    // children: [
    //   {
    //     name: 'Buttons',
    //     url: '/buttons/buttons'
    //   },
    //   {
    //     name: 'Button groups',
    //     url: '/buttons/button-groups'
    //   },
    //   {
    //     name: 'Dropdowns',
    //     url: '/buttons/dropdowns'
    //   },
    // ]
  },
  {
    name: 'Auto-Evaluation',
    title: true
  },
  {
    name: 'Questions',
    url: '/forms/select',
    iconComponent: { name: 'cil-notes' },
    // children: [
    //   {
    //     name: 'Eleve',
    //     url: '/forms/form-control'
    //   },
    //   {
    //     name: 'TSECO',
    //     url: '/forms/select'
    //   },
    //   {
    //     name: 'TSE',
    //     url: '/forms/checks-radios'
    //   },
    //   {
    //     name: 'TSEXP',
    //     url: '/forms/range'
    //   },
    //   {
    //     name: 'TSS',
    //     url: '/forms/input-group'
    //   },
    //   {
    //     name: 'TLL',
    //     url: '/forms/floating-labels'
    //   },
    //   {
    //     name: 'TAL',
    //     url: '/forms/layout'
    //   }
    //   ,
    //   {
    //     name: 'Professionnels',
    //     url: '/forms/validation'
    //   }
    // ]
  },
  {
    name: 'Auto-Evaluation',
    url: '/forms/form-control',
    iconComponent: { name: 'cil-notes' },
    // children: [
    //   {
    //     name: 'Eleve',
    //     url: '/forms/form-control'
    //   },
    //   {
    //     name: 'TSECO',
    //     url: '/forms/select'
    //   },
    //   {
    //     name: 'TSE',
    //     url: '/forms/checks-radios'
    //   },
    //   {
    //     name: 'TSEXP',
    //     url: '/forms/range'
    //   },
    //   {
    //     name: 'TSS',
    //     url: '/forms/input-group'
    //   },
    //   {
    //     name: 'TLL',
    //     url: '/forms/floating-labels'
    //   },
    //   {
    //     name: 'TAL',
    //     url: '/forms/layout'
    //   }
    //   ,
    //   {
    //     name: 'Professionnels',
    //     url: '/forms/validation'
    //   }
    // ]
  },
  // {
  //   name: 'Professionnel',
  //   url: '/forms/checks-radios',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Eleve',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'TSECO',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'TSE',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'TSEXP',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'TSS',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'TLL',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'TAL',
  //       url: '/forms/layout'
  //     }
  //     ,
  //     {
  //       name: 'Professionnels',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  {
    name: 'Utilisateurs',
    title: true
  },
  // {
  //   name: 'Administrateurs',
  //   url: '/forms/checks-radios',
  //   iconComponent: { name: 'cil-notes' },
  // },
  {
    name: 'Eleves',
    url: '/forms/range',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Etudiants',
    url: '/forms/input-group',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Professionnels',
    url: '/forms/floating-labels',
    iconComponent: { name: 'cil-notes' },
  },

  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];
