function umpackoReadOnlyController($scope, $http, umbRequestHelper, editorState) {
    var vm = this;

    function init() {
        vm.editable = !$scope.model.value;
    }

    init();
}
angular.module("umbraco").controller("umpackoReadOnlyController", umpackoReadOnlyController);