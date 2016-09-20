(function () {
  'use strict';

  angular
    .module('tasks')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('rightbar', {
      title: 'Tasks',
      state: 'tasks',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('rightbar', 'tasks', {
      title: 'List Tasks',
      state: 'tasks.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('rightbar', 'tasks', {
      title: 'Create Task',
      state: 'tasks.create',
      roles: ['user']
    });
  }
}());
