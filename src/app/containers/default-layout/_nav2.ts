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
        url: 'Moduls/add',
        icon: 'icon-puzzle'
      },

    ]
  },

  { name: '', attributes: { disabled: true } },
  {
    name: 'LogOut',
    url: '',
    icon: 'icon-puzzle'
  },
  ];
