'use strict';
angular.module('app.services', [])
    .factory('Login', function ($http) {
        return {
            login: function (loginModel, success, error) {
                $http
                    .post(
                        'http://localhost:1367/login', loginModel)
                    .success(function (response) {
                        success(response);
                    })
                    .error(error);
            },
            forgotPassword: function (forgotPasswordModel, success, error) {
                $http
                    .post(
                        'http://localhost:1367/forgotpassword', forgotPasswordModel)
                    .success(function (response) {
                        success(response);
                    })
                    .error(error);
            },
            register: function (registerModel, success, error) {
                $http
                    .post(
                        'http://localhost:1367/register', registerModel)
                    .success(function (response) {
                        success(response);
                    })
                    .error(error);
            }
        };
    });
