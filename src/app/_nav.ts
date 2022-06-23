import { INavData } from '@coreui/angular';

export const navItems: INavData[] =
  [
    {
      name: 'Users',

      children: [
        {
          name: 'All Users',
          url: 'users/users',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add User',
          url: 'users/adduser',
          icon: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Categories',

      children: [
        {
          name: 'All Categories',
          url: 'categories',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Category',
          url: 'categories/add',
          icon: 'icon-puzzle'
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
          url: 'subdepartments',
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
          url: '',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Study Type',
          url: '',
          icon: 'icon-puzzle'
        },

      ]
    }, {
      name: 'Moduls',

      children: [
        {
          name: 'All Moduls',
          url: '',
          icon: 'icon-puzzle'
        },
        {
          name: 'Add Modul',
          url: '',
          icon: 'icon-puzzle'
        },

      ]
    },
  ];
