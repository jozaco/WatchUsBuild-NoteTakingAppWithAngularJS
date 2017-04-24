angular.module('NoteWrangler').controller('NotesEditController', function($scope, Note, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;
	
	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$update().finally(function(){
			$scope.isSubmitting = false;
			$location.path('/notes/' + note.id);
		});
	}
	
});