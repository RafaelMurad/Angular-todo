angular.module('TodoDirective',[])

.directive('navBar', function() {
  return {
    restrict: 'EA',    
    templateUrl: 'templates/directives/nav-bar.html'
  };
})

.directive('todoTable', function() {
  return {
    restrict: 'EA',    
    templateUrl: 'templates/directives/todo-table.html'
  };
});