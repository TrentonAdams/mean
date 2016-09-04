(function () {
  'use strict';

  angular
    .module('testcruds')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Testcruds',
      state: 'testcruds',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'testcruds', {
      title: 'List Testcruds',
      state: 'testcruds.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'testcruds', {
      title: 'Create Testcrud',
      state: 'testcruds.create',
      roles: ['user']
    });
  }
}());
