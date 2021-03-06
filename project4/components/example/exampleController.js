'use strict';

/**
 * Defined a controller named 'ExampleController' that works with the view template
 * exampleTemplate.html.  We assume that cs142App has already been defined by
 * the main.js controller.  To access this view need to include the controller:
 *
 *  <script src="components/example/exampleController.js"></script>
 *
 * and its view template:
 *   <div ng-include="'components/example/exampleTemplate.html'" ng-controller="ExampleController"></div>
 */

cs142App.controller('ExampleController', ['$scope', function($scope) {

   // $scope.main is defined if we are a child $scope of the main $scope in which
   // case it contains the page's title property.  We update it so the page title
   // will include this view's name "Example".
   if ($scope.main) {
      $scope.main.title = 'CS142 Project #4 - Example';
   }

   $scope.main.name = window.cs142models.exampleModel().name;
   $scope.main.motto = window.cs142models.exampleModel().motto;

   /*
    *  The view template accesses there properties:
    *
    *  testVariable = A string property that is displayed by the template. It demonstrates
    *  one-way binding from the scope to html.
    */
   $scope.testVariable = 'Hello World';

   /*  textInput - A string property that is written by a input tag and displayed. It
    *  demonstrates the two-way binding of Angular
    */
   $scope.textInput = '';

   /*  buttonWasClicked - A string property holding the name of the last button clicked.
    *  It is set the buttonClick() handler and read by the view template.
    */
   $scope.buttonWasClicked = '';

   /*
    *  buttonClick - The handler function called when a  button is clicked.  It is passed
    *  the button name.
    */

   $scope.buttonClick = function(buttonName) {
      $scope.buttonWasClicked = buttonName;
   };

   /*
    * Stores variable properties that are used in the example template.
    */
   $scope.example = {
      mottoInput: '',
   }

   /*
    * switchMotto: changes motto by assigning value from text input field 
    */
   $scope.switchMotto = function(newMotto) {
      $scope.main.motto = newMotto;
      $scope.example.mottoInput = '';
   };

   /*
    * resetMotto: resets motto to original value assigned from example model data
    */
   $scope.resetMotto = function() {
      $scope.main.motto = window.cs142models.exampleModel().motto;
      $scope.example.mottoInput = '';
   };
}]);
