/**
 * Created by Pillar on 2015/4/7.
 */
angular.module('at15')
    .controller('BlogDetailCtrl', ['$routeParams', function ($routeParams) {
        var vm = this;

        vm.name = $routeParams.blogName.slice(0, -3);
        vm.fileName = 'blog' + '/' + $routeParams.blogName;
    }]);