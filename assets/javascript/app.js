/**
 * Created by Pillar on 2015/4/6.
 */
console.log('oops...nothing in the console except error messages...');

angular.module('at15', ['ngRoute', 'dy-ui'])

// now we config routes, ngRoute is not so good ... but enough now.
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            // TODO:the default route
            $routeProvider
                .when('/', {
                    templateUrl: 'assets/template/main.html'
                })
                .when('/blog', {
                    templateUrl: 'assets/template/blog/list.html',
                    controller: 'BlogCtrl',
                    controllerAs: 'blogList'
                })
                .when('/blog/:blogName', {
                    templateUrl: 'assets/template/blog/detail.html',
                    controller: 'BlogDetailCtrl',
                    controllerAs: 'blogDetail'
                })
                .when('/project', {
                    templateUrl: 'assets/template/project/list.html',
                    controller: 'ProjectCtrl',
                    controllerAs: 'projectList'
                })
                .when('/project/:projectName', {
                    templateUrl: 'assets/template/project/detail.html',
                    controller: 'ProjectDetailCtrl',
                    controllerAs: 'projectDetail'
                })
                .when('/about', {
                    templateUrl: 'assets/template/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                })
                .when('/friend', {
                    templateUrl: 'assets/template/friend.html',
                    controller: 'FriendCtrl',
                    controllerAs: 'friend'
                }).
                otherwise({
                    redirectTo: '/404'
                });

            //$locationProvider.html5Mode(true);
        }]);