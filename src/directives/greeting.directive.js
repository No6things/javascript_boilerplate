import angular from 'angular';

function greeting() {
  return {
    restrict: 'E',
    scope: {
      section: '='
    },
    template: '<h1>{{section}}</div>'
  }
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
