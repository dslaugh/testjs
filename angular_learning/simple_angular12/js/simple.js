angular.module('simple', ['simple_services', 'simple_directives'])
.controller('SimpleCtrl', ['$scope', 'locStore', function($scope, locStore) {
    $scope.names = [];
    $scope.newName = '';

    $scope.addName = function($event) {
        if ($event.keyCode === 13) {
            $scope.names.push({value: $scope.newName});
            $scope.newName = '';
            locStore.set('names', $scope.names);
        }
    }
}]);
