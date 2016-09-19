(function ()
{
  'use strict';

  angular
      .module('tasks')
      .controller('TasksListController', TasksListController);

  TasksListController.$inject = ['TasksService', '$scope'];

  function TasksListController(TasksService, $scope)
  {
    var vm = this;

    vm.tasks = TasksService.query();

    $scope.items = vm.tasks;
    $scope.selected = [1];
    $scope.toggle = function (item, list)
    {
      var idx = list.indexOf(item);
      if (idx > -1)
      {
        list.splice(idx, 1);
      }
      else
      {
        list.push(item);
      }
    };

    $scope.exists = function (item, list)
    {
      return list.indexOf(item) > -1;
    };

    $scope.isIndeterminate = function ()
    {
      return ($scope.selected.length !== 0 &&
      $scope.selected.length !== $scope.items.length);
    };

    $scope.isChecked = function ()
    {
      return $scope.selected.length === $scope.items.length;
    };

    $scope.toggleAll = function ()
    {
      if ($scope.selected.length === $scope.items.length)
      {
        $scope.selected = [];
      }
      else if ($scope.selected.length === 0 || $scope.selected.length > 0)
      {
        $scope.selected = $scope.items.slice(0);
      }
    };
  }
}());
