/**
 * Created by at15 on 15-4-7.
 */
angular.module('at15')
    .controller('MainCtrl', [function () {
        var vm = this;

        vm.noPoster = false;

        vm.togglePoster = togglePoster;

        function togglePoster() {
            vm.noPoster = !vm.noPoster;
        }
    }]);