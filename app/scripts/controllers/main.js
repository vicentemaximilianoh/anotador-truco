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
    $scope.pointSub = -1;

    //Us and they score
    $scope.us = 0;
    $scope.usTeam = 'us';
    $scope.they = 0;
    $scope.theyTeam = 'they';

    $scope.modifyScore = function(data, event, team){
    	console.log(data, event);
    	if(!isNaN(data)){
	    	var score;
	    	if(team === 'us'){
	    		$scope.us+=data;
	    		score = $scope.us;
	    	}else if(team === 'they'){
	    		$scope.they+=data;
	    		score = $scope.they;
	    	}

	    	$scope.drawBoxes(team, score);
    	}

    };

    $scope.drawBoxes = function(team, score){
    	var team_id = "#score-" + team;
    	$(team_id).html("");

    	var five = score/5;
    	if(five >= 1){
    		for(var i=1;i<=five;i++){
    			var five_box = '<div class="score score-5"></div>'; 
    			$(team_id).append(five_box);
    			if(i === 3){
    				$(team_id).append('<hr/>');
    			}
    		}
    	}

    	var modules = score % 5;
    	if(modules != 0){
    		console.log(five, modules);
    		if(five === 3){
    			$(team_id).append('<hr/>');

    		}
    		var box = '<div class="score score-'+modules+'"></div>'; 
    		$(team_id).append(box);
    	}
    };

    $scope.substractScore = function(data, event){
    	var score;
    	if(data === 'they'){
    		$scope.they++;
    		score = $scope.they;
    	}else if(data === 'us'){
    		$scope.us++;
			score = $scope.us;
    	}
    	console.log(data);
    }

  });
