Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    $scope.mobile_tabbar1Select = function($event, $isolateScope, $item) {
        alert("hola");
    };

}]);