angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, $location){
	$scope.note = new Note();
	$scope.isCreating = false;

	$scope.createNote = function(note){
		$scope.isCreating = true;
		note.$save().then(function(){
			$location.path('/notes');
		})
		.catch(function(errors){
			console.log(errors);
		})
		.finally(function(){
			$scope.isCreating = false;
		});
	}
});