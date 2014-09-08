'use strict';

angular.module('app.services',[])
    .factory('Login', function ($http) {
        return {
            login: function (loginModel, success, error) {
                $http
                    .post(
                        'http://prediliga-api.apphb.com/login', loginModel)
                    .success(function (response) {
                            success(response);
                    })
                    .error(error);
            }
        };
    });