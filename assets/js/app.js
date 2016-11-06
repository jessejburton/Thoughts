(function(){
	var app = angular.module('Thoughts', []);

	app.controller('ThoughtController', ['$scope', function($scope){
		$scope.thoughts = thoughts;

		$scope.addThought = function(){
			$scope.thoughts.push({ 'text':$scope.newThought, 'rating': 0 });
			$scope.newThought = '';
		};
		$scope.rateThought = function(){};

	}]);

	var thoughts = [
		{
			'text': 'The sky is blue',
			'rating': 0
		},
		{
			'text': 'The stuff is great',
			'rating': 0
		},
		{
			'text': 'This is my thought',
			'rating': 0
		},
		{
			'text': 'Another Thought',
			'rating': 0
		},
		{
			'text': 'One more thought',
			'rating': 0
		},
		{
			'text': 'This is what I am thinking',
			'rating': 0
		}
	];

})();