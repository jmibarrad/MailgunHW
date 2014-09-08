'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user

        $scope.ShMessage1 = false;
        $scope.ShMessage2 = false;
        $scope.ShMessage3 = false;

        $scope.login = function (userName, password) {

            if (userName === "Admin" && password !== "123") {
                $scope.ShMessage1 = true;
                $scope.ShMessage2 = false;
                $scope.ShMessage3 = false;
            } else if ((userName !== "Admin" && password === "123") || (userName !== "User" && password == "0000")) {
                $scope.ShMessage1 = false;
                $scope.ShMessage2 = true;
                $scope.ShMessage3 = false;
            } else if ((userName === "User" && password !== "0000")) {
                $scope.ShMessage1 = false;
                $scope.ShMessage2 = false;
                $scope.ShMessage3 = true;
            } else {
                 if (userName === "Admin" && password === "123") {
                     $location.path('/admin');
                 } else if (userName === "User" && password === "0000") {
                     $location.path('/profile');
                 }
            }

            return false;
        };

        /*
        $scope.user = {

        };

        $scope.login = function () {
            Login.login($scope.user, function (response) {

            }, function (error) {

            });
        };
        */
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.register = function () {
            $location.path('/register');
            return false;
        };
    }])

    // Path: /Register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', 'Login', function ($scope, $location, $window, Login) {
        $scope.$root.title = 'AngularJS SPA | Register';
        // TODO: Register a New User
        $scope.login = function () {
            $location.path('/login');
            return false;
        };

        $scope.user = {

        };

        $scope.register = function () {
            Login.register($scope.user, function (response) {

            }, function (error) {

            });
        };

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', 'Login', function ($scope, $location, $window,Login) {
        $scope.$root.title = 'AngularJS SPA | Recuperar Password';
        // TODO: Forgot Password
        
        $scope.ShowMessage = false;

        $scope.user = {

        };

        $scope.forgotPassword = function () {
            Login.forgotPassword($scope.user, function (response) {

            }, function (error) {

            });
        };

    }])

     // Path: /admin
    .controller('AdminCtrl', ['$scope', '$location', '$window', '$rootScope',  function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'AngularJS SPA | Admin';

        // TODO: Admin
        
        $scope.TodasLigas = [{ id_liga: 347, nombre: 'Española', fecha_inicio: new Date(), num_equipos: 20, num_partidos:10 }];

        $scope.idLiga = "";
        $scope.NombreLiga = "";
        $scope.FechaInicio = "";
        $scope.NumEquipos = "";
        $scope.NumPartidos = "";

        $scope.addNewLeague = function () {
            var league = { id_liga: $scope.idLiga, nombre: $scope.NombreLiga, fecha_inicio: $scope.FechaInicio, num_equipos: $scope.NumEquipos, num_partidos: $scope.NumPartidos };
            $scope.TodasLigas.push(league);
            $scope.idLiga = "";
            $scope.NombreLiga = "";
            $scope.FechaInicio = "";
            $scope.NumEquipos = "";
            $scope.NumPartidos = "";
        };

        $scope.deleteLeague = function (nombre) {
            for (var i = 0; i < $scope.TodasLigas.length; i++) {
                if ($scope.TodasLigas[i].nombre === nombre) {
                    $scope.TodasLigas.splice(i, 1);
                }
            }
        };

        $scope.isEditing = false;

        $scope.IdAnterior = "";
        $scope.NombreAnterior = "";
        $scope.FechaAnterior = "";
        $scope.NumEquiposAnterior = "";
        $scope.NumPartidosAnterior = "";

        $scope.NuevoidLiga = "";
        $scope.NuevoNombre = "";
        $scope.NuevaFechaInicio = "";
        $scope.NuevoNumEquipos = "";
        $scope.NuevoNumPartidos = "";

        
        $scope.editLeague = function (idleague,teamname,fechaini,numequi,numparti) {
            $scope.isEditing = true;
            $scope.IdAnterior = idleague;
            $scope.NuevoidLiga = idleague;
            $scope.NombreAnterior = teamname;
            $scope.NuevoNombre = teamname;
            $scope.FechaAnterior = fechaini;
            $scope.NuevaFechaInicio = fechaini;
            $scope.NumEquiposAnterior = numequi;
            $scope.NuevoNumEquipos = numequi;
            $scope.NumPartidosAnterior = numparti;
            $scope.NuevoNumPartidos = numparti;
        };

        $scope.cancelEdit = function () {
            $scope.isEditing = false;
        };

        $scope.FinishEditing = function () {
            for (var i = 0; i < $scope.TodasLigas.length; i++) {
                if ($scope.TodasLigas[i].nombre === $scope.NombreAnterior){
                    $scope.TodasLigas[i].id_liga = $scope.NuevoidLiga;
                    $scope.TodasLigas[i].nombre = $scope.NuevoNombre;
                    $scope.TodasLigas[i].fecha_inicio = $scope.NuevaFechaInicio;
                    $scope.TodasLigas[i].num_equipos = $scope.NuevoNumEquipos;
                    $scope.TodasLigas[i].num_partidos = $scope.NuevoNumPartidos;
                }     
            }
            $scope.isEditing = false;
            $scope.IdAnterior = "";
            $scope.NuevoidLiga = "";
            $scope.NombreAnterior = "";
            $scope.NuevoNombre = "";
            $scope.FechaAnterior = "";
            $scope.NuevaFechaInicio = "";
            $scope.NumEquiposAnterior = "";
            $scope.NuevoNumEquipos = "";
            $scope.NumPartidosAnterior = "";
            $scope.NuevoNumPartidos = "";
        };

        $rootScope.rootligs = $scope.TodasLigas;

    }])

          // Path: /ConfigureLeague
    .controller('ConfigLeagueCtrl', ['$scope', '$location', '$window','$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'AngularJS SPA | ConfigLeague';

        // TODO: Configure a League

        $scope.Equipos = [{ id_equipo: 438, nombre: 'RealMadrid', num_jugadores: 28, director_tecnico: 'Milla' }, { id_equipo: 823, nombre: 'Barcelona', num_jugadores: 24, director_tecnico: 'Rueda' }];
        $scope.Partidos = [{ id_partido: 12, equipo1: 'RealMadrid', equipo2: 'Barcelona', fecha: new Date() }];

        $scope.idEquipo = "";
        $scope.NombreEquipo = "";
        $scope.NumeroJugadores = "";
        $scope.DirectorTecnico = "";

        $scope.addNewTeam = function () {
            var nteam = { id_equipo: $scope.idEquipo, nombre: $scope.NombreEquipo, num_jugadores: $scope.NumeroJugadores, director_tecnico: $scope.DirectorTecnico };
            $scope.Equipos.push(nteam);
            $scope.idEquipo = "";
            $scope.NombreEquipo = "";
            $scope.NumeroJugadores = "";
            $scope.DirectorTecnico = "";
        };

        $scope.deleteTeam = function (nombre) {
            for (var i = 0; i < $scope.Equipos.length; i++) {
                if ($scope.Equipos[i].nombre === nombre) {
                    $scope.Equipos.splice(i, 1);
                }
            }
        };

        $scope.isEditing1 = false;

        $scope.IdAnterior = "";
        $scope.NombreAnterior = "";
        $scope.NumJugadoresAnterior = "";
        $scope.DirectorTecnicoAnterior = "";

        $scope.NuevoidEquipo = "";
        $scope.NuevoNombreEquipo = "";
        $scope.NuevoNumeroJugadores = "";
        $scope.NuevoDirectorTecnico = "";


        $scope.editTeam = function (idteam, teamname, numplayers, coach) {
            $scope.isEditing1 = true;
            $scope.IdAnterior = idteam;
            $scope.NuevoidEquipo = idteam;
            $scope.NombreAnterior = teamname;
            $scope.NuevoNombreEquipo = teamname;
            $scope.NumJugadoresAnterior = numplayers;
            $scope.NuevoNumeroJugadores = numplayers;
            $scope.DirectorTecnicoAnterior = coach;
            $scope.NuevoDirectorTecnico = coach;
        };

        $scope.cancelEdit1 = function () {
            $scope.isEditing1 = false;
        };

        $scope.FinishEditing1 = function () {
            for (var i = 0; i < $scope.Equipos.length; i++) {
                if ($scope.Equipos[i].nombre === $scope.NombreAnterior) {
                    $scope.Equipos[i].id_equipo = $scope.NuevoidEquipo;
                    $scope.Equipos[i].nombre = $scope.NuevoNombreEquipo;
                    $scope.Equipos[i].num_jugadores = $scope.NuevoNumeroJugadores;
                    $scope.Equipos[i].director_tecnico = $scope.NuevoDirectorTecnico;
                }
            }
            $scope.isEditing1 = false;
            $scope.IdAnterior = "";
            $scope.NuevoidEquipo = "";
            $scope.NombreAnterior = "";
            $scope.NuevoNombreEquipo = "";
            $scope.NumJugadoresAnterior = "";
            $scope.NuevoNumJugadores = "";
            $scope.DirectorTecnicoAnterior = "";
            $scope.NuevoDirectorTecnico = "";
        };

        //

        $scope.idJuego = "";
        $scope.Equipo1 = "";
        $scope.Equipo2 = "";
        $scope.Fecha = "";

        $scope.addNewGame = function () {
            var ngame = { id_partido: $scope.idJuego, equipo1: $scope.Equipo1, equipo2: $scope.Equipo2, fecha: $scope.Fecha }
            $scope.Partidos.push(ngame);
            $scope.idJuego = "";
            $scope.Equipo1 = "";
            $scope.Equipo2 = "";
            $scope.Fecha = "";
        };

        $scope.deleteGame = function (id) {
            for (var i = 0; i < $scope.Partidos.length; i++) {
                if ($scope.Partidos[i].id_partido === id) {
                    $scope.Partidos.splice(i, 1);
                }
            }
        };

        $scope.isEditing2 = false;

        $scope.IdJAnterior = "";
        $scope.Equipo1Anterior = "";
        $scope.Equipo2Anterior = "";
        $scope.FechaAnterior = "";

        $scope.NuevoidJuego = "";
        $scope.NuevoEquipo1 = "";
        $scope.NuevoEquipo2 = "";
        $scope.NuevaFecha = "";


        $scope.editGame = function (idgame, team1, team2, day) {
            $scope.isEditing2 = true;
            $scope.IdJAnterior = idgame;
            $scope.NuevoidJuego = idgame;
            $scope.Equipo1Anterior = team1;
            $scope.NuevoEquipo1 = team1;
            $scope.Equipo2Anterior = team2;
            $scope.NuevoEquipo2 = team2;
            $scope.FechaAnterior = day;
            $scope.NuevaFecha = day;
        };

        $scope.cancelEdit2 = function () {
            $scope.isEditing2 = false;
        };

        $scope.FinishEditing2 = function () {
            for (var i = 0; i < $scope.Partidos.length; i++) {
                if ($scope.Partidos[i].id_partido === $scope.IdJAnterior) {
                    $scope.Partidos[i].id_partido = $scope.NuevoidJuego;
                    $scope.Partidos[i].equipo1 = $scope.NuevoEquipo1;
                    $scope.Partidos[i].equipo2 = $scope.NuevoEquipo2;
                    $scope.Partidos[i].fecha = $scope.NuevaFecha;
                }
            }
            $scope.isEditing2 = false;
            $scope.IdJAnterior = "";
            $scope.NuevoidJuego = "";
            $scope.Equipo1Anterior = "";
            $scope.NuevoEquipo1 = "";
            $scope.Equipo2Anterior = "";
            $scope.NuevoEquipo2 = "";
            $scope.FechaAnterior = "";
            $scope.NuevaFecha = "";
        };

    }])

          // Path: /profile
    .controller('ProfileCtrl', ['$scope', '$location', '$window','$rootScope', function ($scope, $location, $window,$rootScope) {
        $scope.$root.title = 'Angular JSP | Mi perfil';
        // TODO: User Profile

      //  console.log($rootScope.rootligs[0].nombre);

        $scope.Ligas = [
        { id_liga: 347, nombre: 'Española', fecha_inicio: new Date(), num_equipos: 20, num_partidos: 10},
        { id_liga: 284, nombre: 'Italiana', fecha_inicio: new Date(), num_equipos: 32, num_partidos: 21},
        { id_liga: 67, nombre: 'Francesa', fecha_inicio: new Date(), num_equipos: 23, num_partidos: 16},
        { id_liga: 42, nombre: 'Inglesa', fecha_inicio: new Date(), num_equipos: 25, num_partidos: 15},
        { id_liga: 333, nombre: 'Alemana', fecha_inicio: new Date(), num_equipos: 20, num_partidos: 9},
        { id_liga: 88, nombre: 'Hondureña', fecha_inicio: new Date(), num_equipos: 22, num_partidos: 11},
        { id_liga: 156, nombre: 'Mexicana', fecha_inicio: new Date(), num_equipos: 35, num_partidos: 20 },
        { id_liga: 622, nombre: 'Estaounidense', fecha_inicio: new Date(), num_equipos: 27, num_partidos: 18},
        { id_liga: 728, nombre: 'Koreana', fecha_inicio: new Date(), num_equipos: 22, num_partidos: 14 },
        { id_liga: 101, nombre: 'Africana', fecha_inicio: new Date(), num_equipos: 17, num_partidos: 12}];

        $scope.myLigas = [];

        $scope.SearchLeague = function() {
            for (var i=0; i<$scope.Ligas.length; i++){
                if ($scope.Ligas[i].nombre === $scope.Buscar) {
                    $location.path = ('/login');
                }
            }
        };


        $scope.getLiga = function() {
            for (var i = 0; i < $scope.Ligas.length; i++) {
                if ($scope.Ligas[i].nombre === $scope.Buscar) {
                    return $scope.Ligas[i];
                }
            }
            return null;
        };

        $scope.Register = function (idlig) {
            for (var i = 0; i < $scope.Ligas.length; i++) {
                if ($scope.Ligas[i].id_liga === idlig) {
                    var l = $scope.Ligas[i];
                    $scope.myLigas.push(l);
                    $scope.Ligas.splice(i, 1);
                }
            }
        };



    }])

              // Path: /league/:id
    .controller('LeagueCtrl', ['$scope', '$location', '$window', '$rootScope', function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'Angular JSP | Liga';
        // TODO: League

        //  console.log($rootScope.rootligs[0].nombre);

        $scope.lospartidos = [{ idjuego: 123, equipo1: 'Barcelona', equipo2: 'Real Madrid', s1:0, s2:0, fecha: new Date(), predicted:0 },
                              { idjuego: 34, equipo1: 'Juventus', equipo2: 'Milan', s1: 0, s2: 0, fecha: new Date(), predicted: 0 },
                              { idjuego: 728, equipo1: 'Olimpia', equipo2: 'Real España', s1: 0, s2: 0, fecha: new Date(), predicted: 0 },
                              { idjuego: 192, equipo1: 'Marathon', equipo2: 'Platense', s1: 0, s2: 0, fecha: new Date(), predicted: 0 },
                              { idjuego: 436, equipo1: 'Corinthians', equipo2: 'Chivas', s1: 0, s2: 0, fecha: new Date(), predicted: 0 },
                              { idjuego: 772, equipo1: 'Madrid FC', equipo2: 'Chelsea', s1: 0, s2: 0, fecha: new Date(), predicted: 0 }
        ];

        $scope.go = function(path) {
            $location.path(path);
        };

        $scope.isPredicting = false;

        $scope.Equipo1 = "";
        $scope.Score1 = "";
        $scope.Equipo2 = "";
        $scope.Score2 = "";

        $scope.StartPrediction = function(team1, team2) {
            $scope.isPredicting = true;
            $scope.Equipo1 = team1;
            $scope.Equipo2 = team2;
        };

        $scope.cancelPredict = function() {
            $scope.isPredicting = false;
        };

        $scope.Predict = function() {

            for (var i = 0; i < $scope.lospartidos.length; i++) {
                if (($scope.lospartidos[i].equipo1 === $scope.Equipo1) && ($scope.lospartidos[i].equipo2 === $scope.Equipo2)) {
                    $scope.lospartidos[i].s1 = $scope.Score1;
                    $scope.lospartidos[i].s2 = $scope.Score2;
                    $scope.lospartidos[i].predicted = 1;
                }
            }

            $scope.Score1 = "";
            $scope.Score2 = "";

            $scope.isPredicting = false;

        };

    }])


    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);