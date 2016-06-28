'use strict';

angular.module('legacyApp')
    .controller('MainCtrl', function ($scope, $http, $uibModal) {
        var self = this;
        self.users = [];

        $http.get('/api/users').success(function (users) {
            self.users = users;
        });

        self.options = {};

        self.addOrUpdateUser = function (user) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/main/user/form.html',
                controller: function (user, $uibModalInstance) {
                    var self = this;
                    self.user = user;

                    self.close = function () {
                        $uibModalInstance.dismiss();
                    };

                    self.save = function () {

                    };
                },
                controllerAs: "ctrl",
                size: "lg",
                resolve: {
                    user: function () {
                        return angular.copy(user);
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {

            });
        };

    });
