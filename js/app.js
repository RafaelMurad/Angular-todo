angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService', 'TodoDirective']);

var todoApp = angular.module('TodoApp').config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	})
	.when('/todo', {
		templateUrl: 'templates/todo.html',
		controller: 'TodoController'
	})
	.when('/todo/edit/:id', {
	    templateUrl:'templates/edit-todo.html',
	    controller: 'EditTodoController'
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})
	.when('/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'LogoutController'
	});
	
});

todoApp.run(function($rootScope,store){
	$rootScope.store = store;
});
