import { INavData } from '@coreui/angular';

export const navItems2: INavData[] =
  [{
    name: 'Moduls',

    children: [
      {
        name: 'All Moduls',
        url: 'moduls',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Modul',
        url: 'moduls/add',
        icon: 'icon-puzzle'
      },

    ]
  },

  { name: '', attributes: { disabled: true } },
  {
    name: 'LogOut',
    url: 'logout',
    icon: 'icon-puzzle'
  },
  ];
