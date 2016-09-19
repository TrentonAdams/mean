(function () {
  'use strict';

  describe('Tasks Route Tests', function () {
    // Initialize global variables
    var $scope,
      TasksService;

    // We can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($rootScope, _TasksService_) {
      // Set a new global scope
      $scope = $rootScope.$new();
      TasksService = _TasksService_;
    }));

    describe('Route Config', function () {
      describe('Main Route', function () {
        var mainstate;
        beforeEach(inject(function ($state) {
          mainstate = $state.get('tasks');
        }));

        it('Should have the correct URL', function () {
          expect(mainstate.url).toEqual('/tasks');
        });

        it('Should be abstract', function () {
          expect(mainstate.abstract).toBe(true);
        });

        it('Should have template', function () {
          expect(mainstate.template).toBe('<ui-view/>');
        });
      });

      describe('View Route', function () {
        var viewstate,
          TasksController,
          mockTask;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          viewstate = $state.get('tasks.view');
          $templateCache.put('modules/tasks/client/views/view-task..html', '');

          // create mock Task
          mockTask = new TasksService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Task Name'
          });

          // Initialize Controller
          TasksController = $controller('TasksController as vm', {
            $scope: $scope,
            taskResolve: mockTask
          });
        }));

        it('Should have the correct URL', function () {
          expect(viewstate.url).toEqual('/:taskId');
        });

        it('Should have a resolve function', function () {
          expect(typeof viewstate.resolve).toEqual('object');
          expect(typeof viewstate.resolve.taskResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(viewstate, {
            taskId: 1
          })).toEqual('/tasks/1');
        }));

        it('should attach an Task to the controller scope', function () {
          expect($scope.vm.task._id).toBe(mockTask._id);
        });

        it('Should not be abstract', function () {
          expect(viewstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(viewstate.templateUrl).toBe('modules/tasks/client/views/view-task..html');
        });
      });

      describe('Create Route', function () {
        var createstate,
          TasksController,
          mockTask;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          createstate = $state.get('tasks.create');
          $templateCache.put('modules/tasks/client/views/form-task..html', '');

          // create mock Task
          mockTask = new TasksService();

          // Initialize Controller
          TasksController = $controller('TasksController as vm', {
            $scope: $scope,
            taskResolve: mockTask
          });
        }));

        it('Should have the correct URL', function () {
          expect(createstate.url).toEqual('/create');
        });

        it('Should have a resolve function', function () {
          expect(typeof createstate.resolve).toEqual('object');
          expect(typeof createstate.resolve.taskResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(createstate)).toEqual('/tasks/create');
        }));

        it('should attach an Task to the controller scope', function () {
          expect($scope.vm.task._id).toBe(mockTask._id);
          expect($scope.vm.task._id).toBe(undefined);
        });

        it('Should not be abstract', function () {
          expect(createstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(createstate.templateUrl).toBe('modules/tasks/client/views/form-task..html');
        });
      });

      describe('Edit Route', function () {
        var editstate,
          TasksController,
          mockTask;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          editstate = $state.get('tasks.edit');
          $templateCache.put('modules/tasks/client/views/form-task..html', '');

          // create mock Task
          mockTask = new TasksService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Task Name'
          });

          // Initialize Controller
          TasksController = $controller('TasksController as vm', {
            $scope: $scope,
            taskResolve: mockTask
          });
        }));

        it('Should have the correct URL', function () {
          expect(editstate.url).toEqual('/:taskId/edit');
        });

        it('Should have a resolve function', function () {
          expect(typeof editstate.resolve).toEqual('object');
          expect(typeof editstate.resolve.taskResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(editstate, {
            taskId: 1
          })).toEqual('/tasks/1/edit');
        }));

        it('should attach an Task to the controller scope', function () {
          expect($scope.vm.task._id).toBe(mockTask._id);
        });

        it('Should not be abstract', function () {
          expect(editstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(editstate.templateUrl).toBe('modules/tasks/client/views/form-task..html');
        });

        xit('Should go to unauthorized route', function () {

        });
      });

    });
  });
}());
