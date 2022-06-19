import { INavData } from '@coreui/angular';

export const navItems: INavData[] =
  [
    {
      name: 'Statistics',
      url: 'dashboard',
      iconComponent: 'icon-puzzle'
    },

    {
      name: 'Users',
      
      children: [
        {
          name: 'All Users',
          url: 'users',
          iconComponent: 'icon-puzzle'
        },
        {
          name: 'Add User',
          url: 'users/add',
          iconComponent: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Categories',
     
      children: [
        {
          name: 'All Categories',
          url: 'categories',
          iconComponent: 'icon-puzzle'
        },
        {
          name: 'Add Category',
          url: 'categories/add',
          iconComponent: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Departments',
     
      children: [
        {
          name: 'All Departments',
          url: 'departments',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Department',
          url: 'departments/add',
          icon: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Sub Departments',
      
      children: [
        {
          name: 'All Sub Departments',
          url: 'departments',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Sub Department',
          url: 'subdepartments/add',
          icon: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Sub Sub Departments',
      
      children: [
        {
          name: 'All Sub Sub Departments',
          url: 'subsubdepartments',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Sub Sub Department',
          url: 'subsubdepartments/add',
          icon: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Study Types',     
      children: [
        {
          name: 'All Study Types',
          url: 'studytype',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Study Type',
          url: 'studytype/add',
          icon: 'icon-puzzle'
        },

      ]
    }, {
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

    { name: '', attributes: { disabled: true }},
     {
       name: 'LogOut',
       url: '',
       icon: 'icon-puzzle'
    },
  ];
