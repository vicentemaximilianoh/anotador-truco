'use strict';

/**
 * @ngdoc function
 * @name anotadorTrucoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anotadorTrucoApp
 */
angular.module('anotadorTrucoApp')
  .controller('MainCtrl', function ($scope) {
    /*
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    */
    $scope.point = 1;

    //Us and they score
    $scope.us = 0;
    $scope.they = 0;

    $scope.addScore = function(data, event, team){
    	var score;
    	if(team === 'us'){
    		$scope.us++;
    		score = $scope.us;
    	}else if(team === 'they'){
    		$scope.they++;
    		score = $scope.they;
    	}

    	var team_id = "#score-" + team;
    	$(team_id).html("");

    	var five = score/5;
    	if(five >= 1){
    		for(var i=1;i<=five;i++){
    			var five_box = '<div class="score score-5"></div>'; 
    			$(team_id).append(five_box);
    		}
    	}

    	var modules = score % 5;
    	if(modules != 0){
    		var box = '<div class="score score-'+modules+'"></div>'; 
    		$(team_id).append(box);
    	}
    };

  });
